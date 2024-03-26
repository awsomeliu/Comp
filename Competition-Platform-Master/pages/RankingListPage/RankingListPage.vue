<template>

<view class="container">
  <view class="topSection">
    <view class="scoreRank">成绩排行</view>
    <view class="buttons">
      <button class="rankButton" @click="showRanking">排行榜</button>
      <button class="myScoreButton" @click="showMyScore">我的成绩</button>
    </view>
    
    <view class="rankingSection">
      <image class="icon" src="/static/tabbar/奖杯.png"></image> <!-- 图标 -->
      <picker class="rankingPicker" mode="selector" range="{{rankingOptions}}" bindchange="rankingChange">
        <view class="picker">
          <text class="pickerText">全国排行</text>
          <image class="arrowIcon" src="/static/tabbar/下拉.png"></image> <!-- 下拉箭头图标 -->
        </view>
      </picker>
    </view>
  </view>
  
  <view class="bottomSection">

    <view class="headerItem">
      <text>排名</text>
      <text>昵称</text>
      <text>分数(分)</text>
    </view>
    <view class="listItem" v-for="(item, index) in rankingData" :key="index">
      <text>{{ item.rank }}</text>
      <image class="avatar" :src="item.avatar"></image>
      <text>{{ item.nickname }}</text>
      <text>{{ item.score }}</text>
    </view>

  </view>
</view>

</template>

<script>

export default {
  data() {
    return {
      rankingData: [
        { rank: '1', avatar: '/static/tabbar/952a98989657a93a2dd17da4ffbc5e4.jpg', nickname: '机器猫一号', score: '100' },
        { rank: '2', avatar: '/static/tabbar/952a98989657a93a2dd17da4ffbc5e4.jpg', nickname: '机器猫二号', score: '90' },
        { rank: '3', avatar: '/static/tabbar/952a98989657a93a2dd17da4ffbc5e4.jpg', nickname: '机器猫三号', score: '80' }
      ]
    };
  },
  methods: {
    showRanking() {
      // 显示排行榜
      console.log('显示排行榜');
    },
    showMyScore() {
      // 显示我的成绩
      console.log('显示我的成绩');
    },
    rankingChange(event) {
      // 排行榜选择变化
      console.log('排行榜选择变化', event);
    }
  }
}

</script>

<style scoped>

/* index.wxss */
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.topSection {
  height: 30vh; /* 设置顶部区域高度为页面高度的四分之一 */
  background-color: #66BAF9; /* 青色 */
}

.bottomSection {
  flex: 1; /* 使用剩余空间 */
  background-color: white; 
  border: 1px solid gray;
  border-radius: 1px;
  border-radius: 5px
}

.scoreRank {
  position: absolute;
  top: 10px;
  left: 10px;
  color: black;
  font-size: 19px;
  font-weight: bold;
}
  
.buttons {
    width: 450rpx;
  height: 100rpx;
  display: flex;
  margin-top: 50px;
  margin-left: 75px;
 border-radius: 5px
}

button {

  border: 1px solid white;
  border-radius: 1px;
  margin: 0px; /* 调整按钮之间的间距 */
  cursor: pointer;
  font-weight: bold;
  flex: 1; /* 让按钮大小相等 */
 border-radius: 5px
}

.rankButton {
  background-color: white; /* 蓝色 */
  color: #1E90FF;
}

.myScoreButton {
  background-color: #1E90FF;
  color: white; /* 蓝色 */
}

.rankingSection {
  position: absolute;
  bottom: 70%; /* 距离底部 10px */
  left: 3%; /* 距离左边 10px */
  display: flex;
  align-items: center;
}

.icon {
  width: 20px; /* 图标宽度 */
  height: 20px; /* 图标高度 */
  margin-right: 1px; /* 图标右侧边距 */
}

.picker {
  display: flex;
  align-items: center;

  padding: 5px 10px; /* 内边距 */
  color: #000000; /* 文字颜色 */
}

.pickerText {
  flex: 1; /* 文字部分占据剩余空间 */
}

.arrowIcon {
  width: 20px; /* 下拉箭头图标宽度 */
  height: 20px; /* 下拉箭头图标高度 */
}

.headerItem,
.listItem {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: #000000;
}

.headerItem text,
.listItem text {
  width: 35%; /* 平均分配宽度 */
  border-bottom: 1px solid rgb(197, 197, 197);

}

.headerItem text:first-child {
  margin-left: 10px; /* 调整排名文本的左边距 */
}

.listItem text:first-child {
  margin-left: 10px; /* 调整排名文本的左边距 */
}

.avatar {
  width: 30px; /* 头像宽度 */
  height: 30px; /* 头像高度 */
  border-radius: 50%; /* 头像圆角 */
  margin-right: 10px; /* 右边距 */
}
</style>
