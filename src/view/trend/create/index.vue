<template>
  <div class="page-container">
    <div class="body create">
      <div class="head">
        动态发布
      </div>
      <div class="form-wrapper pt60" style="width:600px;">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="标题" prop="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="分类" prop="cid">
            <el-select v-model="form.cid" placeholder="请选择分类">
              <el-option
                v-for="item in categories"
                :key="item.key"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="缩略图">
            <el-upload
              class="avatar-uploader"
              action="/api/common/upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.picture" :src="form.picture" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" v-model="form.summary" :rows="4"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <ueditor :value.sync="form.content" ref="ue"></ueditor>
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="form.author"></el-input>
          </el-form-item>
          <el-form-item label="付费阅读">
            <el-switch on-text="" off-text="" v-model="form.is_need_pay"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import "./style.less";
  import ueditor from "../../block/ueditor/index";
  import{
	  AdminTrendCategoryModel,
    AdminTrendCreateModel,
    AdminTrendDetailModel
  } from '../../../common/rest';
  import {
  	extend
  } from 'lodash';

  export default {
	  components: {
	  	ueditor
    },
    data() {
      return {
	      categories: [],
	      form: {
		      id: this.$route.params.id,
		      title: '',
		      picture: undefined,
		      cid: '',
		      summary: '',
		      content: '',
		      author: '脉宝',
		      is_need_pay: true,
		      share_title: '',
		      share_desc: '',
		      share_pic: ''
	      },
	      rules: {
		      title: [
			      {required: true, message: '标题不能为空', trigger: 'blur'},
		      ],
		      cid: [
			      {type: 'number', message: '分类不能为空', trigger: 'blur'}
		      ],
		      content: [
			      {required: true, message: '内容不能为空', trigger: 'blur'}
		      ]
	      }
      }
    },
    created() {
      let id = this.$route.params.id;
      if (id) {
      	this.loadArticleDetail(id);
      }

      this.loadCates();
    },
    methods: {
	    loadCates() {
		    AdminTrendCategoryModel.getInstance().execute().then(data => {
			    this.categories = data.list;
          this.categories.forEach(i => {
            if (i.level) {
              let plus = '|';
              for (var j=0; j<i.level; j++) {
                plus =  plus + '---';
              }
              i.name = plus + i.name
            }
          });
		    });
	    },
	  	loadArticleDetail(id) {
	  		let params = {
	  			id: id
        };
			  AdminTrendDetailModel.getInstance().execute(params).then(data => {
			  	this.form = extend({}, this.form , data, {
					  is_need_pay: data.is_need_pay?true:false,
            cid: data.category[data.category.length-1]['id']
          });
        });
      },
	    onSubmit() {
		    this.form.content = this.$refs.ue.getUEContent();

		    let params = extend({}, this.form, {
		    	is_need_pay: this.form.is_need_pay ? 1 : 0
        });

		    this.$refs['form'].validate((valid) => {
		    	if (!valid) return;

			    AdminTrendCreateModel.getInstance().execute(params).then(data => {
				    this.$message('保存成功');
				    this.$router.push({name: 'article_index'});
			    });
        });
      },
	    handleAvatarSuccess(res, file) {
		    this.form.picture = res.data.url;
	    },
	    beforeAvatarUpload(file) {
		    const isLtFormat = "image/jpeg | image/jpg | image/png";
		    const isLt2M = file.size / 1024 / 1024 < 2;

		    if (isLtFormat.indexOf(file.type) == -1) {
			    this.$message.error('上传图片只能是 JPG 、JPEG 或 PNG 格式!');
		    }
		    if (!isLt2M) {
			    this.$message.error('上传图片大小不能超过 2MB!');
		    }
		    return isLtFormat && isLt2M;
	    }
    }
  }
</script>
