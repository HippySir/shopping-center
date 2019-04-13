<template>
  <div class="category">
    <!--头部搜索栏 -->
    <div class="searchbox">
      <input type="text" class="search">
      <div class="searchWord">
        <icon type="search" size="20" color="#c9c9c9"/>
        <div class="word">搜索</div>
      </div>
    </div>
    <!-- 轮播图区域 -->
    <swiper
      indicator-dots
      autoplay="true"
      indicator-color="rgba(0, 0, 0, .3)"
      indicator-active-color="#eb4450"
      class="swiperbox"
      circular
    >
      <block v-for="(item,index) in [1,2,3]" :key="index">
        <swiper-item class="swiperlistbox">
          <image
            mode="aspectFill"
            src="https://img.alicdn.com/tfs/TB1kJH1QpYqK1RjSZLeXXbXppXa-520-280.jpg_q90_.webp"
            class="slideimage"
          />
        </swiper-item>
      </block>
    </swiper>
    <!-- 分类层 -->
    <div class="category"></div>
    <!-- 第一个楼层区域 -->
    <div class="foolAre">
      <div class="title">
        <img src="https://aecpm.alicdn.com/tfscom/TB1XhhKIhTpK1RjSZR0XXbEwXXa.jpg" alt>
      </div>
      <div class="floormain">
        <div class="left">
          <img
            src="https://img.alicdn.com/tfs/TB1c5zxP4TpK1RjSZFMXXbG_VXa-468-644.png_400x400q100.jpg_.webp"
            alt
          >
        </div>
        <div class="right">
          <img
            src="https://img.alicdn.com/bao/uploaded/i2/1656056986/TB2BSdGaNeK.eBjSZFuXXcT4FXa_!!1656056986.jpg_200x200q90.jpg_.webp"
            alt
          >
          <img
            src="https://img.alicdn.com/bao/uploaded/i2/1656056986/TB2BSdGaNeK.eBjSZFuXXcT4FXa_!!1656056986.jpg_200x200q90.jpg_.webp"
            alt
          >
          <img
            src="https://img.alicdn.com/bao/uploaded/i2/1656056986/TB2BSdGaNeK.eBjSZFuXXcT4FXa_!!1656056986.jpg_200x200q90.jpg_.webp"
            alt
          >
          <img
            src="https://img.alicdn.com/bao/uploaded/i2/1656056986/TB2BSdGaNeK.eBjSZFuXXcT4FXa_!!1656056986.jpg_200x200q90.jpg_.webp"
            alt
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="less">
.category {
  background-color: #eb4450;
  .searchbox {
    padding: 20px;
    position: relative;
    .search {
      background-color: #fff;
      height: 60rpx;
      border-radius: 5rpx;
    }
    .searchWord {
      margin-top: 5rpx;
      display: flex;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      icon {
        font-size: 14px;
      }
      .word {
        font-size: 14px;
        color: #c9c9c9;
        margin-left: 20rpx;
      }
    }
  }
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
  .category {
    height: 190rpx;
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
