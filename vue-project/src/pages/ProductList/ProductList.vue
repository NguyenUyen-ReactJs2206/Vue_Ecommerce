<template>
  <div class="product-list">
    <div class="container">
      <div class="product-list__main">
        <div class="product-list__main-left">
          <AsideFilter v-if="isVisible" />
          <button v-if="!isVisible" @click="onShowPopup">SHOW POPUP</button>
        </div>
        <div class="product-list__main-right">
          <SortProductList />
        </div>
      </div>
    </div>

    <PopupAsideFilterMobile v-if="showPopupAsideFilterMobile" @closePopup="onClosePopup" />
  </div>
</template>

<script setup>
import PopupAsideFilterMobile from 'src/components/PopupAsideFilterMobile/PopupAsideFilterMobile.vue';
import AsideFilter from './components/AsideFilter/AsideFilter.vue';
import SortProductList from './components/SortProductList/SortProductList.vue';
import { Teleport, ref } from 'vue';

const isVisible = ref(false);
const showPopupAsideFilterMobile = ref(false);

const onShowPopup = () => {
  showPopupAsideFilterMobile.value = !showPopupAsideFilterMobile.value;
};

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    isVisible.value = false;
    showPopupAsideFilterMobile.value = false;
  } else {
    isVisible.value = true;
    showPopupAsideFilterMobile.value = false;
  }
});

const onClosePopup = () => {
  showPopupAsideFilterMobile.value = false;
};
</script>

<style scoped>
h2 {
  text-align: center;
  color: red;
}
</style>
