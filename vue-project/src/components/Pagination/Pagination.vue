<template>
  <div class="pagination">
    <button class="pagination__prev" :disabled="page <= 1" :class="{ cursorNotAllowed: page <= 1 }" @click="prevPage">
      Prev
    </button>

    <template v-for="pageNumber in renderPagination(pageSize)" :key="pageNumber">
      <button class="pagination__number" :class="{ active: pageNumber === page }" @click="handleClick(pageNumber)">
        {{ pageNumber }}
      </button>
    </template>

    <button
      class="pagination__next"
      :disabled="page >= pageSize"
      :class="{ cursorNotAllowed: page >= pageSize }"
      @click="nextPage()"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { QueryConfig } from 'src/pages/ProductList/ProductList.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface Props {
  queryConfig: QueryConfig;
  pageSize: number;
}

const { pageSize, queryConfig } = defineProps<Props>();
//push query params
const router = useRouter();
//get query params
const route = useRoute();

const RANGE = 2;

const page = ref<number>(Number(queryConfig.page) || 1);

const setPage = (newPage: number) => {
  page.value = newPage;
};

const category = ref<string>(queryConfig.category as string);

const renderPagination = (pageSizeNumber: number) => {
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

  for (let index = 0; index < pageSizeNumber; index++) {
    const pageNumber = index + 1;

    if (page.value <= RANGE * 2 + 1 && pageNumber > page.value + RANGE && pageNumber < pageSizeNumber - RANGE + 1) {
      renderDotAfter();
    } else if (page.value > RANGE * 2 + 1 && page.value < pageSizeNumber - RANGE * 2) {
      if (pageNumber < page.value - RANGE && pageNumber > RANGE) {
        renderDotBefore();
      } else if (pageNumber > page.value + RANGE && pageNumber < pageSizeNumber - RANGE + 1) {
        renderDotAfter();
      } else {
        pagination.push(pageNumber);
      }
    } else if (page.value >= pageSizeNumber - RANGE * 2 && pageNumber > RANGE && pageNumber < page.value - RANGE) {
      renderDotBefore();
    } else {
      pagination.push(pageNumber);
    }
  }

  return pagination;
};

watch(
  () => queryConfig,
  (newQueryConfig) => {
    page.value = Number(newQueryConfig.page) || 1;
  }
);

watch(
  () => route.query,
  (newQuery) => {
    page.value = Number(newQuery.page) || 1;
    category.value = newQuery.category as string;

    renderPagination(pageSize);
  }
);

watch(
  () => pageSize,
  (newPageSize) => {
    console.log('New pageSize:', newPageSize);

    renderPagination(newPageSize);
  }
);

watch(
  () => category.value,
  (newCategory) => {
    // Reset page to 1 when category changes
    setPage(1);

    // Update the URL
    router.push({
      query: {
        ...queryConfig,
        page: page.value.toString(),
        category: newCategory // Ensure category is present in the URL
      }
    });
  }
);

onMounted(() => {
  page.value = Number(route.query.page) || 1;
});

const handleClick = (pageNumber: number) => {
  setPage(pageNumber);
  router.push({
    name: 'main',
    query: {
      ...queryConfig,
      page: pageNumber.toString()
    }
  });
};

const prevPage = () => {
  if (page.value > 1) {
    setPage(page.value - 1);
    router.push({
      name: 'main',
      query: {
        ...queryConfig,
        page: page.value.toString()
      }
    });
  }
};

const nextPage = () => {
  console.log(page.value, 'pppppppppp');
  if (page.value < pageSize) {
    setPage(page.value + 1);

    router.push({
      name: 'main',
      query: {
        ...queryConfig,
        page: page.value.toString()
      }
    });
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
