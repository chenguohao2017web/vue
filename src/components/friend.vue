<template>
  <div id="friend">
   	<div class="header container clearfix">
     <div class="left pull-left">
       <span class="glyphicon glyphicon-ice-lolly"></span>
     </div>
     <div class="right pull-right">
       <span class="glyphicon glyphicon-stats"></span>
     </div>
     <span class="title">动态</span>
	</div>
	<div class="content">
		<div class="top">
			<ul class="showbtn clearfix">
				<li>
					<span class="icon glyphicon glyphicon-pencil"></span>
					<span>发动态</span>
				</li>
				<li>
					<span class="icon glyphicon glyphicon-film"></span>
					<span>发布视频</span>
				</li>
			</ul>
		</div>

		<ul class="list">
			<li v-for="item in friendsData" class="clearfix">
				<div class="head pull-left">
					<img :src="item.head" alt="">
				</div>
				<div class="cont pull-right">
					<div class="cont-top">
						<span class="name">{{item.name}}</span><span>分享单曲</span>
						<div class="follow">+ 关注</div>
					</div>
					<p>	{{item.text}}</p>
					<ul class="imgbox clearfix">
						<li v-for="imgs in item.img">
							<img :src="imgs.url" alt="">
						</li>
					</ul>
					<div class="musicbox clearfix">
						<div class="button pull-left">
							<img :src="item.musicImg" alt="">
							<span class="glyphicon glyphicon-play icon"></span>
						</div>
						<div class="musicDesc">
							<h6>{{item.musicDesc}}</h6>
							<h5>{{item.musicName}}</h5>
						</div>
					</div>
					<p class="other">{{item.other}}</p>
					<div class="responser">
						<span class="glyphicon glyphicon-thumbs-up"> {{item.goodNum}}</span><span class="glyphicon glyphicon-modal-window"> {{item.textNum}}</span><span class="glyphicon glyphicon-share-alt"> {{item.sendNum}}</span>
					</div>
				</div>
			</li>
		</ul>

		<div style="height:50px;"></div>
	</div>
  </div>
</template>

<script>


export default {
  name: 'friend',
  data(){
  	 return {
  	 	friendsData:[
  	 		{
  	 			head:require("./../assets/1.jpg"),
  	 			name:"爱听音乐的猫大叔",
  	 			text:"[爆笑的集锦音乐]那些生活中遇到的尴尬瞬间",
  	 			img:[
  	 				{url:require("./../assets/1.jpg")},
  	 				{url:require("./../assets/1.jpg")},
  	 				{url:require("./../assets/1.jpg")},
  	 				{url:require("./../assets/1.jpg")},
  	 				{url:require("./../assets/1.jpg")},
  	 				{url:require("./../assets/1.jpg")},
  	 				{url:require("./../assets/1.jpg")},
  	 				{url:require("./../assets/1.jpg")},
  	 				{url:require("./../assets/1.jpg")},
  	 			],
  	 			musicImg:require("./../assets/2.jpg"),
  	 			musicDesc:"FC《松鼠大作战》第一关BGM",
  	 			musicName:"群星",
  	 			other:"为你发现生活点滴",
  	 			goodNum:4000,
  	 			textNum:1135,
  	 			sendNum:3203
  	 		},
  	 		{
  	 			head:require("./../assets/3.jpg"),
  	 			name:"爱听音乐的猫大叔",
  	 			text:"[爆笑的集锦音乐]那些生活中遇到的尴尬瞬间",
  	 			img:[
  	 				{url:require("./../assets/3.jpg")},
  	 				{url:require("./../assets/3.jpg")},
  	 				{url:require("./../assets/3.jpg")},
  	 				{url:require("./../assets/3.jpg")},
  	 				{url:require("./../assets/3.jpg")},
  	 				{url:require("./../assets/3.jpg")},
  	 				{url:require("./../assets/3.jpg")},
  	 				{url:require("./../assets/3.jpg")},
  	 				{url:require("./../assets/3.jpg")},
  	 			],
  	 			musicImg:require("./../assets/3.jpg"),
  	 			musicDesc:"FC《松鼠大作战》第一关BGM",
  	 			musicName:"群星",
  	 			other:"为你发现生活点滴",
  	 			goodNum:4000,
  	 			textNum:1135,
  	 			sendNum:3203
  	 		},
  	 		{
  	 			head:require("./../assets/2.jpg"),
  	 			name:"爱听音乐的猫大叔",
  	 			text:"[爆笑的集锦音乐]那些生活中遇到的尴尬瞬间",
  	 			img:[
  	 				{url:require("./../assets/2.jpg")},
  	 				{url:require("./../assets/2.jpg")},
  	 				{url:require("./../assets/2.jpg")},
  	 				{url:require("./../assets/2.jpg")},
  	 				{url:require("./../assets/2.jpg")},
  	 				{url:require("./../assets/2.jpg")},
  	 				{url:require("./../assets/2.jpg")},
  	 				{url:require("./../assets/2.jpg")},
  	 				{url:require("./../assets/2.jpg")},
  	 			],
  	 			musicImg:require("./../assets/2.jpg"),
  	 			musicDesc:"FC《松鼠大作战》第一关BGM",
  	 			musicName:"群星",
  	 			other:"为你发现生活点滴",
  	 			goodNum:4000,
  	 			textNum:1135,
  	 			sendNum:3203
  	 		}
  	 	]
  	 }
  },
  components: {
    
  }
}
</script>

