<template>
  <div class="all-courses">
    <!-- 头部导航 -->
    <van-nav-bar
      title="摄影教程"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- 搜索栏 -->
    <van-search v-model="searchWord" placeholder="教程/公开课，搜搜看"></van-search>
    <!-- 标签选择 -->
    <div class="tags-container">
      <div class="tag-item"  v-for="(tag, index) in tags" :key="index">
        <input type="radio" v-model="tagSelect" :value="tag" :id="'tag'+index" hidden>
        <label :for="'tag'+index" class="tag">{{ tag }}</label>
      </div>
    </div>
    <!-- 头条 -->
    <!-- 文章列表 -->
    <!-- <user-item
      @button-click="test"
      main="adminadmin"
      sub="签约摄影师"
      buttonText="+关注"
      id="001"
      :img="require('@/assets/mainImg01.jpg')"/> -->
  </div>
</template>

<script>
export default {
  name: 'AllCourses',
  data () {
    return {
      tags: ['所有', '人像', '后期修图', '手机摄影', '器材应用', '拍摄技巧'],
      tagSelect: '所有'
    }
  }
}
</script>

<style>
.tags-container {
  padding: 8px 0px 16px 16px;
  white-space: nowrap;
  overflow-x: auto;
  background-color: white;
}
.tag-item {
  display: inline-block;
  font-size: 14px;
  margin-right: 16px;
  color: var(--bg-color);
}
.tag-item label {
  position: relative;
  padding-bottom: 4px;
}
.tag-item input:checked + label {
  font-weight: bold;
  color: var(--em-text-color);
}
.tag-item input:checked + label::after {
  content: '';
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--secondary-color);
}

</style>