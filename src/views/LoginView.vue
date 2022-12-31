<template>
  <div class="homeBox">
    <div class="container">
      <div class="login-box">
        <div class="title">客户管理系统</div>
        <div class="apple-btn login-apple">
          <li class="red-btn"></li>
          <li class="yellow-btn"></li>
          <li class="green-btn"></li>
        </div>
        <div class="title">Login</div>
        <form @submit.prevent="loginForm">
          <div class="input">
            <input v-model="loginForm.username" type="text" id="login-user" placeholder="Input your username">
          </div>
          <div class="input">
            <input v-model="loginForm.password" type="password" id="login-password" placeholder="Input your password">
            <div class="error-message">{{ error_message }}</div>
          </div>
          <button type="submit" class="btn login-btn" @click="submitForm('loginForm')">Sign in</button>
        </form>
        <div class="change-box login-change">
          <div class="change-btn toSign" @click="GotoRegister">
            <span>Register</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer">
        <div class="manage_tip">
          <p>客户管理系统</p>
        </div>
        <el-form :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div> -->
</template>

<script>

import router from '@/router';

export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
  },
  methods: {
    submitForm() {
      if (this.loginForm.username === "admin" && this.loginForm.password === "123456") {
        this.$message({
          type: "success",
          message: "登录成功"
        });
        sessionStorage.setItem('haslogin', '1')
        this.$router.push('home/mine')
      } else {
        this.$notify.error({
          title: "错误",
          message: "请输入正确的用户名密码",
          offset: 100
        });
      }
    }
  },

  setup() {
    const GotoRegister = () => {
      router.push({
        name: "register",
      });
    }

    return {
      GotoRegister,
    }
  }

};
</script>
<style scoped>
.login_page {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("@/assets/background.jpeg");
  background-size: cover;
}

.manage_tip {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
}

.manage_tip p {
  font-size: 34px;
  color: #fff;
}

.form_contianer {
  width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
}

.form_contianer .submit_btn {
  width: 100%;
  font-size: 16px;
}

* {
  padding: 0px;
  margin: 0px;
}

.homeBox {
  position: fixed;
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(130deg, #ffc72c, #14248b);
  /* background-image: url("@/assets/background2.jpeg");
  background-size: cover; */
}

.container {
  position: absolute;
  height: 400px;
  width: 600px;
  background-color: rgba(255, 255, 255, .9);
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(17, 39, 59, 0.8);
  border: 1px solid rgba(17, 39, 59, 1);
  box-sizing: border-box;

}

.container:hover .title {
  font-size: 20px;
  /* transform: translate(0,-30%); */
}

.container:hover input {
  transform: translate(0, -30%);
}

.container:hover .btn {
  height: 30px;
  width: 90px;
  transform: translate(0, -30%);
  font-size: 12px;
}

.container:hover .change-box {
  height: 200px;
}

.container:hover .change-btn {
  display: block;
}

.title {
  margin-top: 10px;
  position: relative;
  height: 40px;
  width: 100%;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 3px;
  transition: .4s;
}

.login-box .title {
  color: white;
  text-shadow: 0px 0px 7px rgba(255, 255, 255, .9);
}

.input {
  width: 400px;
  height: 45px;
  position: relative;
  margin: 40px auto;
  /* border-radius: 45px;
    overflow: hidden; */
}

input {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  /* box-sizing: border-box; */
  padding-left: 15px;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 45px;
  transition: .4s;
}

.login-box input:focus {
  box-shadow: 0 0 10px rgba(1, 1, 1, .8);
}

.btn {
  height: 50px;
  width: 160px;
  position: relative;
  margin: -10px auto;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: rgba(255, 255, 255, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .4s;
}

.change-box {
  position: absolute;
  height: 0px;
  width: 100%;
  clip-path: polygon(100% 50%, 50% 100%, 100% 100%);
  bottom: 0px;
  transition: .4s;
}

.change-btn {
  position: absolute;
  bottom: 30px;
  right: 40px;
  font-size: 20px;
  display: none;
  font-weight: 500;
}

.change-btn:hover {
  text-shadow: 0px 0px 3px rgba(200, 200, 200, .8);
  cursor: pointer;
}

.login-box input {
  caret-color: white;
  color: rgba(255, 255, 255, 0.8);
}

.login-btn:hover {
  color: white;
  background-color: #57606f;
  box-shadow: rgba(0, 0, 0, 0.1);
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
}

.login-change {
  background-color: rgba(255, 255, 255, .8);
}

.animate_login {
  transform: rotate(-90deg);
}



.login-box {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(17, 39, 59, 0.8);
  transition: .4s;
  z-index: 1;
  transform-origin: 0 100%;
}

.error-message {
  color: red;
}



/* Mac 按钮样式及特效 */
.apple-btn {
  position: absolute;
  height: 15px;
  width: 65px;
  top: 3px;

}

.apple-btn li {
  list-style: none;
  position: relative;
  height: 15px;
  width: 15px;
  border-radius: 15px;
  opacity: 0;
}

.login-apple li {
  left: 5px;
  float: left;
}

.sign-apple li {
  right: 5px;
  float: right;
}

.sign-apple {
  right: 5px;
}

li:nth-child(2) {
  margin: 0px 2px
}

.red-btn {
  background-color: red;
  transition: .3s;
  transform: translate(0, -50%);
}

.yellow-btn {
  background-color: orange;
  /* transition-delay: .2s; */
  transition: .6s;
  transform: translate(0, -50%);
}

.green-btn {
  background-color: rgb(15, 136, 15);
  /* transition-delay: .3s; */
  transition: .9s;
  transform: translate(0, -50%);
}

.container:hover .red-btn {
  opacity: 1;
  transform: translate(0, 0);
}

.container:hover .yellow-btn {
  opacity: 1;
  transform: translate(0, 0);
}

.container:hover .green-btn {
  opacity: 1;
  transform: translate(0, 0);
}
</style>