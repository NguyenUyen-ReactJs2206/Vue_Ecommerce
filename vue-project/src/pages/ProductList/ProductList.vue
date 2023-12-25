<script setup>
import AsideFilter from './components/AsideFilter/AsideFilter.vue';
import SortProductList from './components/SortProductList/SortProductList.vue';
</script>

<template>
  <div class="productList">
    <div class="container">
      <div class="productList__main">
        <div class="productList__main-left">
          <AsideFilter />
        </div>
        <div class="productList__main-right">
          <SortProductList />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  color: red;
}
</style>
