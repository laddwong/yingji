<template>
  <div class="comment">
    <img :src="avatar" class="avatar">
    <div class="content">
      <p class="username">{{ username }}</p>
      <p class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    avatar: { type: String },
    username: { type: String },
    message: { type: String }
  }
}
</script>

<style scoped>
.comment {
  display: flex;
  margin: 16px 0;
}
.content p {
  margin: 0;
}
.message {
  font-size: 12px;
  color: var(--normal-text-color);
}
.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 16px;
}
</style>