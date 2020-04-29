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
    <div class="headline">
      <img :src="headLine.img">
      <h3 class="title">{{ headLine.title }}</h3>
      <p class="abstract">{{ headLine.abstract }}</p>
    </div>
    <!-- 文章列表 -->
    <ul class="artical-list">
      <li class="artical-item" v-for="item in articals" :key="item.id" >
        <img :src="item.img" >
        <div class="artical-info">
          <h3>{{ item.title }}</h3>
          <span>阅读{{ item.reader }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AllCourses',
  data () {
    return {
      tags: ['所有', '人像', '后期修图', '手机摄影', '器材应用', '拍摄技巧'],
      tagSelect: '所有',
      headLine: {
        img: require('@/assets/mainImg01.jpg'),
        title: 'Photoshop加深减淡工具，后期核心技术之一',
        abstract: '摄影师可以通过改变画面局部的明暗，提升照片的氛围，强化立体感，以引导读者的视线，在Photoshop中溢出溢出溢出'
      },
      articals: [
        {
          id: '001',
          img: require('@/assets/mainImg01.jpg'),
          title: '测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1测试1',
          reader: 1000
        },
        {
          id: '002',
          img: require('@/assets/mainImg01.jpg'),
          title: '测试1测试1测试1',
          reader: 1000
        },
        {
          id: '003',
          img: require('@/assets/mainImg01.jpg'),
          title: '测试1测试1测试1',
          reader: 1000
        },
        {
          id: '004',
          img: require('@/assets/mainImg01.jpg'),
          title: '测试1测试1测试1',
          reader: 1000
        }
      ]
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
.headline {
  background-color: white;
  padding: 16px;
}
.headline img {
  width: 100%;
  height: auto;
}
.headline h3 {
  font-size: 18px;
  margin: 0;
}
.headline p {
  font-size: 14px;
  margin: 0;
  color: var(--normal-text-color);
  height: 40px;
  overflow: hidden;
}
.artical-list {
  background-color: white;
  padding: 16px;
}
.artical-item {
  display: flex;
  margin-bottom: 16px;
}
.artical-item img {
  width: 100px;
  height: 70px;
  flex-shrink: 0;
  margin-right: 8px;
}
.artical-item .artical-info {
  flex-grow: 1;
}
.artical-item .artical-info h3 {
  margin: 0;
  font-size: 16px;
  height: 40px;
  overflow: hidden;
}
.artical-item .artical-info span {
  font-size: 11px;
  color: var(--normal-text-color);
}
</style>