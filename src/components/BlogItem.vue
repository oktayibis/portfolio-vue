<template>
  <el-card>
    <div class="card-container">
      <div class="card-header">
        <h4>{{blog.date}}</h4>
        <div class="tags">
          <el-tag class="tag" v-for="tag in blog.tags" :key="tag">{{tag}}</el-tag>
        </div>
      </div>
      <h2>
        <router-link :to="createLink">
          {{blog.title}}
        </router-link>
      </h2>

      <q>{{blog.description}}</q>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'blog-item',
  props: {
    blog: {}
  },
  computed: {
    createLink () {
      return `/blogs/${this.blog.id}`
    }
  }
}
</script>
<style lang="scss" scoped>
@import "src/costum-theme";
.card-container {
  width: 100%;
  a {
    text-decoration: none;
    color: inherit;

    &:hover, :visited, :focus {
      text-decoration: none;
      color: darken($--color-primary, 10%);
    }

  }

  .card-header {
    display: flex;
    justify-content: space-between;

    .tag {
      margin: 0 5px;
    }
  }
  h2 {
    color: $--color-primary;
  }

  &:hover {
    h2 {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}

</style>
