<template>
<div class="quates">
  <q class="text"><slot></slot></q>
  <el-divider></el-divider>
</div>
</template>

<script>
export default {
  name: 'Quotes'
}
</script>

<style lang="scss" scoped>
@import "./src/costum-theme.scss";

.text {
  letter-spacing: 0.12rem;
  text-align: justify;
  margin-bottom: 20px;
}
h4 {
  letter-spacing: 0.12rem;
  margin-bottom: 20px;
  color: $--color-info;
  text-align: center;

}
</style>
