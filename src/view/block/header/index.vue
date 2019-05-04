<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="logo fl">
        <h1 class="text">脉宝</h1>
      </div>
      <div class="navbar fl" v-if="user.uid">
        <ul>
          <li class="nav"><router-link :to="{name: 'trend_index'}">动态管理</router-link></li>
          <li class="nav"><router-link :to="{name: 'infor_index'}">消息管理</router-link></li>
          <li class="nav"><router-link :to="{name: 'social_index'}">人脉管理</router-link></li>
          <li class="nav"><router-link :to="{name: 'system_info'}">系统管理</router-link></li>
        </ul>
      </div>
      <div class="user-info fr fz13">
        <router-link :to="{name: 'user_login'}" v-if="!user.uid">请登录</router-link>
        <el-dropdown trigger="hover" @command="handleCommand" v-else>
          <span class="el-dropdown-link">
              欢迎您，{{user.nickname || user.username}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
  </div>
</template>

<script>
  import "./style.less";
  import {
  	UserInfoModel,
    UserLogoutModel
  } from '../../../common/rest';
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  export default {
    name: 'header',
    created() {
	    this.$store.dispatch('loadUserInfo');
    },
    computed: {
      ...mapGetters({
        'user': 'getUserInfo',
      })
    },
    methods: {
      handleCommand(command) {
          this[command]();
      },
      loginout() {
          this.$router.push({name: 'system_login'});
          this.$store.dispatch('clearUserInfo');
      }
    }
  }
</script>
