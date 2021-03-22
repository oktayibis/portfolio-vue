<template>
<section>
  <slot></slot>
</section>
</template>

<script>
export default {
  name: 'BaseContainer'
}
</script>

<style lang="scss" scoped>
section {
  padding-top: 30px;
  padding-bottom: 30px;
  clear: both;
  width: 100%;
  display: block;
  background: #fff;
  height: 100%;
}
</style>
