<template>
  <div class="sort-product-list">
    <div class="sort-product-list__list">
      <div class="sort-product-list__title">Sắp xếp theo</div>
      <button class="sort-product-list__button">Phổ Biến</button>
      <button class="sort-product-list__button">Mới Nhất</button>
      <button class="sort-product-list__button">Bán Chạy</button>
      <select class="sort-product-list__select">
        <option class="sort-product-list__select-option">Giá</option>
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

<script setup></script>
