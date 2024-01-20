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
          <!-- <button @click="showPopup">click</button> -->
        </div>
        <div class="product-list__main-right">
          <SortProductList />

          <div class="product-list__products">
            <div v-for="product in productStore.productList.products" :key="product._id" class="product-list__item">
              <Product :product="product" />
            </div>
          </div>
          <!-- :page="page" :setPage="setPage" :pageSize="20" -->
          <Pagination />
        </div>
      </div>
    </div>

    <!-- <PopupAsideFilterMobile :showPopupAsideFilterMobile="showPopupAsideFilterMobile" /> -->
  </div>
</template>

<script setup lang="ts">
// import PopupAsideFilterMobile from 'src/components/PopupAsideFilterMobile/PopupAsideFilterMobile.vue';
import AsideFilter from './components/AsideFilter/AsideFilter.vue';
import SortProductList from './components/SortProductList/SortProductList.vue';
import Pagination from 'src/components/Pagination/Pagination.vue';
import { ref, onMounted, watch } from 'vue';
import Product from './components/Product/Product.vue';
import { useProductStore } from 'src/stores/product.store';
import { useRoute } from 'vue-router';

// const showPopupAsideFilterMobile = ref(false);

// const showPopup = () => {
//   showPopupAsideFilterMobile.value = !showPopupAsideFilterMobile.value;
// };

const productStore = useProductStore();
const queryParams = ref({});
// const page = ref<number>(1);

// const setPage = (newPage: number) => {
//   page.value = newPage;
// };
const route = useRoute();
queryParams.value = route.query;

console.log(queryParams.value, 'vvvvvvvv');
// Watch for changes in queryParams and call getProducts when it changes
watch(
  //giá trị cần theo dõi
  () => route.query,
  //hàm được gọi khi giá trị thay đổi gồm giá trị mới và gía trị cũ
  (newQueryParams) => {
    queryParams.value = newQueryParams;
    productStore.getProducts(queryParams.value);
  }
  // options (tuỳ chọn, không bắt buộc)
  //  {
  //   deep: true, // theo dõi sâu vào các thuộc tính của đối tượng
  //   immediate: true, // gọi ngay lập tức handler khi đăng ký watch
  // }
);

onMounted(() => {
  // Initial fetch when the component is mounted
  productStore.getProducts(queryParams.value);
});
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  color: red;
}
</style>
