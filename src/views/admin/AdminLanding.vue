<template>
<div class="landing-container">
  <BaseContainer>
    <el-row justify="space-between">
      <router-link to="/admin/">
        <el-button>Messages</el-button>
      </router-link>
      <router-link to="add-project">
        <el-button>Add Project</el-button>
      </router-link>
      <router-link to="add-blog">
        <el-button>Add Blog</el-button>
      </router-link>
    </el-row>
    <router-view></router-view>
  </BaseContainer>
</div>
</template>

<script>
import BaseContainer from '@/UI/BaseContainer'
export default {
  name: 'AdminLanding',
  components: { BaseContainer }

}
</script>

<style lang="scss" scoped>
.landing-container {
  padding: 1% 5%;
}
</style>
