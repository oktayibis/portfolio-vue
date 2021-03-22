<template>
<div class="projects">
  <el-row gutter="40" type="flex" justify="between">
    <el-col class="fix-margin" :span="12" v-for="project in projectObject" :key="project.images" >
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
  data () {
    return {
      projectObject: [
        {
          title: 'Project 1',
          images: ['https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664_1280.jpg', 'https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg'],
          date: '20/10/2020'
        },
        {
          title: 'Project 2',
          images: ['https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png'],
          date: '20/10/2022'
        },
        {
          title: 'Project 3',
          images: ['https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png'],
          date: '20/10/2022'
        },
        {
          title: 'Project 4',
          images: ['https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png'],
          date: '20/10/2022'
        }
      ]
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
