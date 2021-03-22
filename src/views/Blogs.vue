<template>
<div class="blogs">
  <el-row gutter="40" type="flex" justify="between">
    <el-col class="fix-margin" :span="24" v-for="blog in getBlogs" :key="blog.id" >
      <blog-item :blog="blog"/>
    </el-col>
  </el-row>
</div>
</template>

<script>
import BlogItem from '@/components/BlogItem'

export default {
  name: 'Blogs',
  components: { BlogItem },
  computed: {
    getBlogs () {
      return this.$store.getters['blogs/getBlogs']
    }
  }
}
</script>

<style lang="scss" scoped>

.blogs {
  padding: 5% 10%;
}
.fix-margin {
  margin: 3% 0;
}

</style>
