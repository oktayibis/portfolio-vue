<template>
<section>
  {{blog.title}}
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

<style scoped>

</style>
