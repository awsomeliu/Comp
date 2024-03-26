<template>
	<view class="first" @click="showDropDown">
		 <image class="avatar" src="/static/tabbar/952a98989657a93a2dd17da4ffbc5e4.jpg"></image>
		 <view class="second">sjksj</view>
		 <image class="fourth" src="/static/tabbar/下拉.png"></image>
		 <view class="third">答题成绩</view>
	</view>
	
	<view class="two">
		
		  <view class="score">80分</view>
		  <view class="exam">考试成绩</view>
		  <view class="details">
		    <view class="item">
		      <text>01：20</text>
		      <text>优秀</text>
		      <text>80%</text>
		    </view>
		    <view class="item">
		      <text>答题用时</text>
		      <text>答题结果</text>
		      <text>正确率</text>
		    </view>
		  </view>
		

	</view>
</template>

<script>
export default {
  methods: {
    showDropDown() {
      // 显示下拉内容或执行其他动作
      console.log('显示下拉内容');
    }
  }
}
</script>

<style>
.first {
	height: 48vh; /* 设置顶部区域高度为页面高度的四分之一 */
	background-color: #4F9AF3; /* 青色 */
}

.avatar {
  position: fixed;
  bottom: 72%; /* 距离底部 10px */
  left: 39%; /* 距离左边 10px */
  width: 80px; /* 头像宽度 */
  height: 80px; /* 头像高度 */
  border-radius: 50%; /* 头像圆角 */
}

.second {
  position: fixed;
  bottom: 68%;
  left: 45%;
}

.third {
  position: fixed;
  bottom: 96%;
  left: 12%;
}

.fourth {
  position: fixed;
  bottom: 96%;
  left: 6%;
  width: 20px; /* 图标宽度 */
  height: 20px; /* 图标高度 */
}

.two {
  width: 320px;
  height: 170px;
  border: 2px solid black; /* 黑色边框 */
  background-color: white; /* 白色背景 */
  z-index: 1; 
  position: fixed;
  bottom: 36%;
  left: 7%;
}

.score {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 125px;
}

.exam {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 117px;
}

.details {
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
