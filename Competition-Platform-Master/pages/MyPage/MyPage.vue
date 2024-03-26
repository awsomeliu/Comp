<template>
  <!-- 登陆列表 -->
  <view class="denglu" @click="goToUserInfo">
    <view>
      <image class="touxiang" src="/static/tabbar/952a98989657a93a2dd17da4ffbc5e4.jpg"/>
    </view>
    <view>
      <view class="denglutext">sjksj</view>
      <view class="tixing">我的积分：7</view>
    </view>
  </view>

  <!-- 列表内容 -->
  <view>
    <view class="liebiao" @click="goToUserInfo">
      <image class="tubiao" src="/static/tabbar/mypageicon.png"></image>
      <view>个人信息</view>
    </view>

    <view class="liebiao" @click="goToUserScore">
      <image class="tubiao" src="/static/tabbar/晨星实训平台-个人成绩报表.png"></image>
      <view>个人成绩</view>
    </view>

    <view class="liebiao" @click="goToAnswerRecord">
      <image class="tubiao" src="/static/tabbar/答题记录.png" mode=""/>
      <text>答题记录</text>
    </view>

    <view class="liebiao" @click="goToPointsStore">
      <image class="tubiao" src="/static/tabbar/积分商城.png" mode=""/>
      <text>积分商城</text>
    </view>

    <view class="liebiao" @click="goToCompetitionRules">
      <image class="tubiao" src="/static/tabbar/1参赛规则.png" mode=""/>
      <text>参赛规则</text>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToUserInfo() {
      // 跳转到个人信息页面
      console.log('跳转到个人信息页面');
    },
    goToUserScore() {
      // 跳转到个人成绩页面
      console.log('跳转到个人成绩页面');
    },
    goToAnswerRecord() {
      // 跳转到答题记录页面
      console.log('跳转到答题记录页面');
    },
    goToPointsStore() {
      // 跳转到积分商城页面
      console.log('跳转到积分商城页面');
    },
    goToCompetitionRules() {
      // 跳转到参赛规则页面
      console.log('跳转到参赛规则页面');
    }
  }
}
</script>

<style scoped>
.denglu {
  display: flex;
  background: #ffffff;
  height: 210rpx;
  border-bottom: 1px solid rgb(197, 197, 197);
  border-top: 1px solid rgb(197, 197, 197);
}
.touxiang {
  height: 150rpx;
  width: 150rpx;
  margin-left: 40rpx;
  margin-right:40rpx;
  margin-top: 28rpx;
}
.tixing {
  color: #9c9c9c;
  margin-top: 30rpx;
}
.denglutext {
  margin-top: 50rpx;
}

/* 列表内容 */
.tubiao {
  width: 50rpx;
  height: 50rpx;
  margin-left: 20rpx;
  margin-right: 20rpx;
}
.liebiao {
  display: flex;
  border-top: 1px solid rgb(197, 197, 197);
  border-bottom: 1px solid rgb(197, 197, 197);
  background-color: white;
  margin-top: 35rpx;
  height: 75rpx;
  align-items: center;
}
</style>
