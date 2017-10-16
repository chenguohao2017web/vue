<template>
  <div id="myMusic">
    <div class="header container clearfix">
      <div class="left pull-left">
        <span @click="addList">更多</span>
      </div>
      <div class="right pull-right">
        <span class="glyphicon glyphicon-stats"></span>
      </div>
      <span class="title">我的音乐</span>
    </div>
    <ul class="localList">
      <li v-for="item in localList" class="clearfix">
        <div class="pull-left icon">
          <span :class="item.iconCLass"></span>
        </div>
        <div class="content">
          <span class="pull-left title">{{item.title}}</span>
          <span class="pull-right num">{{item.num}} ></span>
        </div>
      </li>
    </ul>
    <myMusicList :createList="createList"></myMusicList>
    <myMusicList :createList="favourisList"></myMusicList>
    <div class="mask" v-if="maskBool" @click="removeMask"></div>
    <transition name="slide">
      <ul class="addlist" v-if="addBool">
        <li v-for="item in morelist">
          <span :class="item.iconClass" class="icon"></span>
          <span>{{item.text}}</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import MyMusicList from './myMusicList'

export default {
  name: 'myMusic',
  data() {
    return {
      morelist: [
        {
          iconClass: "glyphicon glyphicon-plus",
          text: "新建歌单"
        }, {
          iconClass: "glyphicon glyphicon-list-alt",
          text: "管理歌单"
        }, {
          iconClass: "glyphicon glyphicon-book",
          text: "我的音乐云盘"
        },
      ],
      createList: {
        title: "我创建的歌单",
        list: [
          {
            imgurl: require("./../assets/a1.jpg"),
            title: "我喜欢的音乐",
            sum: 50,
            download: 1
          }, {
            imgurl: require("./../assets/a2.jpg"),
            title: "AE后期",
            sum: 57,
            download: 1
          }
        ]
      },
      favourisList: {
        title: "我收藏的歌单",
        list: [
          {
            imgurl: require("./../assets/a1.jpg"),
            title: "我喜欢的音乐",
            sum: 50,
            download: 1
          }, {
            imgurl: require("./../assets/a2.jpg"),
            title: "AE后期",
            sum: 57,
            download: 1
          }, {
            imgurl: require("./../assets/a2.jpg"),
            title: "AE后期",
            sum: 57,
            download: 1
          }, {
            imgurl: require("./../assets/a2.jpg"),
            title: "AE后期",
            sum: 57,
            download: 1
          }, {
            imgurl: require("./../assets/a2.jpg"),
            title: "AE后期",
            sum: 57,
            download: 1
          }, {
            imgurl: require("./../assets/a2.jpg"),
            title: "AE后期",
            sum: 57,
            download: 1
          }
        ]
      },
      localList: [
        {
          iconCLass: "glyphicon glyphicon-music",
          title: "本地音乐",
          num: 1
        }, {
          iconCLass: "glyphicon glyphicon-inbox",
          title: "最近播放",
          num: 100
        }, {
          iconCLass: "glyphicon glyphicon-barcode",
          title: "我的电台",
          num: 10
        }, {
          iconCLass: "glyphicon glyphicon-user",
          title: "我的收藏",
          num: 1
        }
      ],
      maskBool: false,
      addBool: false
    }
  },
  components: {
    MyMusicList
  },
  methods: {
    addList: function() {
      this.maskBool = !this.maskBool;
      this.addBool = !this.addBool;
    },
    removeMask: function() {
      this.maskBool = false;
      this.addBool = false
    }
  }
}
</script>

<style lang="less" scoped>
#myMusic {
  position: relative;
  .header {
    z-index: 10;
    background: #d64543;
    height: 50px;
    text-align: center;
    padding-top: 3%;

    .right {
      color: white;
      font-size: 24px;
    }
    .left {
      color: white;
      font-size: 18px;
      display: inline-block;
      margin-top: 2px;
    }
    .title {
      color: white;
      font-size: 18px;
      display: inline-block;
      margin-top: 3px;
    }
  }
  .localList {
    li {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      border-bottom: 1px solid #eee;

      .icon {
        font-size: 24px;
        color: #d64543;
        margin-left: 15px;
        margin-right: 15px;
      }

      .num {
        font-size: 14px;
        color: #999;
        margin-right: 10px;
      }
    }
  }
  .mask {
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .addlist {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    z-index: 5;

    li {
      height: 50px;
      background: white;
      width: 100%;
      line-height: 50px;

      span {
        font-size: 16px;
      }
      .icon {
        margin-left: 15px;
        margin-right: 10px;
        color: #d64543;
        font-size: 20px;
      }
    }
  }
  .slide-enter-active,
  .slide-leave-active {
    transition:all .5s;
  }
  .slide-enter,
  .slide-leave-to {
    transform:translateY(-50px);
    opacity: 0;
  }
}
</style>