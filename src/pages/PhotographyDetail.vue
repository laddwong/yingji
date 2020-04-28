<template>
  <div class="photography-detail">
    <!-- 导航栏 -->
    <div class="header">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <img :src="detail.avatar">
      <span>{{ detail.username }}</span>
    </div>
    <!-- 手动轮播图 -->
    <van-swipe indicator-color="white" class="photography">
      <van-swipe-item v-for="(img, index) in detail.imgList" :key="index">
        <img :src="img">
      </van-swipe-item>
    </van-swipe>
    <!-- 作品信息 -->
    <div class="info-container">
      <p>{{ detail.title }}</p>
      <div>
        <span 
          class="tag"
          v-for="(tag, index) in detail.tags"
          :key="'tag'+index">
          {{ tag }}
        </span>
      </div>
    </div>
    <!-- 评论 -->
    <div class="comment-container">
      <h3>全部评论({{ detail.commentsCount }})</h3>
      <comment
        v-for="item in detail.comments"
        :key="item.id"
        :data="item"
        />
    </div>
    <!-- 提交评论 -->
    <div class="add-comment-container">
      <input type="text" v-model="newComment" placeholder="写下你的评论">
      <van-button round type="info" size="small" >发送</van-button>
    </div>
  </div>
</template>

<script>
import Comment from '../components/Comment'
export default {
  name: 'PhotographyDetail',
  components: { Comment },
  data () {
    return {
      detail: {
        id: '001',
        username: 'superuser',
        avatar: require('@/assets/avatar01.jpg'),
        imgList: [
          require('@/assets/mainImg01.jpg'),
          require('@/assets/mainImg01.jpg'),
          require('@/assets/mainImg01.jpg'),
          require('@/assets/mainImg01.jpg'),
          require('@/assets/mainImg01.jpg')
        ],
        title: '测试12345',
        tags: ['风景', '大海'],
        commentsCount: 223,
        comments: [
          {
            id: '001',
            username: 'ad2',
            avatar: require('@/assets/avatar01.jpg'),
            content: 'cooool, very cooooolcooool, very cooooolcooool, very cooooolcooool, very cooooolcooool, very cooooolcooool, very cooooolcooool, very coooool',
            time: Date.now()
          },
          {
            id: '002',
            username: 'ad2',
            avatar: require('@/assets/avatar01.jpg'),
            content: 'cooool, very coooool',
            time: Date.now()
          },
          {
            id: '003',
            username: 'ad2',
            avatar: require('@/assets/avatar01.jpg'),
            content: 'cooool, very coooool',
            time: Date.now()
          }
        ]
      },
      newComment: ''
    }
  }
}
</script>

<style scoped>

.header {
  padding: 10px 16px;
  background-color: white;
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
.header .van-icon {
  vertical-align: middle;
  font-size: 20px;
  margin-right: 16px;
}
.photography img {
  width: 100%;
}
.info-container {
  background-color: white;
  padding: 16px;
  border-bottom: 1px solid #E4E4E4;
}
.info-container p {
  color: var(--em-text-color);
  margin-top: 0;
  font-weight: bold;
  white-space: normal;
}
.tag {
  display:inline-block;
  padding: 4px 8px;
  background-color: #F2F2F2;
  border-radius: 100px;
  margin-right: 13px;
  font-size: 11px;
}
.comment-container {
  background-color: white;
  padding: 16px;
  padding-bottom: 50px;
}
.comment-container h3 {
  margin-top: 0;
}
.add-comment-container {
  display: flex;
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  padding: 8px 16px;
  background-color: white;
  border-top: 1px solid #E4E4E4;
}
.add-comment-container input {
  flex-grow: 1;
  background-color: #f1f1f1;
  border-style: solid;
  border-color: #E4E4E4;
  margin-right: 8px;
  border-radius: 5px;
  padding: 0 8px;
  color: var(--normal-text-color);
}
</style>
