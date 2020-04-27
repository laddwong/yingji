<template>
	<div id="app">
		<router-view style="margin-bottom: 50px;"></router-view>
		<van-tabbar v-model="active" style="z-index: 999">
			<van-tabbar-item name="home" to='/' icon="wap-home-o">首页</van-tabbar-item>
			<van-tabbar-item name="discover" to='/discover' icon="eye-o">发现</van-tabbar-item>
			<van-tabbar-item name="post" to='/post' icon="add-o">发布</van-tabbar-item>
			<van-tabbar-item name="message" to='./message' icon="chat-o">消息</van-tabbar-item>
			<van-tabbar-item name="me" to='./me' icon="user-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
	name: 'App',
	components: {
		'van-tabbar': Tabbar,
		'van-tabbar-item': TabbarItem
	},
	data () {
		return {
			active: 'home'
		}
	}
}
</script>

<style>
:root {
	--primary-color: #FB690D;
	--secondary-color: #F59F00;
	--normal-text-color: #656565;
	--em-text-color: #232323;
	--bg-color: #A8A8A8;
}
body {
	background-color: #ececec;
}
#app{
	color: #33373d;
}
</style>
