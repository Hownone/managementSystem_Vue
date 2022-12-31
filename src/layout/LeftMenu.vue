<template>
  <div class="menu-container">
    <el-menu default-active="0" divstyle="" class="el-menu-vertical-demo" :collapse="isCollapse"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item v-for="(item, i) of menuList" :key="i" :index="i + ''" @click="handleClick(item)">
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
    <div class="fold">
      <i class="el-icon-s-fold" v-show="!isCollapse" @click="isCollapse = !isCollapse"></i>
      <i class="el-icon-s-unfold" v-show="isCollapse" @click="isCollapse = !isCollapse"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuList: [
        {
          name: "客户统计",
          icon: "el-icon-s-data",
          url: "/home",
        },
        {
          name: "客户管理",
          icon: "el-icon-menu",
          url: "/home/list",
        },
        {
          name: "我的主页",
          icon: "el-icon-menu",
          url: "/home/mine",
        },
      ],
    };
  },
  methods: {
    handleClick(e) {
      this.$router.push(e.url);
    },
  },
};
</script>
<style scoped>
.el-menu-vertical-demo {
  border-right: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.menu-container {
  height: 100vh;
  background-color: #545c64;
  position: relative;
}

.fold {
  position: absolute;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  bottom: 10px;
  right: 10px;
}
</style>
