<template>
  <div class="searchBox">
    <div class="searchLitterBox">
      <input
        type="text"
        v-model="userQuery"
        class="import"
        placeholder="请输入你想要的商品"
        @confirm="searchContent"
        @input="recommend"
      >
      <icon type="search" size="20" class="searchtitle" @click="searchContent"/>
      <button class="ccancel" v-if="userQuery.length==0?false:true" @click="userQuery=''">取消</button>
      <!-- 在搜索框里面输入内容的时候需要显示出来的盒子 -->
      <div class="hiddenbox" v-show="hiddenItem.length != 0">
        <div class="hiddenItem" v-for="(item,index) in hiddenItem" :key="index" @click="ItemClick(item)">{{item.goods_name}}</div>
      </div>
    </div>
    <div class="searchHistory">
      <div class="historyTitle">
        <span>历史搜索</span>
        <icon type="clear" @click="clearList" size="20"/>
      </div>
      <div class="searchList">
        <div class="list" v-for="(item,index) in searchList" :key="index">{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入封装好了的请求函数
import myrequrest from '../../utils/myrequest.js';
export default {
  data() {
    return {
      userQuery: "",
      searchList: [],
      hiddenItem:[]
    };
  },
  methods: {
    // 影藏框下拉列表的点击搜索的函数
    ItemClick(item){
      this.userQuery = item.goods_name.split(' ')[0];
      this.searchContent();

    },
    // 搜若的相关的推荐
   async recommend(e){
    let resa = await myrequrest.get(
      "https://itjustfun.cn/api/public/v1/goods/qsearch",
      {
        query: this.userQuery
      }
    );
   
    this.hiddenItem = resa.data.data || [];
     
      console.log(e);
      console.log(e.target.value,123);
      console.log(this.hiddenItem);
    },

    // 清空搜索历史的函数
    clearList() {
      console.log("你好");
      this.searchList = [];
      // 清空页面的缓存
      try {
        wx.removeStorageSync("searchlist");
        console.log("nihao");
      } catch (e) {
        // Do something when catch error
        console.log(e);
      }
    },

    // 搜索内容的函数
    searchContent() {
      if (this.userQuery == "") {
        return false;
      }
      this.searchList.unshift(this.userQuery);
      this.searchList = [...new Set(this.searchList)];
      wx.setStorageSync("searchlist", this.searchList);
      wx.redirectTo({
        url: "/pages/goodsList/main?query=" + this.userQuery
      });
    }
  }
};
</script>

<style scope lang="less">
 @import url("./search.less");
</style>
