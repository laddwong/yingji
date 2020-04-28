<template>
  <div class="userDetail">
    <van-nav-bar
      title="用户信息"
      left-arrow
      @click-left="$router.go(-1)" />
    <me-page></me-page>
  </div>
</template>

<script>
import MePage from './MePages/MePage'
export default {
  name: 'UserDetail',
  components: { MePage }
}
</script>

<style>

</style>