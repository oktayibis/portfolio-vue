<template>
<div class="blogs">
  <div class="top">
    <quotes>Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. – Antoine de Saint-Exupery</quotes>
  </div>
  <el-row :gutter="40" type="flex" justify="between">
    <el-col class="fix-margin" :span="24" v-for="blog in getBlogs" :key="blog.id" >
      <blog-item :blog="blog"/>
    </el-col>
  </el-row>
</div>
</template>

<script>
import BlogItem from '@/components/BlogItem'
import Quotes from '@/components/Quotes'

export default {
  name: 'Blogs',
  components: { Quotes, BlogItem },
  computed: {
    getBlogs () {
      return this.$store.getters['blogs/getBlogs']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/costum-theme.scss";

.blogs {
  padding: 5% 10%;
  color: $--color-primary;

}
.fix-margin {
  margin: 3% 0;
}

</style>
