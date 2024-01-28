<template>
  <router-link :to="`${generateNameId({ name: product.name, id: product._id })}`" class="product">
    <div class="product__container">
      <div class="product__image-container">
        <img :src="product.image" :alt="product.name" class="product__image" />
      </div>
      <div class="product__info">
        <div class="product__name">
          {{ product.name }}
        </div>
        <div class="product__prices">
          <div class="product__price">
            <span class="product__currency">₫</span>
            <span class="product__value">{{ formatCurrency(product.price_before_discount) }}</span>
          </div>
          <div class="product__price">
            <span class="product__currency">₫</span>
            <span class="product__value">{{ formatCurrency(product.price) }}</span>
          </div>
        </div>
        <div class="product__additional-info">
          <ProductRating class="product__rating" :rating="product.rating" />
          <div class="product__sold-info">
            <span class="product__sold-count">{{ formatNumberToSocialStyle(product.quantity) }}</span>
            <span class="product__sold-text">Đã bán</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import ProductRating from '../../../../components/ProductRating/ProductRating.vue';
import { Product } from 'src/types/product.type';
import { formatCurrency, formatNumberToSocialStyle, generateNameId } from 'src/utils/utils';

type ProductProps = {
  product: Product;
};
const { product } = defineProps<ProductProps>();
</script>
