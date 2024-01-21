<template>
  <div class="sort-product-list">
    <div class="sort-product-list__list">
      <div class="sort-product-list__title">Sắp xếp theo</div>

      <button
        class="sort-product-list__button"
        :class="{ activeSortBy: isActiveSortBy(sortBy.view) }"
        @click="handleSort(sortBy.view)"
      >
        Phổ Biến
      </button>

      <button
        class="sort-product-list__button"
        :class="{ activeSortBy: isActiveSortBy(sortBy.createdAt) }"
        @click="handleSort(sortBy.createdAt)"
      >
        Mới Nhất
      </button>

      <button
        class="sort-product-list__button"
        :class="{ activeSortBy: isActiveSortBy(sortBy.sold) }"
        @click="handleSort(sortBy.sold)"
      >
        Bán Chạy
      </button>

      <select
        class="sort-product-list__select"
        :class="{ activeSortBy: isActiveSortBy(sortBy.price) }"
        @click="handleSort(sortBy.price)"
      >
        <option class="sort-product-list__select-option" disabled>Giá</option>
        <option class="sort-product-list__select-option">Giá: Thấp đến cao</option>
        <option class="sort-product-list__select-option">Giá: Cao đến thấp</option>
      </select>
    </div>
    <div class="sort-product-list__count-page">
      <div class="sort-product-list__page-indicator">
        <span class="sort-product-list__current-page">1</span>
        <span class="sort-product-list__separator">/</span>
        <span class="sort-product-list__total-pages">3</span>
      </div>
      <div class="sort-product-list__navigation">
        <div class="sort-product-list__next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="sort-product-list__icon"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
          </svg>
        </div>
        <div class="sort-product-list__prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="sort-product-list__icon"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sortBy } from 'src/constants/product';
import { QueryConfig } from '../../ProductList.vue';
import { ProductListConfig } from 'src/types/product.type';
import { useRoute, useRouter } from 'vue-router';
import { omit } from 'lodash';
import { ref, watch } from 'vue';

interface Props {
  queryConfig: QueryConfig;
  pageSize: number;
}

const { queryConfig } = defineProps<Props>();

const router = useRouter();
const route = useRoute();

// Sử dụng biến ref để theo dõi giá trị sort_by
const sort_by = ref(queryConfig.sort_by || sortBy.createdAt);

//chỉ lấy sort_by và Exclude undefine
const isActiveSortBy = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
  return sort_by.value === sortByValue;
};

watch(
  // Giá trị cần theo dõi
  () => route.query,
  // Hàm được gọi khi giá trị thay đổi gồm giá trị mới và giá trị cũ
  (newQuery) => {
    // Cập nhật giá trị sort_by từ query mới
    sort_by.value = (newQuery.sort_by as string) || sortBy.createdAt;
  }
);
const handleSort = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
  router.push({
    name: 'main',
    query: omit(
      {
        ...queryConfig,
        sort_by: sortByValue
      },
      ['order']
    )
  });
};
</script>
<style>
.activeSortBy {
  background-color: var(--primary);
  color: var(--light);
}
</style>
