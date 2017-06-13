<template>
 <div class="home">
   <div class="banner">
     <div class=" swiper-container">
      <div class=" swiper-wrapper">
        <div class="swiper-slide" v-for="img in bannerImgInfo"><img :src=bannerBaseUrl+img.picture alt="img.name"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
      </div>
  </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
      bannerBaseUrl:'http://dn-toursforfun.qbox.me/images/',
      bannerImgInfo:[]
    }
  },
  mounted () {
    var bannerImg = new Swiper('.swiper-container',{
      direction: 'horizontal',
      loop: true,
      autoplay : 5000,
      autoplayDisableOnInteraction: false,//实现点击切换后还会自动轮播(重启autoplay属性)
      // 如果需要分页器
      pagination: '.swiper-pagination',
      observer:true//更新swiper
    })
  },
  created () {
    this.$http.get('https://app.toursforfun.com/config/index/v1').then(function(data){
      this.bannerImgInfo = data.body.data.banner;
      console.log(this.bannerImgInfo)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../static/home.scss';

</style>
