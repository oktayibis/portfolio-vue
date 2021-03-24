<template>
  <div class="projects">
    <div class="top">
      <quotes>Before software can be reusable it first has to be usable. – Ralph Johnson</quotes>
    </div>
    <el-row :gutter="40" type="flex" justify="between">
      <el-col class="fix-margin" :span="12" v-for="project in projects" :key="project.id">
        <project-item :id="project.id" :image-array="project.imagesURL" :title="project.projectTitle" :date="project.date"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem'
import Quotes from '@/components/Quotes'

export default {
  name: 'Projects',
  components: {
    ProjectItem,
    Quotes
  },
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
  padding: 4% 10%;
  color: $--color-primary;

  .fix-margin {
    margin: 1.5% 0;
  }
}
</style>
