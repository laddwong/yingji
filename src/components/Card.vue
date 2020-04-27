<template>
	<!-- 作品展示卡 -->
	<div class="card">
		<div class="header">
			<img :src="cardData.avatar" alt="头像">
			<span>{{cardData.username}}</span>
		</div>
		<img :src="cardData.mainImg" alt="作品主图" class="main-image">
		<div class="operating">
			<van-icon name="like-o" :size="iconSize" />
			<span>{{cardData.likeCount}}</span>
			<van-icon name="comment-o" :size="iconSize" />
			<span>{{cardData.messageCount}}</span>
			<van-icon name="share" :size="iconSize" />
			<van-icon name="star-o" :size="iconSize" style="float: right; margin: 0;" />
		</div>
		<div class="title">
			<p>{{cardData.title}}</p>
			<span>{{cardData.time}}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: ['cardData'],
	data () {
		return {
			iconSize: 24
		}
	}
}
</script>

<style scoped>
.card {
	background-color: white;
	margin: 16px 0px;
}
.header {
	height: 40px;
	background-color: #FFF;
	padding-left: 16px;
}
.header img {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	vertical-align: middle;
	margin-right: 8px;
}
.header span {
	vertical-align: middle;
}
.main-image {
	width: 100%;
	height: auto;
}
.operating {
	padding: 8px 16px;
}
.operating i,span {
	vertical-align: middle;
	margin-right: 4px;
}
.operating span {
	margin-right: 16px;
}
.title {
	padding: 16px;
	padding-top: 0;
}
.title p {
	font-size: 1.3rem;
	margin: 0;
}
.title span {
	font-size: 0.8rem;
	color: #DADADA;
}
</style>
