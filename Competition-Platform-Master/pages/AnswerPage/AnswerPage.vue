<template>
<uni-nav-bar left-icon="left" left-text="返回" color="#FEFEFE" background-color="#4F9AF3" height="80rpx" />
    <view class="topbox">
      <view class="top"> 
      <text class="number">{{number}}</text>
      <text class="type">{{type}}</text>
      <view class="problem"><text>{{problem}}</text></view>
      </view>
    </view>
    
    <view v-for="item in list" class="answerbox">
      <view class="answer">{{item.option}}{{item.text}}</view>
    </view>
    
<view class="box">
			<view class="label" v-for="(row,index) in orderTypeLise" :key="row.name" hover-class="hover" @tap="toOrderType(index)">
				<view class="icon">
					<image :src="'../../static/'+row.icon"></image>
				</view>
				{{row.name}}
			</view>
		</view>


</template>

<script>
	export default {
		data() {
			return {
        number:'第一题',
        type:'单选题',
				problem: '1、1935年12月，毛泽东所作的____的报告，阐明了党的抗日民族统一战线的新政策，系统地说明了党的政治策略上的诸问题。',
        list:[
          {id: 1,option: 'A.',text:'《论反对日本帝国主义的策略》'},
          {id: 2,option: 'B.',text:'《实践论》'},
          {id: 3,option: 'C.',text:'《中国革命战争的战略问题》'},
          ],
          orderTypeLise: [
          					//name-标题 icon-图标
          					{
          						name: '上一题',
          						icon: '1.png',
          					},
          					{
          						name: '解析',
          						icon: '2.png',
          					},
          					{
          						name: '1/10',
          						icon: '3.png',
          					},
          					{
          						name: '加入收藏',
          						icon: '4.png',
          					},
          					{
          						name: '下一题',
          						icon: '5.png',
          					}
          				],
          
        correct_answer:'A',
        analysis:'这是毛泽东在陕北瓦窑堡党的活动分子会议上所作的报告。毛泽东的这个报告是在一九三五年十二月中共中央政治局瓦窑堡会议之后作的。这一次政治局会议批评了党内那种认为中国民族资产阶级不可能和中国工人农民联合抗日的错误观点，决定了建立抗日民族统一战线的策略，是一次极关重要的会议。毛泽东根据中央决议在这里充分地说明了和民族资产阶级在抗日的条件下重新建立统一战线的可能性和重要性，着重地指出共产党和红军在这个统一战线中的具有决定意义的领导作用，指出了中国革命的长期性，批判了党内在过去长时期内存在着的狭隘的关门主义和对于革命的急性病——这些是党和红军在第二次国内革命战争时期遭受严重挫折的基本原因。 '
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss"> 
  .topbox{
    margin-top: 20rpx;
  }
.top{
  padding-bottom: 25rpx;
}
.number{
  margin-left: 30rpx;
  margin-right: 45rpx;
  font-weight: bold;
}
.type{
  background-color: #4F9AF3;
  color:white;
  font-size: 25rpx;
  padding-right: 20rpx;
  padding-left: 20rpx;
  padding-top: 8rpx;
  padding-bottom: 8rpx;
  border-radius: 30rpx;
  text-align: center;
}
.problem{
  margin-left: 30rpx;
  margin-right: 50rpx;
  margin-top: 20rpx;
}
.answerbox{
  background-color: #EFEFEF;
    margin-top: 20rpx;
    margin-right: 50rpx;
    margin-left: 30rpx;
    padding-left: 110rpx;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    border-radius: 20rpx;
}
.box {
		height: 18vw;
		background-color: #fefefe;
		/*  阴影 */
		box-shadow: 0 0 20upx rgba(0, 0, 0, 0.15);
		margin: 440upx 2% 0upx 2%;
		display: flex;
		align-items: center;
		justify-content: center;
		// 包含图片，图标的view
		.label {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 16vw;
			color: #666666;
			font-size: 26upx;

			.icon {
				position: relative;
				width: 7vw;
				height: 7vw;
				margin: 0 1vw 2vw 1vw;


				// 文字上的图片
				image {
					width: 7vw;
					height: 7vw;
					z-index: 9;
				}
			}
		}

	}


</style>
