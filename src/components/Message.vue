<template>
  <div class="message" @click="$router.push({ path: `/message/conversation/${id}` })" >
    <img :src="avatar" class="avatar">
    <div class="content">
      <p class="username">{{ username }}</p>
      <p class="content">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    id: { type: String },
    avatar: { type: String },
    username: { type: String },
    message: { type: String }
  }
}
</script>

<style scoped>
.message {
  display: flex;
  margin: 16px 0;
}
.content p {
  margin: 0;
}
.content {
  font-size: 12px;
  color: var(--normal-text-color);
}
.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 16px;
}
.username {
  font-size: 16px;
  color: var(--em-text-color);
}
</style>