<template>
    <div id="recoomendenedList">
         <div class="recommedned-list">
            <div class="title">
              <span></span>{{commendedList.title}} >
            </div>
            <ul class="list clearfix">
              <li v-for="(item,index) in commendedList.list">
                <img :src="item.url" :alt="index">
                <p>{{item.text}}</p>
                <div class="num">
                  <span :class="item.imgClass"></span>{{item.num}}万
                </div>
              </li>
            </ul>
          </div>
    </div>
</template>

<script>
    export default {
        name:'recommendenedList',
        props:['commendedList']
       
    }
</script>

<style lang="less" scoped>
    #recoomendenedList {
        .recommedned-list {
         
          .title {
            padding:10px 0;
            font-size:14px;
            font-weight:600;
            span {
              display: inline-block;
              width:3px;
              height:15px;
              background:#d64543;
              margin-right:10px;
              position: relative;
              top:2px;
            }
          }

          .list li{
              float: left;
              width:33.3%;
              padding:0 1px;
              height: 150px;
              position: relative;


              img{
                width:100%;
                height:100px;
              }

              p {
                font-size:12px;
                margin-top:5px;
                padding:0 5px;
              }
              .num {
                position: absolute;
                top:2%;
                right: 4%;
                color:#f3f3f3;
                font-size:12px;
                span {
                  margin-right:5px;
                }
              }
          }
        }
    }
    
</style>

