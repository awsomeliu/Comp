<template>
<view class="container">
  <view class="title">门头沟科学素质竞赛</view>
  <view class="footer">
    <button bindtap="login" class="login-btn">登录</button>
    <view class="button-wrapper"></view> <!-- 间隔 -->
    <button bindtap="register" class="register-btn">注册</button>
  </view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
	
		},
		methods: {
	
		}
	}
</script>

<style>
.container{
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;
	  align-items: center;
	  height: 800px;
	  padding: 20px; /* 添加页面边距 */
	  background-image: 'images\F_VbEJcbQAAv3Ak-800x1199.jpg';
	  border: solid;
	  border-radius: 1px;
	  border-color: red;
	}
.title {
	  font-size: 24px;
	  margin-bottom: 20px;
	  margin-top: 150px;
}
.footer {
	  display: flex;
	  justify-content: space-between; /* 左右排列 */
	  align-items: center;
	  width: 100%; /* 宽度100%，充满整个容器 */
}
.button-wrapper {
	  margin: 0 10px; /* 左右按钮之间的间隔 */
}
button {
	  padding: 10px 20px;
	  border: 1px solid #ccc; /* 左右边框 */
	  border-radius: 5px;
	  cursor: pointer;
}
.login-btn {
	  background-color: #fff;
	  color:#101010;
}
.register-btn {
	  background-color: #fff;
	  color:#101010;
}
</style>