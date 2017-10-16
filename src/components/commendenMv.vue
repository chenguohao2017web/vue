<template>
    <div id="commendenMv">
        
        <div class="recommendenMv">
            <div class="title">
              <span></span>推荐MV >
            </div>
            <ul class="list clearfix">
                <li v-for="(item,index) in commendendMv.list">
                <img :src="item.url" :alt="index">
                <p>{{item.text}}</p>
                <div class="num">
                  <span :class="item.imgClass"></span>{{item.num}}
                </div>
              </li>
            </ul>
          </div>
    </div>
</template>

<script>
    export default {
        props:["commendendMv"]
    }

</script>

<style lang="less" scoped>
    #commendenMv{
        .recommendenMv {
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
              width:50%;
              padding:0 1px;
              height: 130px;
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

