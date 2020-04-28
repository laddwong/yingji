<template>
	<div>
		<div class="header-container">
			<ul>
				<li :class="{'title-active': currentTabComponent === 'FllowPage', 'title': true}">
					<span @click="currentTabComponent = 'FllowPage'">关注</span>
				</li>
				<li :class="{'title-active': currentTabComponent === 'RecommendPage', 'title': true}">
					<span @click="currentTabComponent = 'RecommendPage'">推荐</span>
				</li>
			</ul>
		</div>
		<div class="content-container">
			<transition :name="currentTabComponent === 'FllowPage' ? 'slide-right' : 'slide-left' ">
				<component class="content-inside" :style="'height: ' + height" :is="currentTabComponent" />
			</transition>
		</div>
	</div>
</template>

<script>
import FllowPage from './FllowPage'
import RecommendPage from './RecommendPage'
export default {
	name: 'HomePage',
	components: {
		FllowPage,
		RecommendPage
	},
	data () {
		let height = document.documentElement.clientHeight
		return {
			currentTabComponent: 'FllowPage',
			height: height - 100 + 'px'
		}
	},
}
</script>

<style scoped>
.header-container {
	height: 50px;
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	padding-left: 16px;
	background-color: #FFF;
}
.header-container li {
	display: inline-block;
	margin-right: 30px;
	line-height: 50px;
	font-weight: bold;
}
.header-container a {
	text-decoration: none;
	color: #33373d;
}
.title {
	transition: transform .5s;
}
.title span {
	position: relative;
}
.title span:after {
	content: '';
	height: 2px;
	background-color: #33373D;
	position: absolute;
	bottom: -2px;
	left: 4px;
	width: 0px;
	transition: width .5s;
}
.title-active span:after {
	width: 24px;
}
.title-active {
	transform: scale(1.5);
	transform-origin: center center;
}
.content-container {
	margin-top: 50px;
	white-space: nowrap;
}
.content-inside {
	display: inline-block;
	vertical-align: top;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
}
.slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
  transition: all .5s ;
}
.slide-left-leave-to, .slide-left-enter-to, .slide-right-enter-to {
  transform: translateX(-100%);
}
.slide-right-enter {
	transform: translateX(-200%);
}
.slide-right-leave-to {
	transform: translateX(100%);
}

</style>
