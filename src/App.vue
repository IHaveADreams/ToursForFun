<template>
  <div id="app">
    <router-view></router-view>
    <ul class="appNav">
     <!-- 导航栏布局-->
      <li v-for="appNav in appNavArr"><a :href="appNav.url" @click="changeCla(appNav)" :class="appNav.cla"></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //页面导航栏数据及切换class
      appNavArr:[
        {
          url:'#/home',
          cla:'appBtn1_hover',
          index:1
        },
        {
          url:'#/destination',
          cla:'appBtn2',
          index:2
        },
        {
          url:'#/helper',
          cla:'appBtn3',
          index:3
        },
        {
           url:'#/information',
           cla:'appBtn4',
           index:4
        },
        {
          url:'#/mine',
          cla:'appBtn5',
          index:5
        }
      ]
    }
  },
  methods:{
    //切换class事件
    changeCla:function (theBtn) {
      for(let i = 0,l = this.appNavArr.length;i < l;i++){
        this.appNavArr[i].cla = 'appBtn' +this.appNavArr[i].index;
      };
      theBtn.cla =  'appBtn' +theBtn.index + '_hover';
    }
  }
}
</script>

<style> 
@import url(../static/public.css);
@import url(../static/swiper-3.4.2.min.css);

.appNav{
  position: fixed;
  bottom: 0;
  left:0;
  width: 100%;
  height: 3.5rem;
  background: red;
  display: flex;
  color:#444;
  background: #fff;
  border-top:1px solid #b2b2b2;
  display: flex;
  z-index: 100;
}
.appNav>li{
  flex: 1;
}
.appNav>li>a{
  display: block;
  height: 100%;
  width: 60%;
  margin-left: 20%;
  
}
.appBtn1{
  background:url('http://m.toursforfun.com/img/home/home2017v1.png');
  background-size:400% 500%;
  background-position: -4% 50%;
}
.appBtn2{
  background:url('http://m.toursforfun.com/img/home/home2017v1.png');
  background-size:400% 500%;
  background-position: 65% 50%;
}
.appBtn3{
  background:url('http://m.toursforfun.com/img/home/home2017v1.png');
  background-size:400% 500%;
  background-position: 0% 75%;
}
.appBtn4{
  background:url('http://m.toursforfun.com/img/home/home2017v1.png');
  background-size:400% 500%;
  background-position: -2% 100%;
}
.appBtn5{
  background:url('http://m.toursforfun.com/img/home/home2017v1.png');
  background-size:400% 500%;
  background-position: 65% 75%;
}




.appBtn1_hover{
  background:url('http://m.toursforfun.com/img/home/home2017v1.png');
  background-size:400% 500%;
  background-position: 28% 50%;
}
.appBtn2_hover{
  background:url('http://m.toursforfun.com/img/home/home2017v1.png');
  background-size:400% 500%;
  background-position: 97% 50%;
}
.appBtn3_hover{
  background:url('http://m.toursforfun.com/img/home/home2017v1.png');
  background-size:400% 500%;
  background-position: 32% 75%;
}
.appBtn4_hover{
  background:url('http://m.toursforfun.com/img/home/home2017v1.png');
  background-size:400% 500%;
  background-position: 30% 100%;
}
.appBtn5_hover{
  background:url('http://m.toursforfun.com/img/home/home2017v1.png');
  background-size:400% 500%;
  background-position: 100% 75%;
}

</style>
