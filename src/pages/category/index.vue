<template>
  <div class="categorybox">
    <div class="fixbox">
      <search></search>
    </div>
    <!-- 下部大盒子 -->
    <div class="mainbox">
      <div class="bigleftcontent">
        <div class="leftcontent">
          <div class="list" :class="{active:idActive==index }" @click="navclick(index)" v-for="(item,index) in navList" :key="index">{{item.cat_name}}</div>
        </div>
      </div>
      <div class="bigrightbox">
        <div class="rightcontent">
          <div class="toptitle">
            <img src="https://img.alicdn.com/simba/img/TB12kWwKhTpK1RjSZFMSuvG_VXa.jpg" alt>
          </div>
          <div class="buttonmbox" v-for="(item,index) in rightData" :key="index">
            <div class="toptitlea">
              <span>/</span>{{item.cat_name}}
              <span>/</span>
            </div>
            <div class="bottombox">
              <div class="itemlist" v-for="(itema,indexa) in item.children" :key="indexa">
                <img :src="'https://itjustfun.cn/'+itema.cat_icon" alt>
                <span>{{itema.cat_name}}</span>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//导入搜索的组件
import search from "../../components/search.vue";

// 导入请求函数
import myrequest from "../../utils/myrequest.js";
export default {
  data() {
    return {
      navList:[],
      idActive:0,    //当前的导航栏的索引
      rightData:[],
    };
  },

  methods: {
    navclick(index){
      this.idActive = index;
      this.rightData = this.navList[index].children;
      console.log(this.rightData);
    }
    
  },

async mounted() {
  // 获取导航栏的数据
  let res = await myrequest(
    "https://itjustfun.cn/api/public/v1/categories"
  );
  this.navList = res.data.data;
  this.rightData = this.navList[this.idActive].children;
  console.log(res);
},
  // 注册组件
  
  components: {
    search
  }
};
</script>

<style scoped lang="less">
// 导入本页的样式文件
@import "./index.less";
</style>
