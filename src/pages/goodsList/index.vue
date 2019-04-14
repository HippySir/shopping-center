<template>
  <div class="goodList">
    <div class="goodsList">
      <div class="searchbox">
        <input type="text" placeholder="搜索" class="search">
        <div class="searchWord">
          <icon type="search" size="20" color="#c9c9c9"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myrequert from "../../utils/myrequest.js";

export default {
  data() {
    return {};
  },

  // 注册组件
  components: {},

  async mounted() {}
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
