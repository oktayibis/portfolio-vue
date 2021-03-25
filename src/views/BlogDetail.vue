<template>
<section class="blog-detail">
  <el-row v-loading="isLoading" :gutter="20">
    <el-col class="title" :span="24">
      <h2>{{blog.blogTitle}}</h2>
     <el-row :gutter="40">
       <el-col :span="18">
         <p class="date">{{blog.timeStamp}}</p>
       </el-col>
       <el-col :span="6">
         <el-tag type="success" size="mini" class="tag" v-for="tag in blog.blogTags" :key="tag">{{tag}}</el-tag>
       </el-col>
     </el-row>
    </el-col>

    <el-col class="description" :span="20"> <h5>{{blog.blogSubTitle}}</h5> </el-col>

    <el-col class="image-container" :span="24">
      <el-image fit="contain" class="image" :src="blog.blogUrl">
        <template #placeholder>
          <div class="image-slot">
            Loading<span class="dot">...</span>
          </div>
        </template>
        <template #error>
          <div class="image-slot">
            <em class="el-icon-picture-outline"></em>
          </div>
        </template>
      </el-image>
    </el-col>
    <el-col class="content" :span="24">
      <p v-html="blog.blogContent"></p>
    </el-col>
  </el-row>
</section>
</template>

<script>
import Blog from '@/classes/Blog'

export default {
  created () {
    this.loadBlog()
  },
  name: 'BlogDetail',
  props: {
    blogId: {
      type: String
    }
  },
  data () {
    return {
      blog: new Blog({
        blogTitle: '',
        blogSubTitle: '',
        blogUrl: '',
        blogContent: '',
        blogTags: []
      }),
      isLoading: false
    }
  },
  methods: {
    async loadBlog () {
      this.isLoading = true
      try {
        await this.$store.dispatch('blogs/getBlogById', this.blogId)
        this.blog = this.$store.getters['blogs/getSelectedBlog']
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
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
    max-height: 20vh;
    border-radius: 10px;
  }

  .content {
    margin-top: 1rem;
  }

  .tag {
    margin: 10px 5px 0 5px;
  }

}
</style>
