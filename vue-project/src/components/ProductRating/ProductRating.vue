<template>
  <div class="product-rating__list">
    <div v-for="index in 5" :key="index" class="product-rating__item">
      <div
        class="product-rating__star absolute left-0 top-0 h-full overflow-hidden"
        :style="{ width: handleWidth(index + 1) }"
      >
        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="activeClassname">
          <polygon
            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
          ></polygon>
        </svg>
      </div>
      <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="nonActiveClassname">
        <polygon
          points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
        ></polygon>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['rating']);

const handleWidth = (order: number) => {
  if (order <= props.rating) {
    return '100%';
  }
  if (order > props.rating && order - props.rating < 1) {
    return (props.rating - Math.floor(props.rating)) * 100 + '%';
  }
  return '0%';
};
</script>

<style lang="scss">
.product-rating {
  &__list {
    display: flex;
    align-items: center;
  }

  &__item {
    position: relative;
  }

  &__star {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
  }
}

.activeClassname {
  height: 0.75rem;
  width: 0.75rem;
  fill: #fde047;
}
.nonActiveClassname {
  fill: currentColor;
  height: 0.75rem;
  width: 0.75rem;
  color: rgb(209 213 219);
}
</style>
