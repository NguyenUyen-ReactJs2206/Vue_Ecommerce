<template>
  <div class="pagination">
    <router-link
      :to="{
        name: 'main',
        query: { ...queryConfig, page: (page > 1 ? page - 1 : 1).toString() }
      }"
      class="pagination__prev"
      :disabled="page <= 1"
      :class="{ cursorNotAllowed: page <= 1 }"
      @click="prevPage"
    >
      Prev
    </router-link>
    <template v-for="pageNumber in renderPagination()" :key="pageNumber">
      <router-link
        :to="{
          name: 'main',
          query: { ...queryConfig, page: pageNumber.toString() }
        }"
        class="pagination__number"
        :class="{ active: pageNumber === page }"
        @click="handleClick(pageNumber)"
      >
        {{ pageNumber }}
      </router-link>
    </template>
    <router-link
      :to="{
        name: 'main',
        query: { ...queryConfig, page: (page < pageSize ? page + 1 : pageSize).toString() }
      }"
      class="pagination__next"
      :disabled="page >= pageSize"
      :class="{ cursorNotAllowed: page >= pageSize }"
      @click="nextPage"
    >
      Next
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { QueryConfig } from 'src/pages/ProductList/ProductList.vue';
import { ref } from 'vue';

interface Props {
  queryConfig: QueryConfig;
  pageSize: number;
}

const { pageSize, queryConfig } = defineProps<Props>();

console.log(pageSize, 'hhhhhhhhhhh');

const RANGE = 2;

const page = ref<number>(Number(queryConfig.page));

const setPage = (newPage: number) => {
  page.value = newPage;
};

const renderPagination = () => {
  let dotAfter = false;
  let dotBefore = false;
  const pagination = [];

  const renderDotBefore = () => {
    if (!dotBefore) {
      dotBefore = true;
      return pagination.push('...');
    }
    return null;
  };

  const renderDotAfter = () => {
    if (!dotAfter) {
      dotAfter = true;
      return pagination.push('...');
    }
    return null;
  };

  for (let index = 0; index < pageSize; index++) {
    const pageNumber = index + 1;

    if (page.value <= RANGE * 2 + 1 && pageNumber > page.value + RANGE && pageNumber < pageSize - RANGE + 1) {
      renderDotAfter();
    } else if (page.value > RANGE * 2 + 1 && page.value < pageSize - RANGE * 2) {
      if (pageNumber < page.value - RANGE && pageNumber > RANGE) {
        renderDotBefore();
      } else if (pageNumber > page.value + RANGE && pageNumber < pageSize - RANGE + 1) {
        renderDotAfter();
      } else {
        pagination.push(pageNumber);
      }
    } else if (page.value >= pageSize - RANGE * 2 && pageNumber > RANGE && pageNumber < page.value - RANGE) {
      renderDotBefore();
    } else {
      pagination.push(pageNumber);
    }
  }

  return pagination;
};

const handleClick = (pageNumber: number) => {
  setPage(pageNumber);
  console.log(pageNumber, '......');
};

const prevPage = () => {
  if (page.value > 1) {
    setPage(page.value - 1);
  }
};

const nextPage = () => {
  if (page.value < pageSize) {
    setPage(page.value + 1);
  }
};
</script>

<style scoped>
.active {
  border: 2px solid var(--primary);
}
.cursorNotAllowed {
  cursor: not-allowed;
}
</style>
