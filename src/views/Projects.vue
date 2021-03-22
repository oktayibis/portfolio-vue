<template>
<div class="projects">
  <el-row gutter="40" type="flex" justify="between">
    <el-col class="fix-margin" :span="12" v-for="project in projects" :key="project.images" >
      <project-item :image-array="project.images" :title="project.title" :date="project.date" />
    </el-col>
  </el-row>
</div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem'

export default {
  name: 'Projects',
  components: { ProjectItem },
  computed: {
    projects () {
      return this.$store.getters['projects/getProjects']
    }
  }

}
</script>

<style lang="scss" scoped>
@import "./src/costum-theme.scss";

.projects {
  padding: 5% 10%;

  .fix-margin {
    margin: 3% 0;
  }
}
</style>
