import Vue from 'vue'
import App from './App'
/* backpage, backtype 2个参数分别代表：
backpage : 登录后返回的页面
backtype : 打开页面的类型[1 : redirectTo 2 : switchTab] */
Vue.config.productionTip = false
Vue.prototype.checkLogin = function(backpage, backtype){
	var SUID  = uni.getStorageSync('SUID');//用户的uid
	var SRAND = uni.getStorageSync('SRAND');//用户的随机码
	var SNAME = uni.getStorageSync('SNAME');//用户昵称
	var SFACE = uni.getStorageSync('SFACE');//用户头像
	//如果用户没有登录
	if(SUID == '' || SRAND == '' || SFACE == ''){
		uni.redirectTo({
			url:'../login/login?backpage='+backpage+'&backtype='+backtype
		});
		return false;
	}
	//登录成功之后
	return [SUID, SRAND, SNAME, SFACE];
}
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
