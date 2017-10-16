<template>
  <div id="findMusic" class="clearfix">
    <div class="header container clearfix">
      <div class="left pull-left">
        <span class="glyphicon glyphicon-ice-lolly"></span>
      </div>
      <div class="right pull-right">
        <span class="glyphicon glyphicon-stats"></span>
      </div>
      <input type="text" class="search" placeholder="搜索音乐，视频，歌词，电台" @click="searchPage">

    </div>
    <div class="content">
      <ul class="menu">
        <li v-for="(item,index) in findMusicMenus" :class="item.isActive" @click="changeList(index)">
          <span>{{item.text}}</span>
        </li>
      </ul>
      <ul class="sliderCon clearfix">
        <li class="active oneChild">
          <slide></slide>
          <ul class="recommend clearfix">
            <li v-for="item in recommends">
              <span :class="item.imgClass"></span>
              <h6>{{item.text}}</h6>
            </li>
          </ul>
          <recommendenedList :commendedList="commendedList"></recommendenedList>
          <commendenMv :commendendMv="commendendMv"></commendenMv>
          <selectedColumn :selectedColumn="selectedColumn"></selectedColumn>
          <div class="hr"></div>
        </li>
        <li>
          <div class="container video">
            <div class="title">
              <h5>{{title}}</h5>
            </div>
            <ul class="list">
              <li v-for="item in vlist" class="clearfix">
                <div class="media">
                  <div class="media-left">
                    <a href="#"></a>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">{{item.shortTitle}}</h4>
                    <p>{{item.vt}}</p>
                    <p class="url" @click="goUrl(item.vurl)">{{item.vurl}}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="hr"></div>
        </li>
        <li style="text-align:center;color:red;padding-top:20px">更多内容尽情期待！</li>
      </ul>
    </div>
    <div class="searchPage">
      <div class="top">
        <button class="btn btn-default pull-left" @click="goBack">返回</button>
        <input type="text" class="form-control" placeholder="搜索关键词" @keyup="searchAction" v-model="searchValue">
        <button type="submit" class="btn btn-warning pull-right">搜索</button>
      </div>
      <p id="txtHint">{{content}}</p>
    </div>
  </div>
</template>

<script>
import Slide from './slide'
import RecommendenedList from './recommendenedList'
import CommendenMv from './commendenMv'
import SelectedColumn from './selectedColumn'

export default {
  name: 'findMusic',
  data: function() {
    return {
      movie: null,
      selectedColumn: {
        title: "精选专栏",
        list: [
          {
            text: "中日韩电影原声,哪个是《嫌疑人X的献身》最美诠释",
            num: 7270,
            url: require("./../assets/j1.jpg")
          }, {
            text: "你成不了我的酒，就像我入不了你的梦",
            num: 6650,
            url: require("./../assets/j2.jpg")
          }, {
            text: "备受吉他大师的推送？属于jj。cale的温情述说",
            num: 1920,
            url: require("./../assets/j3.jpg")
          }
        ]
      },
      commendendMv: {
        title: "推荐MV",
        list: [
          {
            text: "A or B (short ver.)",
            url: require("./../assets/m1.jpg"),
            num: "2100000",
            imgClass: "glyphicon glyphicon-facetime-video"
          }, {
            text: "gnash/imad Royal",
            url: require("./../assets/m2.jpg"),
            num: "120300",
            imgClass: "glyphicon glyphicon-facetime-video"
          }, {
            text: "Look what You Made Me D..",
            url: require("./../assets/m3.jpg"),
            num: "111000",
            imgClass: "glyphicon glyphicon-facetime-video"
          }, {
            text: "SomeBody Talk With us",
            url: require("./../assets/m4.jpg"),
            num: "22900",
            imgClass: "glyphicon glyphicon-facetime-video"
          }
        ]
      },
      commendedList: {
        title: "推荐歌单",
        list: [
          {
            text: "中秋节 | 最温暖的地方就是家人身边",
            url: require("./../assets/z1.jpg"),
            num: "92",
            imgClass: "glyphicon glyphicon-headphones"
          }, {
            text: "史上最强 | 战地女声，大美巅峰",
            url: require("./../assets/z2.jpg"),
            num: "120",
            imgClass: "glyphicon glyphicon-headphones"
          }, {
            text: "宏伟澎湃的史诗级GBM",
            url: require("./../assets/z3.jpg"),
            num: "111",
            imgClass: "glyphicon glyphicon-headphones"
          }, {
            text: "微电影专用，背景插曲",
            url: require("./../assets/z4.jpg"),
            num: "229",
            imgClass: "glyphicon glyphicon-headphones"
          }, {
            text: "英雄联盟文森特主播BGM",
            url: require("./../assets/z5.jpg"),
            num: "30",
            imgClass: "glyphicon glyphicon-headphones"
          }, {
            text: "无前奏 舒服女声开口醉",
            url: require("./../assets/z6.jpg"),
            num: "50",
            imgClass: "glyphicon glyphicon-headphones"
          }
        ]
      },
      recommends: [
        {
          text: "私人FM",
          imgClass: "glyphicon glyphicon-camera"
        }, {
          text: "每日推荐",
          imgClass: "glyphicon glyphicon-list-alt"
        }, {
          text: "歌单",
          imgClass: "glyphicon glyphicon-headphones"
        }, {
          text: "牌行榜",
          imgClass: "glyphicon glyphicon-th-list"
        },
      ],
      findMusicMenus: [
        {
          text: "音乐",
          isActive: "active"
        }, {
          text: "视频",
          isActive: ""
        }, {
          text: "电台",
          isActive: ""
        }
      ],
      title: '',
      json: null,
      vlist: [],
      searchValue: '',
      content: ''
    }
  },
  methods: {
    changeList: function(index) {
      for (var i = 0; i < this.findMusicMenus.length; i++) {
        this.findMusicMenus[i].isActive = "";
        this.findMusicMenus[index].isActive = "active";
        this.changeCon(index);
      }
    },
    changeCon: function(index) {
      var list = $(".sliderCon>li");
      list.hide();
      list.eq(index).fadeIn("fast");
    },
    init: function() {
      this.chlidHeight = $(".oneChild").height();
      // console.log(this.chlidHeight)
    },
    goUrl: function(res) {
      window.location.href = res //当前窗口打开
      // window.open(res); 新窗口打开
    },
    searchPage: function() {
      $('.content').hide();
      $('.header').hide();
      $('.searchPage').fadeIn('fast');
      var str = this.searchValue;
      this.showHint(str);

    },
    goBack: function() {
      $('.content').fadeIn();
      $('.header').fadeIn();
      $('.searchPage').hide();
    },
    searchAction: function() {
      var str = this.searchValue;
      this.showHint(str);
    },
    showHint: function(str) {
      var xhr;
      if (str.length == 0) {
        this.content = '输出你要查询的歌名';
        return;
      };
      // if (window.XMLHttpRequest) {
      //   xhr = new XMLHttpRequest();
      // } else {
      //   xhr = new ActiveXObject("Microsoft.XMLHTTP");
      // };
      // xhr.onreadystatechange = function() {
      //   if (xhr.readyState == 4 && xhr.status == 200) {
      //     this.content = xhr.responseText;
      //   }
      // }

      // xhr.open("GET","search.php?q="+str,true);
      // xhr.send(null);
      this.$http.get("./search", {
        data: {
          q: str
        }
      }).then(function(res){
        this.content = res;
      })
    }
  },
  components: {
    Slide,
    RecommendenedList,
    CommendenMv,
    SelectedColumn
  },
  mounted: function() {
    this.init();
  },
  created: function() {
    this.$http.jsonp('http://cache.video.iqiyi.com/jp/avlist/202861101/1/').then(function(res) {
      // console.log(res.data.data)
      this.json = res.data.data;
      // console.log(this.json)
      this.title = this.json.ps
      this.vlist = this.json.vlist
    })
  }
}

