<template>
	<div class="message-page">
		<h2>消息</h2>
		<div class="category">
			<div class="category-item">
				<van-icon name="like-o" />
				<p>喜欢</p>
			</div>
			<div class="category-item">
				<van-icon name="comment-o" />
				<p>评论</p>
			</div>
			<div class="category-item">
				<van-icon name="friends-o" />
				<p>粉丝</p>
			</div>
		</div>
		<div class="comments-container">
			<comment
			v-for="comment in comments"
			:key="comment.id"
			:avatar="comment.avatar"
			:username="comment.username"
			:message="comment.message">
			</comment>
		</div>
	</div>
</template>

<script>
import Comment from '../components/Comment'
export default {
	name: 'MessagePage',
	components: {
		Comment
	},
	data () {
		return {
			comments: [
				{
					id: '001',
					avatar: require('@/assets/avatar01.jpg'),
					username: 'admin',
					message: '测试测试测试测试'
				},
				{
					id: '002',
					avatar: require('@/assets/avatar01.jpg'),
					username: 'admin',
					message: '测试测试测试测试'
				},
				{
					id: '003',
					avatar: require('@/assets/avatar01.jpg'),
					username: 'admin',
					message: '测试测试测试测试'
				},
				{
					id: '004',
					avatar: require('@/assets/avatar01.jpg'),
					username: 'admin',
					message: '测试测试测试测试'
				},
				{
					id: '005',
					avatar: require('@/assets/avatar01.jpg'),
					username: 'admin',
					message: '测试测试测试测试'
				},
				{
					id: '006',
					avatar: require('@/assets/avatar01.jpg'),
					username: 'admin',
					message: '测试测试测试测试'
				}
			]
		}
	}
}
</script>

<style scoped>
	.message-page {
		background-color: white;
		padding: 16px;
	}
	h2 {
		margin: 0;
		margin-bottom: 16px;
	}
	.category {
		display: flex;
		justify-content: space-around;
		margin: 16px 0;
		text-align: center;
	}
	.category-item p {
		margin: 0;
		font-size: 14px;
	}
	.category-item .van-icon {
		font-size: 24px;
	}
</style>
