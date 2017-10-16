<template>
  <div id="selectedColumn">
    <div class="title">
      <span></span>{{selectedColumn.title}} >
    </div>
    <ul>
      <li v-for="item in selectedColumn.list" class="clearfix list">
        <div class="content pull-left">
          <p><span>专栏</span>{{item.text}}</p>
          <h6>阅读 {{item.num}}</h6>
        </div>
        <div class="imgbox pull-left">
          <img :src="item.url" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:["selectedColumn"]
  }
</script>

<style lang="less" scoped>
  #selectedColumn{
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
    .content {
      width: 70%;
      padding:4px 8px;
      font-size:14px;

      span{
        color:red;
        border:1px solid #d64543;
        font-size:12px;
        margin-right:6px;
        padding:1px 2px;
      }
      h6 {
        color:#999;
      }
    }
    .imgbox{
      width: 30%;

      img{
        width:100%;
        padding:2px;
      }
    }
    .list {
      border-bottom:1px solid #eee;
    }
    .list:first-child {
      border-top:1px solid #eee;
    }
  }
</style>

