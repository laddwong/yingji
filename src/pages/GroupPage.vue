<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="摄影小组"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <!-- 小组列表 -->
    <ul class="group-list">
      <li v-for="item in groups" :key="item.id" >
        <user-item
          :main="item.name"
          :sub="item.sub"
          :buttonText="item.isInGroup ? '已加入' : '加入'"
          :isButtonDisabled="item.isInGroup"
          :id="item.id"
          :img="item.avatar"/>
        <div class="img-list">
          <img v-for="(img, index) in item.imgList " :src="img" :key="index">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import UserItem from '../components/UserItem'
export default {
  name: 'GroupPage',
  components: { UserItem },
  data () {
    return {
      groups: [
        {
          id: '001',
          avatar: require('@/assets/avatar01.jpg'),
          name: '华科摄影队',
          sub: '华科摄影协会小组',
          isInGroup: false,
          imgList: [
            require('@/assets/mainImg01.jpg'),
            require('@/assets/mainImg01.jpg'),
            require('@/assets/mainImg01.jpg')
          ]
        },
        {
          id: '002',
          avatar: require('@/assets/avatar01.jpg'),
          name: '华科摄影队',
          sub: '华科摄影协会小组',
          isInGroup: false,
          imgList: [
            require('@/assets/mainImg01.jpg'),
            require('@/assets/mainImg01.jpg'),
            require('@/assets/mainImg01.jpg')
          ]
        },
        {
          id: '003',
          avatar: require('@/assets/avatar01.jpg'),
          name: '华科摄影队',
          sub: '华科摄影协会小组',
          isInGroup: false,
          imgList: [
            require('@/assets/mainImg01.jpg'),
            require('@/assets/mainImg01.jpg'),
            require('@/assets/mainImg01.jpg')
          ]
        },
        {
          id: '004',
          avatar: require('@/assets/avatar01.jpg'),
          name: '华科摄影队',
          sub: '华科摄影协会小组',
          isInGroup: false,
          imgList: [
            require('@/assets/mainImg01.jpg'),
            require('@/assets/mainImg01.jpg'),
            require('@/assets/mainImg01.jpg')
          ]
        },
        {
          id: '005',
          avatar: require('@/assets/avatar01.jpg'),
          name: '华科摄影队',
          sub: '华科摄影协会小组',
          isInGroup: false,
          imgList: [
            require('@/assets/mainImg01.jpg'),
            require('@/assets/mainImg01.jpg'),
            require('@/assets/mainImg01.jpg')
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.group-list {
  background-color: white;
}
.group-list li {
  margin-bottom: 16px;
}
.img-list {
  padding:0 16px;
  display: flex;
  justify-content: space-between;
}
.img-list img {
  width: 100px;
  height: 100px;
}
</style>