<style lang="less" scoped>
	#friend {
		.header {
		  background: #d64543;
		  height: 50px;
		  text-align: center;
		  padding-top:3%;
		  
		  .left,
		  .right {
		    color:white;
		    font-size:24px;
		  }
		  .title {
		  	font-size:18px;
		  	color:white;
		  	margin-top:2px;
		  	display:inline-block;
		  }
		}
		.content {
			.top {
				border-bottom:10px solid #eee;
				.showbtn li {
					float:left;
					width: 50%;
					text-align:center;
					height: 40px;
					line-height:40px;
					font-size:16px;

					span {
						margin: 0 2px;
					}
					.icon {
						color:#d64543;
					}
				}
			}
			.list {

				li {
					padding:10px 5px;
				}
				.head {
					width: 10%;
					padding:2px;

					img {
						width: 100%;
					}
				}
				.cont {
					width: 90%;
					padding:0 4px;

					&>p {
						padding:6px;
						font-size:14px;
					}
				}

				.cont-top {
					position:relative;
					span {
						display:inline-block;
					}
					.name {
						color:#628ae2;
						margin-right:10px;
					}
					.follow {
						position: absolute;
						top:0;
						right:0;
						color:red;
					}
				}
				.imgbox {
						width: 100%;
					li {
						width: 33.3%;
						float:left;
						padding:1px;

						img{
							width: 100%;
						}
					}
				}
				.musicbox {
					margin-top:10px;
					background:#eee;
					overflow:hidden;

					.button {
						padding:4px;
						width:50px;
						height:50px;
						position:relative;

						.icon {
							position: absolute;
							top:25%;
							left:25%;
							border:1px solid white;
							border-radius:50%;
							padding:4px;
							color:white;
						}

						img{
							width: 100%;
							height: 100%;
						}
					}

					.musicDesc {
						padding:4px;

						h6 {
							padding:0;
							margin:0;
							font-weight:600;
							font-size:12px;

						}
						h5 {
							maring:0;
							padding:0;
							color:#999;
							font-size:12px;
						}
					}
				}
				.other {
						color:#999;

				}

				.responser {
					margin-top:20px;
					width: 100%;
					span{
						display:inline-block;
						width: 33.3%;
						color:#666;
					}
				}		
			}
		}

	}
</style>