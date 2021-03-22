<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-carousel height="200px">
      <el-carousel-item v-for="image in imageArray" :key="image">
        <img :src="image" class="image" alt="carouse image">
      </el-carousel-item>
    </el-carousel>
    <div style="padding: 14px;">
      <span>{{title}}</span>
      <div class="bottom">
        <time class="time">{{date}}</time>
        <el-button type="text" class="button">More Info</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'project-item',
  props: {
    imageArray: {
      type: Array,
      default () {
        return ['../assets/image-placeholder.png']
      }
    },
    title: {
      type: String,
      default: 'Perfect Project'
    },
    date: {
      type: String,
      default: new Date().getFullYear()
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../costum-theme";

.time {
  font-size: 13px;
  color: #999;
}
.image {
  width: 100%;
  height: 100%;
  display: block;
}

.bottom {
  display: flex;
  justify-content: space-between;
}
</style>
