<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      :fixed="true"
      :title="OthersUsername"
      left-arrow
      @click-left="$router.go(-1)" />
    <!-- 对话内容 -->
    <div class="content-container" id="content-container">
      <div class="conversation-item" v-for="(item, index) in content " :key="'conversation'+index" :style="item.isMine? 'justify-content: flex-end;': ''" >
        <img :src="OthersAvatar" v-if="!item.isMine">
        <span :class="item.isMine ? 'my-text' : 'others-text'">{{ item.text }}</span>
        <img :src="myAvatar" v-if="item.isMine">
      </div>
    </div>
    <!-- 输入框 -->
    <div class="input-message" @keypress.enter="send">
      <input type="text" v-model="newText">
      <van-button size="small" @click="send">发送</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConversationPage',
  data () {
    return {
      OthersUsername: 'ad3',
      OthersAvatar: require('@/assets/avatar01.jpg'),
      myAvatar: require('@/assets/avatar01.jpg'),
      content: [
        {
          isMine: false,
          text: '测试测试测试'
        },
        {
          isMine: true,
          text: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
        },
        {
          isMine: false,
          text: '测试测试测试'
        }
      ],
      newText: ''
    }
  },
  methods: {
    send () {
      if (this.newText) {
        this.content.push({
          isMine: true,
          text: this.newText
        })
        this.newText = ''
        this.$nextTick(() => {
          let container = document.getElementById('content-container')
          document.scrollingElement.scrollTop = container.scrollHeight
        })
      }
    }
  }
}
</script>

<style scoped>
.content-container {
  margin-top: 46px;
  margin-bottom: 96px;
  padding: 16px;
}
.conversation-item {
  margin: 16px 0;
  display: flex;
}
.conversation-item img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.conversation-item span {
  margin: 0 16px;
  max-width: 200px;
  padding: 8px 16px;
}
.my-text {
  background-color: var(--secondary-color);
  color: white;
}
.others-text {
  background-color: white;
  color: var(--normal-text-color);
}
.input-message {
  background-color: white;
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  padding: 8px;
  display: flex;
}
.input-message input {
  flex-grow: 1;
  margin-right: 8px;
  border-radius: 5px;
  border-color: var(--bg-color);
  border-style: solid;
  padding: 0 8px;
  color: var(--normal-text-color);
}
</style>