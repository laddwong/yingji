<template>
	<!-- 作品展示卡 -->
	<div class="card">
		<!-- 点击头像进入用户详情页 -->
		<div class="header" @click="toUserDetail">
			<img :src="cardData.avatar" alt="头像">
			<span>{{cardData.username}}</span>
		</div>
		<!-- 作品图，点击进入详情页 -->
		<img
		@click="toDetail"
		:src="cardData.mainImg"
		alt="作品主图"
		class="main-image">
		<div class="operating">
			<!-- 点赞 -->
			<van-icon
				:name="isLike ? 'like' : 'like-o'"
				:color="isLike ? '#FB690D' : ''"
				:size="iconSize"
				@click="handleLike"/>
			<span>{{cardData.likeCount}}</span>
			<!-- 评论，点击进入详情页 -->
			<van-icon name="comment-o" :size="iconSize" @click="toDetail" />
			<span>{{cardData.messageCount}}</span>
			<!-- 分享链接 -->
			<van-icon name="share" :size="iconSize" @click="handleShare" />
			<!-- 收藏 -->
			<van-icon
				:name="isCollect ? 'star' : 'star-o'"
				:color="isCollect ? '#F59F00' : ''"
				:size="iconSize"
				@click="handleCollect"
				style="float: right; margin: 0;" />
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
			iconSize: 24,
			isLike: false,
			isCollect: false
		}
	},
	methods: {
		handleLike () {
			// 处理点赞
			this.isLike = !this.isLike
		},
		handleCollect () {
			// 处理收藏
			this.isCollect = !this.isCollect
		},
		handleShare () {
			// 分享链接
			//let shareUrl = window.location.host + '/photography-detail/' + this.cardData.id
			this.$toast('复制分享链接成功')
		},
		toDetail () {
			// 前往作品详情页
			this.$router.push({ path: `/photography-detail/${this.cardData.id }`})
		},
		toUserDetail () {
			// 前往用户详情页
			this.$router.push({ path: `/user-detail/${this.cardData.username}` })
		}
	}
}
</script>

<style scoped>
.card {
	background-color: white;
	margin-bottom: 16px;
}
.header {
	height: 40px;
	line-height: 40px;
	background-color: #FFF;
	padding: 8px 16px;
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
