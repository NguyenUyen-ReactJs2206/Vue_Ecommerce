<template>
  <div class="asideFilter">
    <div class="asideFilter__category">
      <router-link :to="`${path.home}`" class="asideFilter__link asideFilter__link--flex">
        <svg viewBox="0 0 12 10" class="asideFilter__icon">
          <g fillRule="evenodd" stroke="none" strokeWidth="1">
            <g transform="translate(-373 -208)">
              <g transform="translate(155 191)">
                <g transform="translate(218 17)">
                  <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"></path>
                  <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"></path>
                  <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        Tất cả danh mục
      </router-link>
      <div className="asideFilter__line" />
      <ul class="asideFilter__category-list">
        <li v-for="categoryItem in categories" :key="categoryItem._id" class="asideFilter__category-item">
          <RouterLink
            :to="{
              name: 'main',
              query: {
                ...queryConfig,
                category: categoryItem._id
              }
            }"
            class="asideFilter__category-link"
            :class="{ activeCategory: category === categoryItem._id }"
          >
            <svg viewBox="0 0 4 7" v-if="category === categoryItem._id" class="asideFilter__category-svg">
              <polygon points="4 3.5 0 0 0 7"></polygon>
            </svg>
            {{ categoryItem.name }}</RouterLink
          >
        </li>
      </ul>
    </div>

    <div class="asideFilter__search-filter">
      <router-link :to="`${path.home}`" class="asideFilter__link asideFilter__link--flex asideFilter__link--uppercase">
        <svg
          class="asideFilter__icon asideFilter__icon--current-color"
          enable-background="new 0 0 15 15"
          viewBox="0 0 15 15"
          x="0"
          y="0"
        >
          <g>
            <polyline
              fill="none"
              points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
            ></polyline>
          </g>
        </svg>
        Bộ lọc tìm kiếm
      </router-link>
      <div className="asideFilter__line" />
      <div class="asideFilter__price-range">Khoản giá</div>
      <form action="">
        <div class="asideFilter__price-form-input">
          <input type="number" placeholder="₫ TỪ" class="asideFilter__price-input" />
          <div class="asideFilter__price-divider">-</div>
          <input type="number" placeholder="₫ ĐẾN" class="asideFilter__price-input" />
        </div>

        <button class="button asideFilter__apply-button">Áp dụng</button>
      </form>
    </div>

    <div className="asideFilter__line" />

    <div class="asideFilter__rating-start">
      <div class="asideFilter__rating-title">Đánh giá</div>
      <RatingStart />
    </div>

    <div className="asideFilter__line" />
    <button class="button asideFilter__reset-button">Xóa tất cả</button>
  </div>
</template>

<script setup lang="ts">
import path from 'src/constants/path';
import RatingStart from '../RatingStart/RatingStart.vue';
import { QueryConfig } from '../../ProductList.vue';
import { Category } from 'src/types/category.type';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

interface Props {
  queryConfig: QueryConfig;
  categories: Category[];
}

const { queryConfig, categories } = defineProps<Props>();

const category = ref(queryConfig.category as string);
console.log(categories, 'c1', category, 'c2');
const route = useRoute();

watch(
  () => route.query,
  (newQuery) => {
    category.value = newQuery.category as string;
  }
);
</script>

<style scoped>
.activeCategory {
  color: #ee4d2d;
  font-weight: 700;
}
</style>
