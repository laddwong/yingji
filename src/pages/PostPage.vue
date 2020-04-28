<template>
	<div class="post-page">
		<!-- 头部按钮 -->
		<div class="header">
			<van-icon name="arrow-left" />
			<button>发布</button>
		</div>
		<!-- 文字内容 -->
		<div class="text-container">
			<h3>作品介绍</h3>
			<textarea v-model="text" placeholder="说说你的拍摄经历，创作心得..."></textarea>
		</div>
		<!-- 图片上传 -->
		<div class="img-upload">
			<van-uploader v-model="imgList" multiple :max-count="9" :preview-size="100"></van-uploader>
		</div>
		<!-- 标签选择 -->
		<div class="tag-select">
			<span class="add-tag-btn tag">+标签</span>
			<div class="tag-container">
				<span class="tag" v-for="(tag, index) in tags" :key="index">{{ tag }}X</span>
			</div>
		</div>
		<!-- 可选项 -->
		<div class="option">
			<div class="option-item">
				<van-icon name="cluster-o" />
				<span>作品分类</span>
				<van-icon name="arrow" class="arrow-right" />
			</div>
			<div class="option-item">
				<van-icon name="coupon-o" />
				<span>摄影器材</span>
				<van-icon name="arrow" class="arrow-right" />
			</div>
			<div class="option-item">
				<van-icon name="location-o" />
				<span>拍摄地点</span>
				<van-icon name="arrow" class="arrow-right" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PostPage',
	data () {
		return {
			text: '',
			imgList: [],
			tags: ['风景', '大海', '风景', '大海', '风景', '大海']
		}
	}
}
</script>

<style scoped>
	.post-page {
		padding: 16px;
		background-color: white;
		height: 100vh;
		box-sizing: border-box;
	}
	.header {
		display: flex;
		justify-content: space-between;
	}
	.header .van-icon {
		font-size: 18px;
	}
	.header button {
		border: none;
		background: none;
		color: var(--primary-color);
		font-weight: bold;
	}
	.text-container textarea {
		border: none;
		width: 100%;
		height: 8rem;
		resize: none;
		color: var(--normal-text-color);
	}
	.img-upload {
		margin: 16px 0;
	}
	.tag-select {
		font-size: 10px;
		display: flex;
		border-style: solid;
		border-color: #dfdfdf;
		border-width: 1px 0;
		padding: 8px 0;
	}
	.tag {
		display:inline-block;
		padding: 4px 8px;
		background-color: #F2F2F2;
		border-radius: 100px;
		margin-right: 13px;
	}
	.add-tag-btn {
		flex-shrink: 0;
		color: var(--secondary-color);
		border: 1px solid var(--secondary-color);
		background-color: white;
		position: relative;
	}
	.add-tag-btn::after{
		content: '';
		height: 20px;
		width: 1px;
		position: absolute;
		background-color: #e4e4e4;
		right: -9px;
		top: 1px;
	}
	.tag-container {
		overflow-x: auto;
		flex-grow: 1;
		white-space: nowrap;
	}
	.option-item {
		padding: 16px 0;
		color: var(--normal-text-color);
		border-bottom: 1px solid #e4e4e4;
	}
	.option-item .van-icon {
		font-size: 20px;
		vertical-align: middle;
	}
	.option-item span {
		vertical-align: middle;
		margin-left: 8px;
	}
	.arrow-right {
		float: right;
	}
</style>
