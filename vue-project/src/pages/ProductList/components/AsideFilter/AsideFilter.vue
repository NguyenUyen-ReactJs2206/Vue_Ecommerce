<template>
  <div class="asideFilter">
    <div class="asideFilter__category">
      <router-link
        :to="`${path.home}`"
        class="asideFilter__link asideFilter__link--flex"
        :class="{ activeCategory: !category }"
      >
        <svg viewBox="0 0 12 10" class="asideFilter__icon" :class="{ activeCategoryIcon: !category }">
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
          <div
            class="asideFilter__category-link"
            :class="{ activeCategory: category === categoryItem._id }"
            @click="handleClickCategory(categoryItem)"
          >
            <svg viewBox="0 0 4 7" v-if="category === categoryItem._id" class="asideFilter__category-svg">
              <polygon points="4 3.5 0 0 0 7"></polygon>
            </svg>
            {{ categoryItem.name }}
          </div>
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
      <form action="" @submit.prevent="handleApplyPrice">
        <div class="asideFilter__price-form-input">
          <input type="number" placeholder="₫ TỪ" class="asideFilter__price-input" v-model="formPrice.price_min" />
          <div class="asideFilter__price-divider">-</div>
          <input type="number" placeholder="₫ ĐẾN" class="asideFilter__price-input" v-model="formPrice.price_max" />
        </div>

        <div class="error-text opacity-none" :class="{ 'opacity-block': priceError.status }">
          *{{ priceError.messageError }}
        </div>

        <button class="button asideFilter__apply-button" type="submit">Áp dụng</button>
      </form>
    </div>

    <div className="asideFilter__line" />

    <div class="asideFilter__rating-start">
      <div class="asideFilter__rating-title">Đánh giá</div>
      <RatingStart :queryConfig="queryConfig" />
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
import { useRoute, useRouter } from 'vue-router';

interface Props {
  queryConfig: QueryConfig;
  categories: Category[];
}
type FormDataPrice = {
  price_min: string | number;
  price_max: string | number;
};

const { queryConfig, categories } = defineProps<Props>();

const category = ref(queryConfig.category as string);

const route = useRoute();
const router = useRouter();

//filter theo khoản giá
const formPrice = ref<FormDataPrice>({
  price_min: '',
  price_max: ''
});
const priceError = ref({ messageError: '', status: false });

watch(
  () => route.query,
  (newQuery) => {
    category.value = newQuery.category as string;
    formPrice.value.price_max = newQuery.price_max as string | number;
    formPrice.value.price_min = newQuery.price_min as string | number;
  }
);

const handleClickCategory = (categoryItem: Category) => {
  router.push({
    name: 'main',
    query: { ...queryConfig, category: categoryItem._id }
  });
};

const handleApplyPrice = () => {
  let isValid = false;

  if (formPrice.value.price_min === '' && formPrice.value.price_max === '') {
    priceError.value = {
      messageError: 'Vui lòng nhập khoản giá',
      status: true
    };
  } else if (formPrice.value.price_min !== '' && formPrice.value.price_max !== '') {
    const minPrice = parseInt(formPrice.value.price_min as string);
    const maxPrice = parseInt(formPrice.value.price_max as string);

    if (minPrice <= maxPrice || formPrice.value.price_min <= formPrice.value.price_max) {
      isValid = true;
    } else {
      priceError.value = {
        messageError: 'Giá không phù hợp',
        status: true
      };
    }
  } else {
    priceError.value = {
      messageError: '',
      status: false
    };
    isValid = true;
  }

  if (isValid) {
    console.log(formPrice.value.price_min, formPrice.value.price_max);
    priceError.value = {
      messageError: '',
      status: false
    };
    router.push({
      name: 'main',
      query: {
        ...queryConfig,
        price_min: formPrice.value.price_min.toString(),
        price_max: formPrice.value.price_max.toString()
      }
    });
  }
};
</script>

<style scoped>
.activeCategory {
  color: #ee4d2d;
  font-weight: 700;
}
.activeCategoryIcon {
  fill: #ee4d2d;
}

.error-text {
  color: var(--error);
  padding-bottom: 4px;
  font-size: smaller;
}

.opacity-none {
  opacity: 0;
}
.opacity-block {
  opacity: 1;
}
</style>
