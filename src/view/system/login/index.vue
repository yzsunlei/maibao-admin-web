<template>
  <div class="page-container">
    <div class="form-wrap">
      <div class="user-nologin login">
        <h1 class="tac mb20 fz18" >管理登录</h1>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="target">
            <el-input v-model="ruleForm.target" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')" ref="pass"></el-input>
          </el-form-item>
          <div class="action-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import "./style.less";
  import {
    AdminSystemLoginModel
  } from '../../../common/rest';

  export default {
    data() {
      return {
        ruleForm: {
          target: '',
          password: '',
        },
        rules: {
          target: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
      }
    },
    created() {
    	try {
		    localStorage.removeItem('user');
      } catch (e) {}
    },
    methods: {
      submitForm(formName) {
        const self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
	          AdminSystemLoginModel.getInstance().execute(this.ruleForm)
              .then((data) => {
	          	    this.$message("登录成功，将自动跳转..");
	          	    setTimeout(() => {
			              this.$store.dispatch('loadUserInfo');
			              this.$router.replace('/');
                  }, 2000);
              }).catch(err => {
                this.$message({
                  message: err.errmsg || '出错了，请重试',
                  type: 'error'
                });
              });
          } else {
            return false;
          }
        });
      }
    }
  }
</script>
