<template>
<section class="project-detail">
<el-row v-loading="isLoading" :gutter="20">
<el-col :span="24">
  <el-carousel type="card"  height="30vh">
    <el-carousel-item v-for="image in project.imagesURL" :key="image">
      <el-image  class="image" fit="contain" :src="image">
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
    </el-carousel-item>
  </el-carousel>
</el-col>
  <el-col class="info-container" :span="24">
   <el-row align="middle" :gutter="20">
     <el-col :span="18">
       <h2 class="title">{{project.projectTitle}}</h2>
     </el-col>
     <el-col :span="6">
       <div class="btn-container">
       <a :href="project.projectUrl" target="_blank">
         <el-button  :disabled="!project.projectUrl" type="info" >Github</el-button>
       </a>
       <a :href="project.projectDemo" target="_blank">
         <el-button  :disabled="!project.projectDemo" type="primary">Demo</el-button>
       </a>
     </div>
     </el-col>
   </el-row>
    <p class="subtitle">{{project.date}}</p>
    <p class="content">{{project.projectContent}}</p>
    <el-divider></el-divider>
    <p class="skills">
      <span class="badge">Skills: </span>
      <span class="badge-item" v-for="(tag, index) in project.projectTags" :key="tag">{{tag}}
            <span class="separator" v-if="index !== (project.projectTags.length-1)">|</span>
      </span>

    </p>
    <el-divider></el-divider>
    <p class="teams">
      <span class="badge">Team Members: </span>
      <span class="badge-item" v-for="(member, index) in project.projectTeam" :key="member">{{member}}
           <span class="separator" v-if="index !== (project.projectTeam.length-1)">|</span>
      </span>
    </p>
  </el-col>

</el-row>
</section>
</template>

<script>
export default {
  created () {
    this.fetchProject()
  },
  name: 'ProjectDetail',
  data () {
    return {
      project: {},
      isLoading: false
    }
  },
  props: {
    projectId: {
      type: String,
      default: 'Not Found'
    }
  },
  methods: {
    async fetchProject () {
      this.isLoading = true
      try {
        await this.$store.dispatch('projects/getProjectById', this.projectId)
        this.project = this.$store.getters['projects/getSelectedProject']
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
.project-detail {
  padding: 0 5%;
  .image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border: 1px solid $--color-light;
    border-radius: 10px;
  }

  .info-container {
    line-height: 1.5;
    letter-spacing: 1.1px;

    .badge {
      color: $--color-danger;
      font-weight: 800;
      margin-right: 10px;
    }
    .badge-item {
      color: $--color-primary;
    }

    .separator {
      font-weight: bold;
      color: $--color-success;
      padding: 0 5px;
    }

    .title {
      font-size: 2rem;
      color: $--color-success;
    }

    .content {
      color: $--color-primary;
      font-size: 1rem;
      text-align: justify;
    }

    .btn-container {
      margin-top: 30px;
      :nth-child(2) {
        margin-left: 20px;
      }

    }

  }
}
</style>
