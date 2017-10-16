<template>
    <div id="myMusicList">
        <div class="top" @click="showTable">
            <span :class="spanCLassObj" v-if="spanBlue"></span>
            <span :class="spanClassObj2" v-else="spanBlue"></span>
            {{createList.title}}({{num}})
        </div>
        <transition name="fade">
            <ul class="list" v-if="listBlue">
                <li class="clearfix" v-for="item in createList.list">
                    <div class="left pull-left">
                        <img :src="item.imgurl" alt="">
                    </div>
                    <div class="right pull-right">
                        <div class="title">{{item.title}}</div>
                        <div class="desc">{{item.sum}}首 已下载{{item.download}}首</div>
                    </div>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
export default {
    props: ["createList"],
    computed:{
        num:function(){
            return this.createList.list.length
        }
    },
    data() {
        return {
            spanBlue: true,
            listBlue: false,
            spanCLassObj: "glyphicon glyphicon-chevron-right",
            spanClassObj2: "glyphicon glyphicon-chevron-down"
        }
    },
    methods: {
        showTable: function() {
            this.spanBlue = !this.spanBlue;
            this.listBlue = !this.spanBlue;
        }
    }
}
</script>

<style lang="less" scoped>
#myMusicList {
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
    .top {
        background: #eee;
        height: 30px;
        line-height: 30px;
        padding-left:10px;
        color:#999;
        span {
            color:#999;
        }
    }
    .list {
        li {
            height: 70px;
            overflow: hidden;
            border-bottom:1px solid #eee;
            padding:10px;
        }
        .left {
            width: 15%;
            height: 100%;
            border:1px solid black;

            img {
                width:100%;
                height: 100%;
            }
        }
        .right {
            width: 85%;
            padding-left:10px;
            color:#999;

            .title {
                color:black;
                font-weight:600;
                margin:4px 0;
            }
        }
    }
}
</style>

