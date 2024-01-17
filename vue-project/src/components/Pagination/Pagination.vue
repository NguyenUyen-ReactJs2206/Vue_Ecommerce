<template>
  <div class="pagination">
    <button class="pagination__prev">Prev</button>
    <!-- <div v-html="renderPagination()"></div> -->
    <button v-for="index in pageSize" :key="index" class="pagination__number">
      {{ index + 1 }}
    </button>
    <button class="pagination__next">Next</button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  page: number;
  pageSize: number;
}

const { page, pageSize } = defineProps<Props>();
// const renderPagination = () => {
//   let paginationHTML = '<div>';
//   for (let index = 0; index < pageSize; index++) {
//     paginationHTML += `
//           <button :key="index" class="pagination__next">
//            ${index + 1}
//           </button>
//         `;
//   }
//   paginationHTML += '</div>';
//   return paginationHTML;
// };
</script>
