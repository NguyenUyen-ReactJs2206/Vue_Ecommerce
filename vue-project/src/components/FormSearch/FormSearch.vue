<template>
  <div :class="className">
    <form action="">
      <div className="main-header__input-group">
        <input type="text" placeholder="Free Ship Đơn từ 0Đ" className="main-header__input" />
        <button className="button main-header__button">
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
type Props = {
  className: string;
};
const { className } = defineProps<Props>();
</script>
