<template>
  <div class="page-container">
    <div class="body create">
      <div class="head">
        动态中心<router-link :to="{name: 'trend_create'}" class="plus fr">+ 发布新动态</router-link>
      </div>
      <div class="list">
        <div class="batch-form">
          <el-form :inline="true" :model="input" class="pt10">
            <el-form-item label="关键词" prop="title">
              <el-input v-model="input.keyword" placeholder="请输入关键词"></el-input>
            </el-form-item>
            <el-form-item label="分类" prop="type">
              <el-select v-model="input.type" placeholder="全部分类">
                <el-option
                  v-for="item in types"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="用户" prop="user_id">
              <el-select v-model="input.uid" placeholder="全部用户">
                <el-option
                  v-for="item in users"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
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
            <el-table-column prop="type.name" label="分类" width="120"></el-table-column>
            <el-table-column prop="user.username" label="用户" width="120"></el-table-column>
            <el-table-column prop="content" label="内容" width="380"></el-table-column>
            <el-table-column prop="praise_num" label="点赞次数" width="100"></el-table-column>
            <el-table-column prop="share_num" label="分享次数" width="100"></el-table-column>
            <el-table-column prop="comment_num" label="评论次数" width="100"></el-table-column>
            <el-table-column prop="created_at" label="发布时间" width="180"></el-table-column>
            <el-table-column prop="deleted_at" label="显示状态" width="100"></el-table-column>
            <el-table-column label="操作" width="120">
              <template scope="scope">
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
    AdminTrendIndexModel,
    AdminTrendPublishModel,
    AdminTrendCategoryModel,
    AdminTrendDetailModel,
    AdminTrendDeleteModel
  } from '../../../common/rest';

  export default {
    data() {
      return {
      	types: [
          { id: 1, name: '好友动态' },
          { id: 2, name: '关注话题' },
          { id: 3, name: '职言分享' },
        ],
        users: [],
        status: [
          { value: 0, label: '删除' },
          { value: 1, label: '显示' }
        ],
        input: {
        	page: 1,
          size: 10,
          keyword: '',
          type: undefined,
          uid: undefined,
          is_deleted: undefined
        },
        list: [],
        count: undefined
      }
    },
    created() {
      this.loadTrend();
    },
    methods: {
      loadTrend() {
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
	    	this.loadTrend();
      },
	    handleEdit(item) {
    		this.$router.push({name: 'trend_create', params: {id: item.id}});
      },
	    handleDelete(item) {
		    this.$confirm('确认要删除 "'+ item.title +'" ?', '温馨提示')
			    .then(() => {
		    	  let params = {
		    	  	id: item.id
            };
				    AdminTrendDeleteModel.getInstance().execute(params).then(data => {
					    this.$message("删除成功");
					    this.loaTrend();
				    });
          });
      }
    }
  }
</script>
