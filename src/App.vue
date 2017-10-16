<template>
  <div id="app">
    <router-view></router-view>
    <vmenu :homeMenuData="homeMenuData" class="homeMenu"></vmenu>   
  </div>
</template>

<script>
import Vmenu from './components/menu'

export default {
  name: 'app',
  data:function(){
    return {
      homeMenuData:[
        {
          text:"发现音乐",
          imgClass:"glyphicon glyphicon-search",
          isActive:"active",
          url:"/findMusic"
        },{
          text:"我的音乐",
          imgClass:"glyphicon glyphicon-music",
          isActive:"",
          url:"/myMusic"
        },{
          text:"朋友",
          imgClass:"glyphicon glyphicon-print",
          isActive:"",
          url:"/friend"
        },{
          text:"帐号",
          imgClass:"glyphicon glyphicon-user",
          isActive:"",
          url:"/user"
        },
      ]
    }
  },
  components: {
    Vmenu
  }
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
ul,li {
  list-style: none;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "微软雅黑";
  
  // padding-bottom:150px;

 .homeMenu{
   position: fixed;
   width: 100%;
   bottom:0;
   left:0;
 }
}

</style>
