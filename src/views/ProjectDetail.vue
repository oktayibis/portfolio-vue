<template>
<section>
  {{project.title}}
</section>
</template>

<script>
export default {
  created () {
    this.project = this.$store.getters['projects/getProjects'].find(p => p.id === this.projectId)
  },
  name: 'ProjectDetail',
  data () {
    return {
      project: {}
    }
  },
  props: {
    projectId: {
      type: String,
      default: 'Not Found'
    }
  }
}
</script>

<style scoped>

</style>
