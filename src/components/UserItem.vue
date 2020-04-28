<template>
  <div class="user-item">
    <img :src="img">
    <div class="info">
      <p class="info-main">{{ main }}</p>
      <p class="info-sub">{{ sub }}</p>
    </div>
    <van-button
      @click="$emit('button-click', id)"
      size="mini"
      v-show="buttonText"
      :disabled="isButtonDisabled" >
      {{ buttonText }}
    </van-button>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    id: String, // 用于标识，点击按钮时返回给父组件
    img: String, // 通常是头像或者是群组标识
    main: String, // 通常是用户名或者是组名
    sub: String, // 通常是个性签名或者是群组说明
    buttonText: { // 按钮文本，如果是空字符串则不显示按钮，默认是空字符串
      type: String,
      default: ''
    },
    isButtonDisabled: { //按钮是否禁用，默认是启用的
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.user-item {
  padding: 8px 16px;
  background-color: white;
  display: flex;
  align-items: center;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 8px;
}
p {
  margin: 0;
}
.info {
  flex-grow: 1;
}
.info-sub {
  font-size: 11px;
  color: #a7a7a7;
}
.van-button {
  border-color: var(--normal-text-color);
  color: var(--normal-text-color);
}
</style>