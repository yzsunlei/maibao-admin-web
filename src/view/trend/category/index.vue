<template>
  <div class="page-container">
    <div class="body trend-category">
      <div class="head">
        分类管理<span class="plus fr" @click="showCreate">+ 添加新分类</span>
      </div>
      <div class="list">
        <el-table :data="list" stripe style="width: 100%">
          <el-table-column prop="id" label="序号" width="100"></el-table-column>
          <el-table-column prop="name" label="分类名称" width="200"></el-table-column>
          <el-table-column prop="count" label="分类文章数" width="160"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button type="text" size="small" @click="showEdit(scope.row)">修改</el-button>
              <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <el-dialog :title="form.id?'修改分类':'添加分类'" size="tiny" :visible.sync="formVisible" v-if="formVisible">
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item prop="parent_id">
            <el-select v-model="form.parent_id" placeholder="请选择父分类">
              <el-option value="0" label="设为顶级分类"></el-option>
              <el-option
                v-for="item in list"
                :key="item.key"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="请输入名称"></el-input>
          </el-form-item>
          <el-form-item prop="link">
            <el-input v-model="form.link" placeholder="请输入链接，一般为空"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="formVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import "./style.less";
  import {
    AdminTrendCategoryModel,
    AdminTrendCategoryCreateModel,
	  AdminTrendCategoryDeleteModel
  } from '../../../common/rest';
  import ElOption from "../../../../node_modules/element-ui/packages/select/src/option";
  import {
  	extend
  } from 'lodash';

  export default {
	  components: {ElOption}, data() {
      return {
	      formVisible: false,
        form: {
	      	id: undefined,
          parent_id: undefined,
          name: '',
          link: '',
          sort: 1000
        },
        list: [],
	      rules: {
	      	'name': [{required: true, message: '名称不能为空', trigger: 'blur'}]
        }
      }
    },
    created() {
      this.loadCates();
    },
    methods: {
	    loadCates() {
        AdminTrendCategoryModel.getInstance().execute().then(data => {
			    this.list = data.list;
			    this.list.forEach(i => {
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
    	showCreate() {
        this.formVisible = true;
		    this.form = {
			    id: undefined,
          parent_id: undefined,
          name: '',
          sort: 1000
		    }
      },
	    showEdit(item) {
		    this.formVisible = true;
        this.form = extend({}, this.form, item);
	    },
	    handleDelete(item) {
        if (item.count) {
        	return this.$message({
            message: "请先删除该分类下的所有文章",
            type: "error"
        	});
        }

        this.$confirm('确认删除该分类：' + item.name).then(data => {
        	let params = {
        		id: item.id
          };
	        AdminTrendCategoryDeleteModel.getInstance().execute(params).then(data => {
		        this.$message("删除成功");
		        this.loadCates();
	        });
        });
	    },
	    handleSubmit() {
	    	if (this.form.parent_id == null) return this.$message({message: '请选择父分类', type: 'error'});
	    	if (!this.form.name) return this.$message({message: '分类名称不能为空', type: 'error'});

	    	if (this.form.parent_id == 0) this.form.parent_id = undefined;
		    AdminTrendCategoryCreateModel.getInstance().execute(this.form).then(data => {
		    	this.$message('操作成功');
			    this.loadCates();
			    this.formVisible = false;
		    });
      }
    }
  }
</script>
