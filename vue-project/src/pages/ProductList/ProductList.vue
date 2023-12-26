<script setup>
import AsideFilter from './components/AsideFilter/AsideFilter.vue';
import SortProductList from './components/SortProductList/SortProductList.vue';
</script>

<template>
  <div class="product-list">
    <div class="container">
      <div class="product-list__main">
        <div class="product-list__main-left">
          <AsideFilter />
        </div>
        <div class="product-list__main-right">
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
