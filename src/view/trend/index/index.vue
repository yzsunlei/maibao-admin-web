<template>
  <div class="page-container">
    <div class="body create">
      <div class="head">
        动态列表<router-link :to="{name: 'article_create'}" class="plus fr">+ 发布新文章</router-link>
      </div>
      <div class="list">
        <div class="batch-form">
          <el-form :inline="true" :model="input" class="pt10">
            <el-form-item label="标题" prop="title">
              <el-input v-model="input.keyword" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="分类" prop="category">
              <el-select v-model="input.cid" placeholder="全部分类">
                <el-option
                  v-for="item in categories"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="状态" prop="count">
              <el-select v-model="input.is_publish" placeholder="全部状态">
                <el-option
                  v-for="item in status"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onQuery">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="table-wrapper">
          <el-table :data="list" stripe style="width: 100%">
            <el-table-column prop="id" label="序号" width="80"></el-table-column>
            <el-table-column label="标题" width="300">
              <template scope="scope">
                <a title="前台预览" :href="'/article/view/'+scope.row.id" target="_blank">{{scope.row.title}}</a>
              </template>
            </el-table-column>
            <el-table-column prop="category.name" label="分类" width="120"></el-table-column>
            <el-table-column prop="created_at" label="发布时间" width="180"></el-table-column>
            <el-table-column prop="author" label="发布人" width="100"></el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button type="text" size="small" @click="handlePublish(scope.row)" v-if="!scope.row.is_publish">发布</el-button>
                <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination-wrapper tac mt10 pt10 pb10">
            <el-pagination
              :page-size="input.size"
              :layout="count > input.size ? 'prev, pager, next, total' : 'total'"
              :total="count"
              @current-change="onQuery"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "./style.less";
  import{
	  mapGetters,
	  mapActions
  } from 'vuex';
  import {
  	AdminTrendCategoryModel,
    AdminTrendIndexModel,
    AdminTrendPublishModel,
    AdminTrendDeleteModel
  } from '../../../common/rest';

  export default {
    data() {
      return {
      	categories: [],
        status: [
          { value: 0, label: '未发布' },
          { value: 1, label: '已发布' }
        ],
        input: {
        	page: 1,
          size: 10,
	        cid: undefined,
	        keyword: '',
          is_publish: undefined
        },
        list: [],
        count: undefined
      }
    },
    created() {
    	// 获取分类列表
      this.loadCates();

      // 获取文章列表
      this.loadArticle();
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
      loadArticle() {
        AdminTrendIndexModel.getInstance().execute(this.input).then(data => {
        	this.list = data.list;
        	this.count = data.count;
        });
      },
      onQuery(page) {
    		if (page instanceof Event) {
    			page = 1;
        }

	    	this.input.page = page;
	    	this.loadArticle();
      },
	    handlePublish(item) {
        if (item.id) {
	        let params = {
		        id: item.id
	        };
        	AdminTrendPublishModel.getInstance().execute(params).then(data => {
        		this.$message("发布成功");
        		this.loadArticle();
          });
        }
      },
	    handleEdit(item) {
    		this.$router.push({name: 'article_create', params: {id: item.id}});
      },
	    handleDelete(item) {
    		if (item.id == 1) return this.$message({message: "该文章为固定单页，你不能删除", type: "error"});

		    this.$confirm('确认要删除 "'+ item.title +'" ?', '温馨提示')
			    .then(() => {
		    	  let params = {
		    	  	id: item.id
            };
				    ArticleDeleteModel.getInstance().execute(params).then(data => {
					    this.$message("删除成功");
					    this.loadArticle();
				    });
          });
      }
    }
  }
</script>
