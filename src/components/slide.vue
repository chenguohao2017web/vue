<template>
    <div id="slide">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="./../assets/1.jpg" alt="...">
                </div>
                <div class="item">
                    <img src="./../assets/2.jpg" alt="...">
                </div>
                <div class="item">
                    <img src="./../assets/3.jpg" alt="...">
                </div>
            </div>
        </div>       
    </div>
</template>

<script>
    export default {
        data:function(){
            return{

            }
        }
    }
</script>

<style lang="less">
    #slide{
        .slide {
            height: 200px;
            overflow: hidden;
        }
    }
</style>

