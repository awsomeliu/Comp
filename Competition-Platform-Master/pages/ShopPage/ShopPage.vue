<template>
<uni-nav-bar left-icon="left"  color="#FEFEFE" background-color="#4F9AF3" height="80rpx" >
	<text class="shop">积分商城</text>
</uni-nav-bar>

	    
	
	
<view class="navContainer">
    <view class="left"   >剩余积分</view>
    <view class="right"   >10000分</view>
</view>

<view class="Index">
	
		<!-- 瀑布流布局列表 -->
		<view class="pubuBox">
			<view class="pubuItem">
				<view class="item-masonry" v-for="(item, index) in comList" :key="index">
					<image :src="item.img" mode="widthFix"></image>
					<view class="listtitle"> 
						<view class="listtitle1">{{ item.name }}</view>
						<view class="listtitle2">
							{{ item.commdityPrice }}分
						
						</view>
						
						
						
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
			data() {
				return {
					comList: [{
							img: 'https://p3.ssl.qhimgs1.com/sdr/400__/t041856d2ce0f8cd1bd.jpg',
							name: '橘子',
							commdityPrice: 1000
						}, {
							img: 'https://p3.ssl.qhimgs1.com/sdr/400__/t041856d2ce0f8cd1bd.jpg',
							name: '橘子',
							commdityPrice: 1000
						},
						{
							img: 'https://p3.ssl.qhimgs1.com/sdr/400__/t041856d2ce0f8cd1bd.jpg',
							name: '橘子',
							commdityPrice: 1000
						}, {
							img: 'https://p3.ssl.qhimgs1.com/sdr/400__/t041856d2ce0f8cd1bd.jpg',
							name: '橘子',
							commdityPrice: 1000
						}, {
							img: 'https://p3.ssl.qhimgs1.com/sdr/400__/t041856d2ce0f8cd1bd.jpg',
							name: '橘子',
							commdityPrice: 1000
						}
					], //商品列表
				};
			},
			onShow() {},
			onLoad() {},
			methods: {},
	
		};
</script>

<style scoped="scoped" lang="scss">
	page {
			background-color: #eee;
			height: 100%;
		}
		
		.shop{
			margin-left: -20rpx;
			margin-top: 20rpx;
		}
		.left{
			color: #736F6E;
			width:250rpx;
			height:100rpx;
			display: flex; 
			float:left;
			margin-left: 150rpx;
			font-size: 40rpx
		}
	.right{
		color: #736F6E;
		width:250rpx;
		height:100rpx;
		display: flex; 
		float:right;
		margin-right: 50rpx;
		font-size: 40rpx
	}
	.Index{
		border-top: #736F6E;
	}
		.pubuBox {
			
			padding: 100rpx;
			height: 250rpx;

		}
	
		.pubuItem {
			column-count: 2;
			column-gap: 20rpx;
		}
	
		.item-masonry {
			box-sizing: border-box;
			border-radius: 15rpx;
			overflow: hidden;
			//background-color: #fff;
			break-inside: avoid;
			/*避免在元素内部插入分页符*/
			box-sizing: border-box;
			margin-bottom: 20rpx;
			box-shadow: 0px 0px 28rpx 1rpx rgba(78, 101, 153, 0.14);
		}
	
		.item-masonry image {
			width: 300rpx;
			height: 500rpx;
		}
	
		.listtitle {
			padding-left: 22rpx;
			font-size: 30rpx;
			padding-bottom: 24rpx;
	
			.listtitle1 {
				margin-top: 10rpx;
				line-height: 39rpx;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
				min-height: 30rpx;
				max-height: 40rpx;
			}
	
			.listtitle2 {
				float: right;
				margin-top: -55rpx;
			   margin-right: 10rpx;
				font-size: 32rpx;
				line-height: 32rpx;
				
				padding-top: 22rpx;
	
				
			}
	
		}
	
		.Index {
			width: 800rpx;
			margin-left: -30rpx;
			height: 100%;
		}
</style>