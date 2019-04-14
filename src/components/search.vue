<template>
      <!--头部搜索栏 -->
    <div class="searchbox">
      <input type="text" class="search">
      <div class="searchWord">
        <icon type="search" size="20" color="#c9c9c9"/>
        <div class="word">搜索</div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
     .searchbox {
     background-color: #eb4450;
    padding: 20rpx;
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
</style>