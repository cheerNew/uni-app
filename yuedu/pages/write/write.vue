<template>
	<view>
		write---
	</view>
</template>

<script>
var loginRes;
export default{
	data(){
		return{
			
		};
	},
	onLoad:function(){
		loginRes = this.checkLogin('../my/my',2);
		//如果没有登录成功返回的是布尔类型
		if(!loginRes){
			return ;
		}
	}
}
</script>

<style>
</style>
