<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src='item.picUrl'/>
      </mt-swipe-item>

    </mt-swipe>
    <!-- 九宫格改造-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu1(1).png" alt=""/>
        <div class="mui-media-body">New</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu2.png" alt=""/>
        <div class="mui-media-body">Photo</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu3.png" alt=""/>
        <div class="mui-media-body">Buy</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu4.png" alt=""/>
        <div class="mui-media-body">Message</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu5.png" alt=""/>
        <div class="mui-media-body">Video</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu6.png" alt=""/>
        <div class="mui-media-body">Call</div></a></li>
    </ul>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      lunbotuList: [
        {picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1099827.jpg', id: 19024},
        {picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1100151.jpg', id: 19026},
        {picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1095725.jpg', id: 19009},
        {picUrl: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1098869.jpg', id: 19004}
      ]
    }
  },
  created () {
    this.getLunbotu()
  },
  methods: {
    getLunbotu () {
      // 获取轮播数据的方法
      this.$axios.get('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg').then(function (response) {
        console.log(response)
        if (response.status === 200) {
          // this.lunbotuList.push(response.data.data.radioList[0].picUrl)
          Toast('加载轮播图成功。。。')
        } else {
          Toast('加载轮播图失败。。。')
        }
      })
    }
  }
}
</script>
<style scoped>
  .mint-swipe {
    height: 200px;

  }
  .mint-swipe-item:nth-child(1) {
    background-color: red;
  }
  .mint-swipe-item:nth-child(2) {
    background-color: blue;
  }
  .mint-swipe-item:nth-child(3) {
    background-color: yellow;
  }
  .mint-swipe-item:nth-child(4) {
    background-color: green;
  }
  .mint-swipe img{
    height: 100%;
    width: 100%;
  }
  .mui-grid-view.mui-grid-9{
    background-color: white;
    border: 0px;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0px;
  }
  img{
    width: 55px;
    height: 55px;
  }
  li .mui-media-body{
    font-size: 13px;
  }
</style>
