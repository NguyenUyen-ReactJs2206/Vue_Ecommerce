<template>
  <div class="product-list">
    <div class="container">
      <div class="product-list__main">
        <div class="product-list__main-left">
          <AsideFilter />

          <!-- <button class="product-list__button-show-popup" v-if="!isVisible" @click="onShowPopup">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button> -->
          <button @click="showPopup">click</button>
        </div>
        <div class="product-list__main-right">
          <SortProductList />

          <div class="product-list__products">
            <div class="product-list__item">
              <Product />
            </div>
            <div class="product-list__item">
              <Product />
            </div>
            <div class="product-list__item">
              <Product />
            </div>
            <div class="product-list__item">
              <Product />
            </div>
            <div class="product-list__item">
              <Product />
            </div>
            <div class="product-list__item">
              <Product />
            </div>
            <div class="product-list__item">
              <Product />
            </div>
            <div class="product-list__item">
              <Product />
            </div>
            <div class="product-list__item">
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>

    <PopupAsideFilterMobile :showPopupAsideFilterMobile="showPopupAsideFilterMobile" />
  </div>
</template>

<script setup>
import PopupAsideFilterMobile from 'src/components/PopupAsideFilterMobile/PopupAsideFilterMobile.vue';
import AsideFilter from './components/AsideFilter/AsideFilter.vue';
import SortProductList from './components/SortProductList/SortProductList.vue';
import { ref, onMounted, onBeforeUnmount, watchEffect, Transition } from 'vue';
import Product from './components/Product/Product.vue';

const showPopupAsideFilterMobile = ref(false);

const showPopup = () => {
  showPopupAsideFilterMobile.value = !showPopupAsideFilterMobile.value;
};
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  color: red;
}
</style>
