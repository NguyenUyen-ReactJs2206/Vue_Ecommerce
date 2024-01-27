<template>
  <div class="product-detail">
    <div class="container">
      <div class="product-detail__content">
        <div class="product-detail__grid">
          <div class="product-detail__col-left">
            <div class="product-detail__image">
              <img src="https://api-ecom.duthanhduoc.com/images/3ecf878d-6742-43d4-abe7-044c15c84120.jpg" alt="" />
            </div>
            <div class="product-detail__thumbnail">
              <button class="product-detail__left-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                </svg>
              </button>

              <div class="product-detail__image-item">
                <img src="https://api-ecom.duthanhduoc.com/images/3ecf878d-6742-43d4-abe7-044c15c84120.jpg" alt="" />
              </div>
              <div class="product-detail__image-item">
                <img src="https://api-ecom.duthanhduoc.com/images/3ecf878d-6742-43d4-abe7-044c15c84120.jpg" alt="" />
              </div>
              <div class="product-detail__image-item">
                <img src="https://api-ecom.duthanhduoc.com/images/3ecf878d-6742-43d4-abe7-044c15c84120.jpg" alt="" />
              </div>
              <div class="product-detail__image-item">
                <img src="https://api-ecom.duthanhduoc.com/images/3ecf878d-6742-43d4-abe7-044c15c84120.jpg" alt="" />
              </div>
              <div class="product-detail__image-item">
                <img src="https://api-ecom.duthanhduoc.com/images/3ecf878d-6742-43d4-abe7-044c15c84120.jpg" alt="" />
              </div>

              <button class="product-detail__right-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="product-detail__col-right">
            <h1 class="product-detail__title">ĐIỆN THOẠI VSMART ACTIVE 3 6GB/64GB - HÀNG CHÍNH HÃNG</h1>

            <div class="product-detail__ratings-section">
              <div class="product-detail__ratings-section-item">
                <span class="product-detail__ratings-section-rating">4.6</span>
                <ProductRating :rating="4.6" />
              </div>
              <div class="product-detail__ratings-section-divider"></div>
              <div>
                <span class="product-detail__ratings-section-sold">1,2k</span>
                <span class="product-detail__ratings-section-sold-label">Đã bán</span>
              </div>
            </div>

            <div class="product-detail__price-wrapper">
              <div class="product-detail__price-before">₫1112</div>
              <div class="product-detail__price-current">₫1111</div>
              <div class="product-detail__discount-badge">20% giảm</div>
            </div>

            <div class="product-detail__quantity">
              <div class="product-detail__quantity-label">Số lượng</div>
              <div class="product-detail__quantity-buttons">
                <button class="product-detail__quantity-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="product-detail__quantity-icon"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                  </svg>
                </button>

                <input class="product-detail__quantity-input" :value="1" />

                <button class="product-detail__quantity-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="product-detail__quantity-icon"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
              <div class="product-detail__quantity-available">333 sản phẩm có sẵn</div>
            </div>

            <div class="product-detail__cart-desktop">
              <div class="product-detail__cart-buttons">
                <button class="product-detail__cart-add-product">
                  <svg
                    enable-background="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x="0"
                    y="0"
                    class="product-detail__cart-icon"
                  >
                    <g>
                      <g>
                        <polyline
                          fill="none"
                          points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                        />
                        <circle cx="6" cy="13.5" r="1" stroke="none" />
                        <circle cx="11.5" cy="13.5" r="1" stroke="none" />
                      </g>
                      <line
                        fill="none"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        x1="7.5"
                        x2="10.5"
                        y1="7"
                        y2="7"
                      />
                      <line fill="none" stroke-linecap="round" stroke-miterlimit="10" x1="9" x2="9" y1="8.5" y2="5.5" />
                    </g>
                  </svg>
                  Thêm vào giỏ hàng
                </button>
                <button class="product-detail__cart-buy-now">Mua ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="product-detail__product-description">
      <div class="container">
        <div class="product-detail__product-description-wrapper">
          <div class="product-detail__product-description-title">Mô tả sản phẩm</div>
          <div class="product-detail__product-description-information">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab, unde laudantium omnis quia aperiam
              suscipit animi in, cupiditate tempora harum placeat porro totam facilis quis esse tenetur rerum accusamus.
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, in consequuntur pariatur beatae numquam,
              eum voluptates modi sapiente distinctio architecto eveniet itaque voluptatibus, minus velit sint debitis
              id et commodi.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, atque, at, laudantium harum facilis
              perspiciatis aperiam ullam quisquam voluptas asperiores exercitationem voluptates accusamus doloremque
              eos. Eligendi quaerat enim dolores laboriosam?
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="product-detail__related-product-list">
      <div class="container">
        <div class="product-detail__related-product-title">Có thể bạn cũng thích</div>
        <div class="product-detail__related-product-grid">
          <div class="product-detail__related-product-item">Product</div>
          <div class="product-detail__related-product-item">Product</div>
          <div class="product-detail__related-product-item">Product</div>
          <div class="product-detail__related-product-item">Product</div>
        </div>
      </div>
    </div>

    <div class="product-detail__cart-mobile">
      <div class="product-detail__cart-buttons-mobile">
        <button class="product-detail__cart-add-product-mobile">
          <svg
            enable-background="new 0 0 15 15"
            viewBox="0 0 15 15"
            x="0"
            y="0"
            class="product-detail__cart-icon-mobile"
          >
            <g>
              <g>
                <polyline
                  fill="none"
                  points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                />
                <circle cx="6" cy="13.5" r="1" stroke="none" />
                <circle cx="11.5" cy="13.5" r="1" stroke="none" />
              </g>
              <line fill="none" stroke-linecap="round" stroke-miterlimit="10" x1="7.5" x2="10.5" y1="7" y2="7" />
              <line fill="none" stroke-linecap="round" stroke-miterlimit="10" x1="9" x2="9" y1="8.5" y2="5.5" />
            </g>
          </svg>
          Thêm vào giỏ hàng
        </button>
        <button class="product-detail__cart-buy-now-mobile">Mua ngay</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductRating from 'src/components/ProductRating/ProductRating.vue';
</script>
