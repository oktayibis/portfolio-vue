<template>
<div>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'BaseContainer'
}
</script>

<style lang="scss" scoped>
div {
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
  display: block;
  background: #fff;
  height: 100%;
}
</style>
