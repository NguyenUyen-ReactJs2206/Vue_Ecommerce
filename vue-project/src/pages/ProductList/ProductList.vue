<template>
  <div class="product-list">
    <div class="container">
      <div v-if="productStore.productList.products" class="product-list__main">
        <div class="product-list__main-left">
          <AsideFilter :queryConfig="queryConfig" :categories="categoriesStore.categories || []" />
        </div>
        <div class="product-list__main-right">
          <SortProductList :queryConfig="queryConfig" :pageSize="productStore.pageSize" />

          <div class="product-list__products">
            <div v-for="product in productStore.productList.products" :key="product._id" class="product-list__item">
              <Product :product="product" />
            </div>
          </div>

          <Pagination :queryConfig="queryConfig" :pageSize="productStore.pageSize" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AsideFilter from './components/AsideFilter/AsideFilter.vue';
import SortProductList from './components/SortProductList/SortProductList.vue';
import Pagination from 'src/components/Pagination/Pagination.vue';
import { ref, onMounted, watch } from 'vue';
import Product from './components/Product/Product.vue';
import { useProductStore } from 'src/stores/product.store';
import { useCategoriesStore } from 'src/stores/category.store';
import { useRoute } from 'vue-router';
import { ProductListConfig } from 'src/types/product.type';
import omitBy from 'lodash/omitBy';
import isUndefined from 'lodash/isUndefined';

export type QueryConfig = {
  [key in keyof ProductListConfig]: string;
};

const productStore = useProductStore();
const categoriesStore = useCategoriesStore();

const route = useRoute();
const queryParams = ref<QueryConfig>({});

const queryConfig: QueryConfig = omitBy(
  {
    page: queryParams.value.page || '1',
    limit: queryParams.value.limit || '10',
    sort_by: queryParams.value.sort_by,
    exclude: queryParams.value.exclude,
    name: queryParams.value.name,
    order: queryParams.value.order,
    price_max: queryParams.value.price_max,
    price_min: queryParams.value.price_min,
    rating_filter: queryParams.value.rating_filter,
    category: queryParams.value.category
  },
  isUndefined
);
queryParams.value = route.query;

const updateQueryConfig = () => {
  queryParams.value = route.query;

  queryConfig.page = queryParams.value.page || '1';
  queryConfig.limit = queryParams.value.limit || '10';
  queryConfig.sort_by = queryParams.value.sort_by;
  queryConfig.exclude = queryParams.value.exclude;
  queryConfig.name = queryParams.value.name;
  queryConfig.order = queryParams.value.order;
  queryConfig.price_max = queryParams.value.price_max;
  queryConfig.price_min = queryParams.value.price_min;
  queryConfig.rating_filter = queryParams.value.rating_filter;
  queryConfig.category = queryParams.value.category;
};

console.log(queryConfig, 'vvvvvvvv');
// Watch for changes in queryParams and call getProducts when it changes
watch(
  //giá trị cần theo dõi
  () => route.query,
  //hàm được gọi khi giá trị thay đổi gồm giá trị mới và gía trị cũ
  () => {
    updateQueryConfig();
    productStore.getProducts(queryConfig);
  }
  // options (tuỳ chọn, không bắt buộc)
  //  {
  //   deep: true, // theo dõi sâu vào các thuộc tính của đối tượng
  //   immediate: true, // gọi ngay lập tức handler khi đăng ký watch
  // }
);

onMounted(async () => {
  // Initial fetch when the component is mounted
  updateQueryConfig();
  await productStore.getProducts(queryConfig);

  await categoriesStore.getCategories();
});
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  color: red;
}
</style>
