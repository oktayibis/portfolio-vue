<template>
  <el-card>
    <div class="card-container">
      <div class="card-header">
        <h4>{{blog.date}}</h4>
        <div class="tags">
          <el-tag class="tag" v-for="tag in blog.tags" :key="tag">{{tag}}</el-tag>
        </div>
      </div>
      <h2>{{blog.title}}</h2>
      <q>{{blog.description}}</q>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'blog-item',
  props: {
    blog: {}
  }
}
</script>
<style lang="scss" scoped>

.card-container {
  width: 100%;

  .card-header {
    display: flex;
    justify-content: space-between;

    .tag {
      margin: 0 5px;
    }
  }

  &:hover {
    h2 {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}

</style>
