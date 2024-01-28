<template>
  <div v-if="Object.keys(productStore.productDetail).length !== 0">
    <div class="product-detail">
      <div class="container">
        <div class="product-detail__content">
          <div class="product-detail__grid">
            <div class="product-detail__col-left">
              <div class="product-detail__image">
                <img :src="productStore.productDetail.image" :alt="productStore.productDetail.name" />
              </div>
              <div class="product-detail__thumbnail">
                <button class="product-detail__left-arrow" @click="handlePrev">
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

                <div class="product-detail__image-item" v-for="image in productStore.productDetail.images">
                  <img :src="image" :alt="productStore.productDetail.name" />
                </div>

                <button class="product-detail__right-arrow" @click="handleNext">
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
              <h1 class="product-detail__title">{{ productStore.productDetail.name }}</h1>

              <div class="product-detail__ratings-section">
                <div class="product-detail__ratings-section-item">
                  <span class="product-detail__ratings-section-rating">{{ productStore.productDetail.rating }}</span>
                  <ProductRating :rating="productStore.productDetail.rating" />
                </div>
                <div class="product-detail__ratings-section-divider"></div>
                <div>
                  <span class="product-detail__ratings-section-sold">{{
                    formatNumberToSocialStyle(productStore.productDetail.sold)
                  }}</span>
                  <span class="product-detail__ratings-section-sold-label">Đã bán</span>
                </div>
              </div>

              <div class="product-detail__price-wrapper">
                <div class="product-detail__price-before">
                  ₫{{ formatCurrency(productStore.productDetail.price_before_discount) }}
                </div>
                <div class="product-detail__price-current">₫{{ formatCurrency(productStore.productDetail.price) }}</div>
                <div class="product-detail__discount-badge">
                  {{ rateSale(productStore.productDetail.price_before_discount, productStore.productDetail.price) }}
                  giảm
                </div>
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
                <div class="product-detail__quantity-available">
                  {{ productStore.productDetail.quantity }} sản phẩm có sẵn
                </div>
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
                        <line
                          fill="none"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          x1="9"
                          x2="9"
                          y1="8.5"
                          y2="5.5"
                        />
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
              <div v-html="description"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-detail__related-product-list">
        <div class="container">
          <div class="product-detail__related-product-title">Có thể bạn cũng thích</div>
          <div class="product-detail__related-product-grid">
            <div
              class="product-detail__related-product-item"
              v-if="productStore.productList.products"
              v-for="product in productStore.productList.products"
              :key="product._id"
            >
              <Product :product="product" />
            </div>
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
  </div>
</template>

<script setup lang="ts">
import ProductRating from 'src/components/ProductRating/ProductRating.vue';
import { useProductStore } from 'src/stores/product.store';
import { onMounted, ref, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { getIdFromNameId, formatNumberToSocialStyle, formatCurrency, rateSale } from 'src/utils/utils';
import DOMPurify from 'dompurify';
import Product from 'src/pages/ProductList/components/Product/Product.vue';

const route = useRoute();
const id = route.params.nameId;

const description = ref('');

const productStore = useProductStore();

const nameId = getIdFromNameId(id as string);

// Khi productDetail thay đổi, cập nhật description
watchEffect(() => {
  if (productStore.productDetail) {
    description.value = DOMPurify.sanitize(productStore.productDetail.description);
  }
});

// Khi route params thay đổi, cập nhật sản phẩm
watch(
  () => route.params.nameId,
  (newId) => {
    if (newId) {
      productStore.getProductDetail(getIdFromNameId(newId as string));
    }
  }
);

// Lấy chi tiết sản phẩm khi component được mount
onMounted(async () => {
  await productStore.getProductDetail(nameId as string);

  await productStore.getProducts(productStore.queryConfig);
});

console.log(productStore.productList.products, 'product list related');

const handlePrev = () => {};

const handleNext = () => {};
</script>
