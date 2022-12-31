<template>
  <div class="header">
    <div style="float: right; width: 50px"></div>
    <!-- <div class="quit" ><img src="../assets/logo.svg" alt="">退出登录</div> -->

    <el-dropdown trigger="click">
      <div class="quit">
        <img src="https://cdn.acwing.com/media/article/image/2022/12/26/118375_765e31ff85-11.jpg" alt="" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <div @click="quitLogin">退出登录</div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  methods: {
    quitLogin() {
      this.$router.push("/");
      sessionStorage.removeItem("haslogin");
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  background-color: #eff2f7;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}

.quit {
  font-size: 14px;
  margin-right: 20px;
  color: #97a8be;
  transition: color 0.15s linear;
  cursor: pointer;
}

.quit:hover {
  color: #48576a;
}

.quit {
  display: flex;
}

.quit img {
  height: 40px;
  margin-top: 10px;
}
</style>
