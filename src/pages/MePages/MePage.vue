<template>
	<div class="me-page">
		<!-- 用户基本信息 -->
		<div class="user-info-container">
			<div class="avatar"><img :src="userinfo.avatar" alt="头像"></div>
			<span class="username">{{userinfo.username}}</span>
			<p class="intro">{{userinfo.intro}}</p>
			<div class="fllow-fans-container">
				<div class="num-info-item">
					<span class="number">{{userinfo.fllows}}</span>
					<span class="title">关注</span>
				</div>
				<div class="num-info-item">
					<span class="number">{{userinfo.fans}}</span>
					<span class="title">粉丝</span>
				</div>
			</div>
		</div>
		<!-- 金刚区 -->
		<div class="switch-container">
			<div 
			:class="{'num-info-item': true, active: currentTab === 'projects'}"
			@click="currentTab = 'projects'">
				<span class="number">{{userinfo.projects}}</span>
				<span class="title">作品</span>
			</div>
			<div 
			:class="{'num-info-item': true, active: currentTab === 'likes'}"
			@click="currentTab = 'likes'">
				<span class="number">{{userinfo.likes}}</span>
				<span class="title">喜欢</span>
			</div>
			<div 
			:class="{'num-info-item': true, active: currentTab === 'activites'}"
			@click="currentTab = 'activites'">
				<span class="number">{{userinfo.activites}}</span>
				<span class="title">活动</span>
			</div>
		</div>
		<!-- 金刚区对应内容 -->
		<card :cardData="cardData" />
		<card :cardData="cardData" />
		<card :cardData="cardData" />
		<card :cardData="cardData" />
		<card :cardData="cardData" />
	</div>
</template>

<script>
import Card from '@/components/Card'
export default {
	name: 'MePage',
	components: {
		Card
	},
	data () {
		return {
			userinfo: {
				userId: '0001',
				username: 'xxxx',
				intro: '测试测试测试测试测试测试测试测试测试测试',
				avatar: require('@/assets/avatar01.jpg'),
				fllows: 2048,
				fans: 592000,
				projects: 589,
				likes: 452,
				activites: 12
			},
			currentTab: 'projects',
			cardData: {
				avatar: require('@/assets/avatar01.jpg'),
				username: 'Superuser',
				mainImg: require('@/assets/mainImg01.jpg'),
				likeCount: 640,
				messageCount: 200,
				title: 'coooooooooooooool',
				time: Date.now()
			}
		}
	}
}
</script>

<style scoped>
.me-page {
	background-color: white;
}
.user-info-container {
	text-align: center;
	padding-top: 16px;
}
.avatar img {
	width: 72px;
	height: 72px;
	border-radius: 50%;
}
.intro {
	width: 70%;
	margin: 10px auto;
}
.fllow-fans-container {
	width: 70%;
	margin: auto;
	display: flex;
	justify-content: space-around;
}
.num-info-item span {
	display: block;
	text-align: center;
}
.num-info-item .number {
	font-weight: bold;
	padding-top: 4px;
}
.num-info-item .title {
	font-size: 12px;
	color: #AAA;
	padding-bottom: 8px;
}
.switch-container {
	display: flex;
	justify-content: space-around;
	border-style: solid;
	border-color: #EEE;
	border-width: 1px 0px;
	margin: 10px 0px;
}
.switch-container .number {
	font-size: 12px;
}
.switch-container .num-info-item {
	position: relative;
}
.switch-container .num-info-item:after {
	content: '';
	width: 0px;
	height: 4px;
	background-color: #000;
	position: absolute;
	bottom: -2px;
	left: 0;
	transition: all .3s;
}
.switch-container .active:after {
	width: 24px;
}

</style>
