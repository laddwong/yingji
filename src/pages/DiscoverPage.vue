<template>
	<div>
		<!-- 头部 -->
		<div class="header-container">
			<transition name="scale">
				<h2 v-if="!isScroll">发现</h2>
			</transition>
			<van-search v-model="searchWord" placeholder="教程/公开课，搜搜看"></van-search>
		</div>
		<!-- 内容 -->
		<div style="margin-top: 100px;">
			<!-- 轮播图 -->
			<van-swipe autoplay="3000">
				<van-swipe-item v-for="item in swipeImgs" :key="item.id">
					<img :src="item.src" width="100%" height="auto" />
				</van-swipe-item>
			</van-swipe>
			<!-- 分类区 -->
			<div class="category-container">
				<router-link v-for="item in category" :key="item.id" :to="item.to" class="category-item">
					<van-icon :name="item.icon" size="24"></van-icon>
					<span>{{item.name}}</span>
				</router-link>
			</div>
			<!-- 活动区 -->
			<div class="activity-container">
				<div class="title">
					<h3>摄影赛事</h3>
					<small>查看全部</small>
				</div>
				<div class="single-row">
					<article-card v-for="item in activity" :key="item.id" :articleInfo="item" />
				</div>
			</div>
			<!-- 课程区 -->
			<div class="activity-container">
				<div class="title">
					<h3>公开课</h3>
					<small>查看全部</small>
				</div>
				<div class="multi-row">
					<article-card v-for="item in lessons" :key="item.id" :articleInfo="item" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Search, Swipe, SwipeItem, Icon } from 'vant'
import ArticleCard from '@/components/ArticleCard'
export default {
	name: 'DiscoverPage',
	components: {
		'van-search': Search,
		'van-swipe': Swipe,
		'van-swipe-item': SwipeItem,
		'van-icon': Icon,
		ArticleCard
	},
	data () {
		return {
			searchWord: '',
			swipeImgs: [
				{
					id: '01',
					src: require('@/assets/swipe01.jpg')
				},
				{
					id: '02',
					src: require('@/assets/swipe02.jpg')
				},
				{
					id: '03',
					src: require('@/assets/swipe03.jpg')
				}
			],
			category: [
				{
					id: '11',
					icon: 'tv-o',
					to: '/discover/course',
					name: '摄影教程'
				},
				{
					id: '12',
					icon: 'fire-o',
					to: '#',
					name: '热门活动'
				},
				{
					id: '13',
					icon: 'friends-o',
					to: '#',
					name: '摄影小组'
				},
				{
					id: '14',
					icon: 'good-job-o',
					to: '#',
					name: '推荐摄影师'
				}
			],
			activity: [
				{
					id: '21',
					title: '超牛摄影大赛',
					info: '倒计时07天',
					img: require('@/assets/mainImg01.jpg'),
					to: '#'
				},
				{
					id: '22',
					title: '超牛摄影大赛',
					info: '倒计时07天',
					img: require('@/assets/mainImg01.jpg'),
					to: '#'
				},
				{
					id: '23',
					title: '超牛摄影大赛',
					info: '倒计时07天',
					img: require('@/assets/mainImg01.jpg'),
					to: '#'
				},
				{
					id: '24',
					title: '超牛摄影大赛',
					info: '倒计时07天',
					img: require('@/assets/mainImg01.jpg'),
					to: '#'
				}
			],
			lessons: [
				{
					id: '31',
					title: '摄影技巧：如何意见打造胶片漏光效果',
					info: '03:53',
					img: require('@/assets/mainImg01.jpg'),
					to: '#'
				},
				{
					id: '32',
					title: '摄影技巧：如何意见打造胶片漏光效果',
					info: '03:53',
					img: require('@/assets/mainImg01.jpg'),
					to: '#'
				},
				{
					id: '33',
					title: '摄影技巧：如何意见打造胶片漏光效果',
					info: '03:53',
					img: require('@/assets/mainImg01.jpg'),
					to: '#'
				},
				{
					id: '34',
					title: '摄影技巧：如何意见打造胶片漏光效果',
					info: '03:53',
					img: require('@/assets/mainImg01.jpg'),
					to: '#'
				},
				{
					id: '35',
					title: '摄影技巧：如何意见打造胶片漏光效果',
					info: '03:53',
					img: require('@/assets/mainImg01.jpg'),
					to: '#'
				},
				{
					id: '36',
					title: '摄影技巧：如何意见打造胶片漏光效果',
					info: '03:53',
					img: require('@/assets/mainImg01.jpg'),
					to: '#'
				},
				{
					id: '37',
					title: '摄影技巧：如何意见打造胶片漏光效果',
					info: '03:53',
					img: require('@/assets/mainImg01.jpg'),
					to: '#'
				}
			],
			isScroll: false
		}
	},
	mounted () {
		window.addEventListener('scroll', (e) => {
			this.isScroll = (e.srcElement.scrollingElement.scrollTop > 50)
		})
	}
}
</script>

<style scoped>
.header-container {
	padding: 0px 16px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	background-color: #FFF;
}
.header-container h2 {
	margin: 10px 0px;
}
.header-container .van-search {
	padding: 0px;
	margin: 10px 0px;
}
.scale-enter, .scale-leave-to {
	height: 0;
	margin: 0;
	transform: scaleY(0);
	transform-origin: top;
}
.scale-enter-active, .scale-leave-active {
	transition: .2s;
}
.category-container {
	background-color: white;
	padding: 0px 16px;
	margin: 10px 0px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.category-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #656565;
	font-size: 12px;
	margin: 10px 0px;
}
.category-item .van-icon {
	padding: 8px;
	background-color: #F59F00;
	border-radius: 50%;
	margin-bottom: 4px;
	color: #FFF;
}
.single-row {
	display: flex;
	width: 100vw;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
.single-row::-webkit-scrollbar {
	display: none;
}
.activity-container {
	background-color: white;
	padding: 0px 16px;
	box-sizing: border-box;
	width: 100vw;
	overflow: hidden;
	margin: 10px 0px;
}
.activity-container .title {
	position: relative;
}
.activity-container .title small {
	position: absolute;
	right: 0;
	bottom: 0;
}
.single-row .article-container {
	margin-right: 8px;
}
.multi-row {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
</style>
