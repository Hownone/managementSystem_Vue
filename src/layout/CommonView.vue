<template>
  <div class="container">
    <left-menu></left-menu>
    <div style="flex: 1">
      <header-view></header-view>
      <div style="padding: 15px">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import LeftMenu from "./LeftMenu.vue";
import HeaderView from "./HeaderView.vue";

export default {
  data() {
    return {};
  },
  components: {
    LeftMenu,
    HeaderView,
  },
};
</script>
<style scoped>
.container {
  display: flex;
  height: 100vh;
}
</style>
