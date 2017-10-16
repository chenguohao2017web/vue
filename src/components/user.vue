<template>
  <div id="user">
    <div class="header container clearfix">
      <div class="left pull-left">
        <span class="glyphicon glyphicon-ice-lolly"></span>
      </div>
      <div class="right pull-right">
        <span class="glyphicon glyphicon-stats"></span>
      </div>
      <span class="title">帐号</span>
    </div>

    <div class="content">
      <div class="head clearfix">
        <div class="head-left">
          <div class="headimg pull-left">
            <span class="img"></span>
          </div>
          <div class="name pull-left">
            <h6>desc</h6>
            <h5>LV7</h5>
          </div>
        </div>
        <div class="head-right pull-right">
          <span class="glyphicon glyphicon-list-alt icon"></span>
          <span>签到</span>
        </div>
      </div>
      <div class="list clearfix">
        <ul>
          <li>
            <div class="text">
              <h6>动态</h6>
              <span>{{action}}</span>
            </div>
          </li>
          <li>
            <div class="text">
              <h6>关注</h6>
              <span>{{care}}</span>
            </div>
          </li>
          <li>
            <div class="text">
              <h6>粉丝</h6>
              <span>{{fans}}</span>
            </div>
          </li>
          <li>
            <div class="text last">
              <span class="glyphicon glyphicon-pencil"></span>
              <h6>我的资料</h6>
            </div>
          </li>
        </ul>
      </div>

      <div class="myViews clearfix">
        <div class="pull-left">
          <span class="glyphicon glyphicon-lock"></span>
          <span class="text">我的消息</span>
        </div>
        <div class="pull-right">
          <span class="news">{{news}}</span>
          <span class="next">></span>
        </div>

      </div>
      <div class="myViews">
        <div class="li clearfix">
          <div class="pull-left">
            <span class="glyphicon glyphicon-align-left"></span>
            <span class="text">会员中心</span>
          </div>
          <div class="pull-right">
            <span class="next">></span>
          </div>
        </div>
        <div class="li clearfix">
          <div class="pull-left">
            <span class="glyphicon glyphicon-tint"></span>
            <span class="text">商城</span>
          </div>
          <div class="pull-right">
            <span class="next">></span>
          </div>
        </div>
        <div class="li clearfix">
          <div class="pull-left">
            <span class="glyphicon glyphicon-picture"></span>
            <span class="text">在线听歌免流量</span>
          </div>
          <div class="pull-right">
            <span class="next">></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'user',
  data() {
    return {
      action: 2,
      care: 4,
      fans: 10,
      news: 2
    }
  }
}
</script>

<style lang="less" scoped>
#user {
  .header {
    background: #d64543;
    height: 50px;
    text-align: center;
    padding-top: 3%;

    .left,
    .right {
      color: white;
      font-size: 24px;
    }
    .title {
      font-size: 18px;
      color: white;
      margin-top: 2px;
      display: inline-block;
    }
  }
  .content {

    .head {
      border-bottom: 1px solid #eee;
      padding: 10px;
      .head-left {

        .headimg {
          margin-right: 10px;
          .img {
            display: inline-block;
            background: url('./../assets/1.jpg') repeat-y;
            background-size: 100%;
            width: 50px;
            height: 50px;
            border: 1px solid #999;
            border-radius: 50%;
          }
        }
        .name {

          h6 {
            font-weight: 600;
            font-size: 16px;
            padding: 0;
            margin: 0;
            margin-bottom: 10px;
            margin-top: 5px;
          }
          h5 {
            font-size: 12px;
            color: #999;
            padding: 0;
            margin: 0;
            border: 1px solid #999;
            border-radius: 5px;
            text-align: center;
            font-style: italic;
          }
        }
      }
      .head-right {
        color: #d64543;
        border: 1px solid #d64543;
        border-radius: 10px;
        padding: 1px 4px;
        font-size: 14px;
        margin-top: 15px;
      }
    }
    .list {
      border-bottom: 10px solid #eee;
      li {
        float: left;
        width: 25%;
        text-align: center;
        padding: 10px;

        .text {
          border-right: 1px solid #eee;
        }
        .last {
          border-right: 1px solid transparent;
        }
        h6 {
          margin: 0;
          padding: 0;
          font-size: 12px;
          color: #999;
          margin-bottom: 2px;
        }
        span {
          font-weight: 600;
          font-size: 15px;
        }
      }
    }

    .myViews {

      .li {
        height: 40px;
        padding-top: 6px;
        border-bottom: 1px solid #eee;

        &:last-child {
          border-bottom: none;
        }
      }
      border-bottom: 10px solid #eee; // height: 40px;
      // line-height: 40px;
      padding: 10px;

      .pull-left span {
        color: #333;
        font-size: 16px;
        margin-right: 10px;
        margin-top: 2px;
        display: inline-block;
      }
      .pull-right {
        .news {
          border: 1px solid red;
          padding: 2px 6px;
          border-radius: 50%;
          background: #d64543;
          color: #f3f3f3;
          font-size: 12px;
          display: inline-block; // margin-bottom:2px;
        }
        .next {
          font-size: 18px;
          margin-top: 2px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>