<template>
  <div class="homebox">
    <!-- 轮播图 -->
    <swiper class="swipers" indicator-dots="true" autoplay="true" interval="2000" duration="500">
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item.pics_big"/>>
        </swiper-item>
      </block>
    </swiper>
    <!-- 中间信息盒子 -->
    <div class="infoBox">
      <div class="infoTitle">￥{{goodDetail.goods_price}}</div>
      <div class="infoBottom">
        <div class="infoDiscrible">{{goodDetail.goods_name}}</div>
        <div class="infoShare">
          <span class="iconfont  iconshoucang"></span>
          <span>分享
            <button open-type="share"></button>
            </span> 
        </div>
      </div>
      <div class="expressageBox">
        <span class="expressage">快递：</span>
        <span class="expressagecontent">免运费</span>
      </div>
    </div>
    <!-- 图片展示 -->
    <div class="intoImage">
      <div class="detailWord"><span>详情</span></div>
      <div class="content" v-html="goodDetail.goods_introduce">
      
      </div>
    </div>
     <!-- 底部导航栏 -->
  <div class="bottomNavBar">
    <div class="customerservice">
      <span class="iconfont iconshoucang"></span>
      <span>联系客服
        <button open-type="contact"></button>
      </span>
    </div>
    <div class="cart">
      <span class="iconfont iconkefu"></span>
      <span>购物车</span>
    </div>
    <div class="addCart">加入购物车</div>
    <div class="atonceVuy">立即购买</div>
  </div>
  </div>
</template>

<script>
// 引入封装好的请求函数
import myrequest from '../../utils/myrequest.js';
export default {
  data() {
    return {
      goodDetail:{},
      imgUrls: [
       
      ],
      content:"",
    };
  },

  // 客服对话框事件
   handleContact(e) {
    console.log(e.path)
    console.log(e.query)
  },

  //页面转发出去的函数
  onShareAppMessage(obj){
    console.log(obj);
    if(obj.from=='button'){
      return {
        title:"我喜欢这个商品，分享给你！",
        path:"/pages/gooddetail/main",
        imageUrl:"https://img.alicdn.com/imgextra/i4/47537911/TB2k1lrhmXlpuFjy0FeXXcJbFXa_!!47537911-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"
      }
    }else{
       return {
        title:"小样是不是想打一架！！",
        path:"/pages/gooddetail/main",
        imageUrl:"https://img.alicdn.com/imgextra/i1/3107144874/TB2i9NXbwkLL1JjSZFpXXa7nFXa_!!3107144874-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"
      }
    }
  },
 async mounted() {
   wx.showShareMenu();
  let resa = await myrequest.get(
      "https://itjustfun.cn/api/public/v1/goods/detail",
    {
      goods_id:this.$root.$mp.query.id
    }) 
    console.log(this.$root.$mp.query);
    this.goodDetail  = resa.data.data;
    console.log(this.goodDetail);
    this.imgUrls = resa.data.data.pics;
    console.log(this.imgUrls);
    this
  }
  
};
</script>

<style scoped lang="less">
@import url("index.less");
</style>
