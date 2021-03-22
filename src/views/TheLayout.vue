<template>
  <el-container>
    <el-aside class="border-radius-left" >
      <TheSideMenu />
    </el-aside>
    <el-main>
    <base-container>
      <slot></slot>
    </base-container>
    </el-main>
  </el-container>
</template>

<script>
import TheSideMenu from '../components/TheSideMenu.vue'
import BaseContainer from '@/UI/BaseContainer'

export default {
  components: { BaseContainer, TheSideMenu }
}
</script>

<style scoped lang="scss">
.border-radius-left {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;

}
</style>
