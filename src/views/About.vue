<template>
  <div class="about">
    <div class="top">
      <quotes>Experience is the name everyone gives to their mistakes. – Oscar Wilde</quotes>
    </div>
   <div class="desc">
     <h2>About me</h2>
     <p>
       A Front-End Developer who loves to keep up with current technologies is a lifelong student, and works hard to make contributions that will make a difference to projects. I had the opportunity to work on dozens of different projects and used many front-end technologies. While respecting core development principles and best practices, I am also fearless to try innovations, this also helps me to leave my comfort zone.
     </p>
   </div>
    <el-divider></el-divider>
    <h4>Some of my core skills</h4>
    <div class="skills">
   <div v-for="skill in values" :key="skill.name" class="skill-item">
     <el-rate
       v-model="skill.point"
       disabled
       show-score
       text-color="#ff9900"
       :score-template="skill.name">
     </el-rate>
   </div>
    </div>
  </div>
</template>

<script>
import Quotes from '@/components/Quotes'

export default {
  components: { Quotes },
  data () {
    return {
      values: [
        {
          name: 'Javascript/ES2015',
          point: 5
        },
        {
          name: 'CSS/SASS',
          point: 5
        },
        {
          name: 'HTML',
          point: 5
        },
        {
          name: 'React',
          point: 5
        },
        {
          name: 'React-Native',
          point: 4
        },
        {
          name: 'AngularJS',
          point: 4.5
        },
        {
          name: 'VueJS',
          point: 4
        },
        {
          name: 'Firebase / NoSql',
          point: 4
        },
        {
          name: 'Agile/Scrum',
          point: 4
        },
        {
          name: 'Typescript',
          point: 4
        }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>

@import "./src/costum-theme.scss";

.about {
  padding: 5% 10%;
  text-align: justify;
  color: $--color-primary;

  p {
    line-height: 2;
    letter-spacing: 1.4px;

  }

  .skills {
    padding: 3% 0;
    display: grid;
    grid-template-columns: 50% 50%;
    row-gap: 10px;
    column-gap: 10px;
  }
}
</style>
