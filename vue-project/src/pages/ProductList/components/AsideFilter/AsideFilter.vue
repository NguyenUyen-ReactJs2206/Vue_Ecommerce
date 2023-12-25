<template>
  <div class="asideFilter">
    <div class="asideFilter__all-category">
      <router-link :to="`${path.home}`">
        <svg viewBox="0 0 12 10" className="mr-3 h-4 w-3 fill-current">
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
      <ul>
        <li>Đồng hồ</li>
        <li>Áo thun</li>
        <li>Điện thoại</li>
      </ul>
    </div>

    <div class="asideFilter__search-filter">
      <router-link :to="`${path.home}`">
        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0">
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
      <div>Khoản giá</div>
      <form action="">
        <div class="input-group">
          <input type="number" placeholder="₫ TỪ" />
          <div>-</div>
          <input type="number" placeholder="₫ ĐẾN" />
        </div>
        <button>Áp dụng</button>
      </form>
    </div>

    <div className="asideFilter__line" />

    <div class="asideFilter__rating-start">
      <div>Đánh giá</div>
      <RatingStart />
    </div>

    <div className="asideFilter__line" />

    <button>Xóa tất cả</button>
  </div>
</template>

<script setup>
import path from 'src/constants/path';
import RatingStart from '../RatingStart/RatingStart.vue';
</script>
