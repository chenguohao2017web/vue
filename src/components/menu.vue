<template>
    <div id="homeMenu">
        <ul class="clearfix">
            <li v-for="(item,index) in menuData" :class="item.isActive" @click="changeClass(index)">
                <router-link :to="item.url">
                    <div>
                        <span :class="item.imgClass"></span>
                        <h6>{{item.text}}</h6>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>


export default {
    name: 'menu',
    data: function() {
        return {
            menuData: this.homeMenuData
        }
    },
    components: {

    },
    props: ['homeMenuData'],
    created: function() {
        //   console.log(this.homeMenuData[0].imgClass)
    },
    methods: {
        changeClass: function(index) {
            for (var i = 0; i < this.menuData.length; i++) {
                this.menuData[i].isActive = "";
                this.menuData[index].isActive = "active";
            }
        }
    }
}
</script>

<style lang="less" scoped>
#homeMenu {
    li.active a {
        color: #f3f3f3;
        font-weight: 600;
    }
    li {
        float: left;
        width: 25%;
        text-align: center;
        background: rgba(20, 20, 20, .9);
        padding: 5px 0;


        a {
            color: rgba(255, 255, 255, .5);
            text-decoration: none;
        } // text-shadow: 0 0 1px #f3f3f3;
        span {
            font-size: 24px;
        }

        h6 {
            font-size: 12px;

            margin: 0;
            padding: 0;
        }
    }
}
</style>
