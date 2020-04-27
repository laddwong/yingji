<template>
	<div style="position: relative;">
		<div class="header-container">
			<div class="tag-list">
				<ul>
					<li v-for="(tag, index) in tags" :key="index">
						<span :class="{'tag-active': index === 0}">{{tag}}</span>
					</li>
				</ul>
			</div>
			<div class="display-mode">
				<van-icon name="apps-o" @click="activeMode = 'app'" :class="{'active-mode': activeMode === 'app'}"></van-icon>
				<van-icon name="bars" @click="activeMode = 'list'" :class="{'active-mode': activeMode === 'list'}"></van-icon>
			</div>
		</div>
		<div class="content-container">
			<card :cardData="cardData" />
			<card :cardData="cardData" />
			<card :cardData="cardData" />
		</div>
	</div>
</template>

<script>
import Card from '@/components/Card'
export default {
	name: 'RecommendPage',
	components: {
		'card': Card
	},
	data () {
		return {
			cardData: {
				avatar: require('@/assets/avatar01.jpg'),
				username: 'Superuser',
				mainImg: require('@/assets/mainImg01.jpg'),
				likeCount: 640,
				messageCount: 200,
				title: 'coooooooooooooool',
				time: Date.now()
			},
			tags: ['热门', '人像', '自然景观', '壁纸', '人像', '自然景观', '壁纸', '人像', '自然景观', '壁纸', '人像', '自然景观', '壁纸'],
			activeMode: 'list'
		}
	}
}
</script>

<style scoped>
.header-container {
	width: 100vw;
	display: flex;
	background-color: #FFF;
	padding-left: 16px;
	box-sizing: border-box;
	position: fixed;
	z-index: 10
}
.tag-list {
	height: 32px;
	flex-grow: 1;
	overflow-x: auto;
}
.tag-list:after {
	content: '';
	position: absolute;
	top: 0px;
	right: 64px;
	height: 24px;
	width: 1px;
	background-color: #b3b3b3;
	box-shadow: -3px 0px 6px 0px #FFF;
}
.tag-list li {
	display: inline-block;
	margin-right: 16px;
}
.tag-list span {
	padding: 4px 8px;
	background-color: #F2F2F2;
	border-radius: 100px;
	font-size: 10px;
}
.tag-list .tag-active {
	background-color: #F59F00;
	color: #FFF;
}
.display-mode {
	display: inline-block;
	width: 64px;
	line-height: 32px;
	flex-shrink: 0;
}
.display-mode i {
	margin-left: 8px;
}
.display-mode .active-mode {
	color: #F59F00;
}
.content-container {
	margin-top: 32px;
}
</style>
