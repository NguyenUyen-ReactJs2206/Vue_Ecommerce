<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Footer from './components/Footer/Footer.vue';
</script>

<template>
  <div class="d-block">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped>
.d-block {
  display: inline-block;
}
</style>
