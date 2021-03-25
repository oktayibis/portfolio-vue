<template>
<div class="container">
   <the-layout>
     <router-view v-slot="slotProps">
       <transition name="route" mode="out-in">
         <component :is="slotProps.Component"></component>
       </transition>
     </router-view>
 </the-layout>
</div>
</template>

<script>
import TheLayout from './views/TheLayout'
export default {
  components: { TheLayout }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import "./src/costum-theme.scss";

* {
  box-sizing: border-box;
}

html {
  font-family: 'Playfair Display', serif
}

body {
  margin: 10px auto;
  font-size: 15px;
  line-height: 1.5em;
  font-weight: 400;
  color: #999;
  background: #f2f2f2;
}
.container {
  margin: auto;
  max-width: 1366px;
  background-color: $--color-light;
  -webkit-box-shadow: 0 0 47px -16px rgba(102, 99, 99, 0.75);
  -moz-box-shadow: 0 0 47px -16px rgba(83, 81, 81, 0.75);
  box-shadow: 0 0 47px -16px rgba(115, 115, 115, 0.75);
  border-radius: 10px;
  height: 100%;

}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
