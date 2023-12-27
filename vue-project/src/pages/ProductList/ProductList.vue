<template>
  <div class="product-list">
    <div class="container">
      <div class="product-list__main">
        <div class="product-list__main-left">
          <AsideFilter v-if="isVisible" />

          <button v-if="!isVisible" @click="onShowPopup">SHOW POPUP</button>
        </div>
        <div class="product-list__main-right">
          <SortProductList />
        </div>
      </div>
    </div>

    <Transition>
      <PopupAsideFilterMobile v-if="showPopupAsideFilterMobile" @closePopup="onClosePopup" />
    </Transition>
  </div>
</template>

<script setup>
import PopupAsideFilterMobile from 'src/components/PopupAsideFilterMobile/PopupAsideFilterMobile.vue';
import AsideFilter from './components/AsideFilter/AsideFilter.vue';
import SortProductList from './components/SortProductList/SortProductList.vue';
import { Teleport, ref, onMounted, onBeforeUnmount, watchEffect } from 'vue';

const isVisible = ref(false);
const showPopupAsideFilterMobile = ref(false);

const onShowPopup = () => {
  showPopupAsideFilterMobile.value = !showPopupAsideFilterMobile.value;
};

const updateVisibility = () => {
  isVisible.value = window.innerWidth >= 768;
};

// Logic được chạy khi component được mounted lần đầu tiên.
onMounted(() => {
  updateVisibility();
  window.addEventListener('resize', updateVisibility);
});

// Logic được chạy trước khi component được unmounted để remove event listener.
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateVisibility);
});

// sẽ tự động thực hiện logic mỗi khi dependencies của nó thay đổi, trong trường hợp này, nó liên quan đến isVisible.value. Nếu isVisible.value trở thành false, showPopupAsideFilterMobile.value sẽ được set là false.
watchEffect(() => {
  if (!isVisible.value) {
    showPopupAsideFilterMobile.value = false;
  }
});

// window.addEventListener('resize', () => {
//   if (window.innerWidth < 768) {
//     isVisible.value = false;
//   } else {
//     isVisible.value = true;
//   }
// });

// // Chạy logic ban đầu
// if (window.innerWidth >= 768) {
//   isVisible.value = true;
// }

const onClosePopup = () => {
  showPopupAsideFilterMobile.value = false;
};
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

h2 {
  text-align: center;
  color: red;
}
</style>
