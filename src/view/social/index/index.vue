<template>
  <div class="page-container">
    <div class="body social-index">
      <div class="head">
        用户中心
      </div>
      <div class="list">
        <div class="batch-form">
          <el-form :inline="true" :model="input" class="pt10">
            <el-form-item label="查询关键词" prop="type">
              <el-select v-model="input.type" placeholder="全部关键词">
                <el-option
                  v-for="item in types"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="" prop="value">
              <el-input v-model="input.value" placeholder="请输入查询值"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onQuery">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="table-wrapper">
          <el-table :data="list" stripe style="width: 100%">
            <el-table-column prop="id" label="序号" width="80"></el-table-column>
            <el-table-column prop="username" label="用户名" width="100"></el-table-column>
            <el-table-column prop="nickname" label="昵称" width="100"></el-table-column>
            <el-table-column prop="sex" label="性别" width="80"></el-table-column>
            <el-table-column prop="mobile" label="手机" width="180"></el-table-column>
            <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
            <el-table-column prop="company" label="公司" width="180"></el-table-column>
            <el-table-column prop="position" label="职位" width="180"></el-table-column>
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
  import {
    AdminSocialIndexModel,
    AdminSocialDeleteModel,
  } from '../../../common/rest';

  export default {
    data() {
      return {
        types: [
          { id: 1, key: "uid", name: "UID" },
          { id: 1, key: "username", name: "用户名" },
          { id: 1, key: "nickname", name: "昵称" },
          { id: 1, key: "mobile", name: "手机号" },
          { id: 1, key: "email", name: "邮箱" },
          { id: 1, key: "company", name: "公司" },
          { id: 1, key: "position", name: "职位" },
          { id: 1, key: "country", name: "国家" },
          { id: 1, key: "province", name: "省/直辖市等" },
          { id: 1, key: "city", name: "市/区等" },
          { id: 1, key: "profession", name: "专业领域" },
          { id: 1, key: "part", name: "专长" },
          { id: 1, key: "homeplace", name: "籍贯" },
          { id: 1, key: "hometown", name: "家乡" },
          { id: 1, key: "school", name: "毕业学校" },
        ],
        input: {
          page: 1,
          size: 10,
          type: undefined,
          value: undefined,
        },
        list: [],
        count: undefined
      }
    },
    created() {
      this.loadSocial();
    },
    methods: {
      loadSocial() {
        AdminSocialIndexModel.getInstance().execute(this.input).then(data => {
          this.list = data.list;
          this.count = data.count;
        });
      },
      onQuery(page) {
        if (page instanceof Event) {
          page = 1;
        }

        this.input.page = page;
        this.loadSocial();
      },
      handleEdit(item) {
        this.$router.push({name: 'social_create', params: {id: item.id}});
      },
      handleDelete(item) {
        this.$confirm('确认要删除 "'+ item.title +'" ?', '温馨提示')
          .then(() => {
            let params = {
              id: item.id
            };
            AdminSocialDeleteModel.getInstance().execute(params).then(data => {
              this.$message("删除成功");
              this.loaSocial();
            });
          });
      }
    }
  }
</script>
