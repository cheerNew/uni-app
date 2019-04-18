<template>
	<view>
		login-----
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			};
		},
		onLoad:function(options){
			console.log(options);
			//app
			// #ifdef APP-PLUS
				uni.login({
					success: (res) => {
						console.log("res---"+JSON.stringify(res));
						// res 对象格式
						//{"code":"***",
						//"authResult":{
							//"openid":"***",
							//"scope":"snsapi_userinfo",
							//"refresh_token":"**",
							//"code":"****",
							//"unionid":"***",
							//"access_token":"***",
							//"expires_in":7200
						//},
						//"errMsg":"login:ok"}
						uni.getUserInfo({
							success:function(info){
								console.log("info------"+info);
								// info 对象格式
								// {"errMsg":"getUserInfo:ok",
								// "rawData":"...
								// "userInfo":{
									//"openId":"***",
									//"nickName":"***",
									//"gender":1,
									// "city":"Xi'an",
									// "province":"Shaanxi",
									// "country":"China",
									// "avatarUrl":"头像",
									// "unionId":"oU5Yyt_agt547zWyA0v0eLfFPqxo"
								//},"signature":""}
								// 与服务器交互将数据提交到服务端数据库
							},
							fail: () => {
								uni.showToast({
									title:"微信登录授权失败"
								})
							}
						})
					},
					fail: () => {
						uni.showToast({
							title:"微信登录授权失败"
						})
					}
				})
			// #endif
		}
	}
</script>

<style>
</style>
