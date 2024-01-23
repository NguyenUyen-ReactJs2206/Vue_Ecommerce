<template>
  <ul class="rating-stars">
    <li v-for="(_, index) in Array(5).fill(0)" :key="index" class="rating-stars__list">
      <div
        @click="handleFilterStar(5 - index)"
        class="rating-stars__item--pointer rating-stars__item--flex rating-stars__item"
        tabindex="0"
        role="button"
        aria-hidden="true"
      >
        <template v-for="(_, indexStar) in Array(5).fill(0)" :key="indexStar">
          <template v-if="indexStar < 5 - index">
            <svg viewBox="0 0 9.5 8" class="rating-stars__filled-star">
              <defs>
                <linearGradient id="ratingStarGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                  <stop offset="0" stop-color="#ffca11"></stop>
                  <stop offset="1" stop-color="#ffad27"></stop>
                </linearGradient>
                <polygon
                  id="ratingStar"
                  points="14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903"
                ></polygon>
              </defs>
              <g fill="url(#ratingStarGradient)" fill-rule="evenodd" stroke="none" stroke-width="1">
                <g transform="translate(-876 -1270)">
                  <g transform="translate(155 992)">
                    <g transform="translate(600 29)">
                      <g transform="translate(10 239)">
                        <g transform="translate(101 10)">
                          <use stroke="#ffa727" stroke-width=".5" xlink:href="#ratingStar"></use>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </template>
          <template v-else>
            <svg viewBox="0 0 30 30" class="rating-stars__hollow-star">
              <defs>
                <linearGradient id="star__hollow" x1="50%" x2="50%" y1="0%" y2="99.0177926%">
                  <stop offset="0%" stop-color="#FFD211" />
                  <stop offset="100%" stop-color="#FFAD27" />
                </linearGradient>
              </defs>
              <path
                fill="none"
                fill-rule="evenodd"
                :stroke="'url(#star__hollow)'"
                stroke-width="2"
                d="M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z"
              />
            </svg>
          </template>
        </template>
        <span v-if="index !== 0" class="rating-starts__upvote">Trở lên</span>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { QueryConfig } from '../../ProductList.vue';

type Props = {
  queryConfig: QueryConfig;
};
const { queryConfig } = defineProps<Props>();

const router = useRouter();
// Define methods
const handleFilterStar = (ratingFilter: number) => {
  console.log(`Filter stars for rating: ${ratingFilter}`);
  router.push({
    name: 'main',
    query: { ...queryConfig, rating_filter: String(ratingFilter) }
  });
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