</script>

<style lang="less" scoped>
#findMusic {
  .header {
    background: #d64543;
    height: 50px;
    text-align: center;
    padding-top: 3%;

    .search {
      width: 80%;
      border-radius: 20px;
      height: 30px;
      border: none;
      padding-left: 25px;
      display: inline-block;

      &:focus {
        outline: none;
      }
    }
    .left,
    .right {
      color: white;
      font-size: 24px;
    }
  }
  .content {

    .menu {
      height: 38px;
      line-height: 38px;
      width: 100%;

      li {
        width: 33.3%;
        float: left;
        text-align: center;

        &.active span {
          border-bottom: 2px solid #d64543;
          color: #d64543;
          font-weight: 900;
        }

        span {
          border-bottom: 2px solid transparent;
          padding: 4px 10px;
        }
      }
    }
    .sliderCon {
      .hr {
        height: 50px; //  background: red;
      }
      position: relative;
      &>li {
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;

        &.active {
          display: block;
        }
      }
    }
    .recommend {
      li {
        float: left;
        width: 25%;
        text-align: center;
        padding: 10px;
        border-bottom: 1px solid #eee;

        span {
          border: 1px solid #d64543;
          border-radius: 50%;
          padding: 10px;
          font-size: 22px;
          color: #d64543;
        }
        h6 {
          margin: 0;
          padding: 0;
          margin-top: 5px;
        }
      }
    }
    .recommedned-list {

      .title {
        padding: 10px 0;
        font-size: 14px;
        font-weight: 600;
        span {
          display: inline-block;
          width: 3px;
          height: 15px;
          background: #d64543;
          margin-right: 10px;
          position: relative;
          top: 2px;
        }
      }

      .list li {
        float: left;
        width: 33.3%;
        padding: 0 1px;
        height: 150px;
        position: relative;


        img {
          width: 100%;
          height: 100px;
        }

        p {
          font-size: 12px;
          margin-top: 5px;
          padding: 0 5px;
        }
        .num {
          position: absolute;
          top: 2%;
          right: 4%;
          color: #f3f3f3;
          font-size: 12px;
          span {
            margin-right: 5px;
          }
        }
      }
    }
    .video {
      .title {
        text-align: center;
        color: #d64543;
        background: #eee;
      }

      .url {
        color: red;
        text-decoration: underline;
      }
    }
  }
  .searchPage {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: none;

    .top {
      height: 50px;
      line-height: 50px;
      background: #d64543;
      padding: 0 10px;
      text-align: center;

      button {
        margin-top: 8px;
      }

      .form-control {
        display: inline;
        width: 65%;
      }
    }
  }
}
</style>
