<template>
<section class="blog-detail">
  <el-row :gutter="20">
    <el-col class="title" :span="24"><h2>{{blog.title}}</h2></el-col>
    <el-col class="description" :span="20"> <h5>{{blog.description}}</h5> </el-col>

    <el-col class="image-container" :span="24">
      <el-image fit="contain" class="image" src="http://duruthemes.com/demo/html/lonon/light/images/post.jpg">
        <template #placeholder>
          <div class="image-slot">
            Loading<span class="dot">...</span>
          </div>
        </template>
        <template #error>
          <div class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </template>
      </el-image>
    </el-col>
    <el-col class="content" :span="24">
      <p v-html="blog.content"></p>
    </el-col>
  </el-row>
</section>
</template>

<script>
export default {
  created () {
    this.blog = this.$store.getters['blogs/getBlogs'].find(b => b.id === this.blogId)
  },
  name: 'BlogDetail',
  props: {
    blogId: {
      type: String
    }
  },
  data () {
    return {
      blog: {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/costum-theme.scss";
.blog-detail {
  padding: 5%;
  overflow-y: auto;
  max-height: 800px;

  .title {
    color: $--color-info;
  }

  .description {
    color: $--color-primary;
    font-size: 1.2rem;
    font-style: italic;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .image-container {
    text-align: center;
    max-height: 30vh;
    border-radius: 10px;
  }

  .content {
    margin-top: 1rem;
  }

}
</style>
