<template>
  <div :class="className">
    <form action="" @submit.prevent="onSubmitSearch">
      <div className="main-header__input-group">
        <input type="text" placeholder="Free Ship Đơn từ 0Đ" className="main-header__input" v-model="searchInput" />
        <button className="button main-header__button" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="main-header__icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { omit } from 'lodash';
import { ProductListConfig } from 'src/types/product.type';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

type Props = {
  className: string;
  handleClosePopupNavMobile: () => void;
  queryConfig: QueryConfig;
};

type QueryConfig = {
  [key in keyof ProductListConfig]: string;
};
const { className, handleClosePopupNavMobile, queryConfig } = defineProps<Props>();

const searchInput = ref('');
const inputStatus = ref(false);
//Function Search
const router = useRouter();

const onSubmitSearch = () => {
  if (searchInput.value.trim() === '') {
    inputStatus.value === true;
  } else {
    const config = queryConfig.order
      ? omit(
          {
            ...queryConfig,
            name: searchInput.value
          },
          ['order', 'sort_by']
        )
      : {
          ...queryConfig,
          name: searchInput.value
        };

    router.push({
      name: 'main',
      query: config
    });

    handleClosePopupNavMobile();
  }
};
</script>
