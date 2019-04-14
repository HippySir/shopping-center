<template>
  <div class="category">
  <search></search>
    <!-- 轮播图区域 -->
    <swiper
      indicator-dots
      autoplay="true"
      indicator-color="rgba(0, 0, 0, .3)"
      indicator-active-color="#eb4450"
      class="swiperbox"
      circular
    >
      <block v-for="(item,index) in swiperList" :key="index">
        <swiper-item class="swiperlistbox">
          <image
            mode="aspectFill"
            :src="item.image_src"
            class="slideimage"
          />
        </swiper-item>
      </block>
    </swiper>
    <!-- 分类层 -->
    <div class="categorylista">
      <img v-for="(item,index) in categoryList" :src="item.image_src" :key="index">
    </div>
    <!-- 楼层区域 -->
    <div class="foolAre" v-for="(item,index) in foolterList" :key="index">
      <div class="title">
        <img :src="item.floor_title.image_src" alt>
      </div>
      <div class="floormain">
        <div class="left">
          <img
            :src="item.product_list[0].image_src"
            alt
          >
        </div>
        <div class="right">
          <img
             v-if="!(listindex==0)"
            :src="listitem.image_src"
            alt
            v-for="(listitem,listindex) in item.product_list"
            :key="listindex"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入封装的头部搜索组件
import search from "../../components/search";

// 导入请求函数
import myrequert from "../../utils/myrequest.js";

export default {
  data() {
    return {
      swiperList:[],
      categoryList:[],
      foolterList:[],
    };
  },

  // 注册组件
  components:{
    search
  },

  
  async mounted() {
  //  获取轮播图的数据
    let res = await myrequert(
      "https://itjustfun.cn/api/public/v1/home/swiperdata"
    );
    this.swiperList = res.data.data;
   
  //  获取分类的数据
     let resa = await myrequert(
      "https://itjustfun.cn/api/public/v1/home/catitems"
    );
    this.categoryList = resa.data.data;
    console.log(this.categoryList);

    // 获取楼层区域的数据
    let foolterdata = await myrequert(
      "https://itjustfun.cn/api/public/v1/home/floordata"
    );
    console.log(foolterdata);
    this.foolterList = await foolterdata.data.data;
  }
};
</script>

<style scoped lang="less">
.category {
 
  // 轮播图
  .swiperbox {
    height: 340rpx;
    .swiperlistbox {
      height: 100%;

      .slideimage {
        width: 100%;
      }
    }
  }
  .categorylista {
    display:flex;
    height: 190rpx;
    justify-content:space-around;
    margin-top:24rpx;
    
    img{
      height:128rpx;
      width:128rpx;


    }
  }
  .foolAre {
    .title {
      height: 90rpx;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .floormain {
      padding: 20rpx;
      display: flex;
      justify-content: space-between;
      height: 370rpx;
      .left {
        width: 230rpx;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 470rpx;
        img {
          width: 230rpx;
          height: 175rpx;
          &:nth-child(3) {
            margin-top: 20rpx;
          }
          &:nth-child(4) {
            margin-top: 20rpx;
          }
        }
      }
    }
  }
}
</style>
