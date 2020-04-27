<template>
	<router-link :to="articleInfo.to" class="article-container">
		<img :src="articleInfo.img" :alt="articleInfo.title" :width="width" :height="height">
		<span :style="{top: height + 'px'}">{{articleInfo.info}}</span>
		<p :style="{width: width + 'px'}">{{articleInfo.title}}</p>
	</router-link>
</template>

<script>
export default {
	name: 'ArticleCard',
	props: {
		/*
		articleInfo: {id, title, info, img, to}
		*/
		articleInfo: Object,
		width: {
			type: Number,
			default: 150
		},
		height: {
			type: Number,
			default: 100
		}
	}
}
</script>

<style scoped>
.article-container {
	display: inline-block;
	color: #33373d;
	position: relative;
}
.article-container span {
	background-color: #000;
	position: absolute;
	right: 0;
	transform: translateY(-100%);
	color: #FFF;
	font-size: 11px;
}
.article-container p {
	margin: 0;
	white-space: normal;
	font-size: 14px;
}
</style>
