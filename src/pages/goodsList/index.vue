<template>
  <div class="goodsList">
    <div class="searchbox">
      <input type="text" :placeholder="goodsQuery" class="search">
      <div class="searchWord">
        <icon type="search" size="20" color="#c9c9c9"/>
      </div>
    </div>
    <!-- 顶部导航栏 -->
    <div class="topbar">
      <div class="composite" :class="{active: isExist==1}" @click="isExist=1">价格</div>
      <div class="salesvolume" :class="{active: isExist==2}" @click="isExist=2">销量</div>
      <div class="prices" :class="{active: isExist==3}" @click="isExist=3">综合</div>
    </div>
    <div class="bottomList">
      <div class="goodsItem" v-for="(item,index) in goodsList" :key="index">
        <div class="goodsImg">
          <img :src="item.goods_small_logo" alt>
        </div>
        <div class="goodsState">
          <div class="introduce">{{item.goods_name}}</div>
          <div class="goodsPrice">
            <span class="priceA">￥</span>
            <span class="priceB">{{item.goods_price}}</span>
            <span class="priceC">.00</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomFont" v-if="!isGo">
      ---到底了兄弟，没有了!---
    </div>
  </div>
</template>

<script>
import myrequert from "../../utils/myrequest.js";

export default {
  data() {
    return {
      isExist: 1,
      goodsQuery: "",
      goodsList: [],
      pagenum: 0,
      pagesize: 5,
      isGo: true
    };
  },

  methods: {
    async goodsrequest() {
      if (this.isGo) {
        wx.showNavigationBarLoading();
        wx.showLoading({
          title:'正在加载更多，请稍等！',
          mask: true,
        });
        if (this.goodsList.length == 0) {
          let resa = await myrequert.get(
            "https://itjustfun.cn/api/public/v1/goods/search",
            {
              query: this.goodsQuery,
              pagenum: this.pagenum,
              pagesize: this.pagesize
            }
          );
          this.goodsList = resa.data.data.goods;
          wx.hideNavigationBarLoading();
          wx.hideLoading();
        } else {
          this.pagenum = this.pagenum + 1;
          let resa = await myrequert.get(
            "https://itjustfun.cn/api/public/v1/goods/search",
            {
              query: this.goodsQuery,
              pagenum: this.pagenum,
              pagesize: this.pagesize
            }
          );
          this.goodsList = this.goodsList.concat(resa.data.data.goods);
          console.log(resa.data.data.goods);
          wx.hideNavigationBarLoading();
          wx.hideLoading();
          if (resa.data.data.goods.length == 0) {
            wx.showToast({
              title:"已经加载完了，没有更多了！",
              icon: "success",
                          });
            this.isGo = false;
          }
        }
      }
    }
  },

  // 注册组件
  components: {},

  mounted() {
    //  用户进入页面后获取的数据
    this.goodsQuery = this.$root.$mp.query.query;
    this.goodsrequest();

    // 下拉刷新页面
  },
  onPullDownRefresh() {
    console.log("hah");
  },
  onReachBottom() {
    this.goodsrequest();

    console.log(this.goodsList);
  }
};
</script>

<style scoped lang="less">
@import url("./index.less");
</style>
