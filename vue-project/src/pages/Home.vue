<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Home Page',
      message: 'This is my Home'
    };
  }
};
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  color: red;
}
</style>
