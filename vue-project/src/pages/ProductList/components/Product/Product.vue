<template>
  <router-link to="/product-detail" class="product">
    <div class="product__container">
      <div class="product__image-container">
        <img
          src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/05/1486135181-avatar.jpg?crop=0.564xw:1.00xh;0.436xw,0&resize=1200:*"
          alt=""
          class="product__image"
        />
      </div>
      <div class="product__info">
        <div class="product__name">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quo, veniam voluptas, nemo tempore similique
          dolorum at aut ipsa consequuntur architecto obcaecati! Laborum explicabo aspernatur non. Necessitatibus velit
          illum ipsam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus soluta dicta tenetur
          tempora quis voluptate dignissimos itaque? Dolore iusto fuga fugiat enim mollitia magnam hic excepturi dolores
          cupiditate quaerat?
        </div>
        <div class="product__prices">
          <div class="product__price">
            <span class="product__currency">₫</span>
            <span class="product__value">100000</span>
          </div>
          <div class="product__price">
            <span class="product__currency">₫</span>
            <span class="product__value">90000</span>
          </div>
        </div>
        <div class="product__additional-info">
          <ProductRating class="product__rating" />
          <div class="product__sold-info">
            <span class="product__sold-count">16,5k</span>
            <span class="product__sold-text">Đã bán</span>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import ProductRating from 'src/components/ProductRating/ProductRating.vue';
</script>
