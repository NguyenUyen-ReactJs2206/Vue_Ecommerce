<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        class="overlay"
        v-if="showPopupAsideFilterMobile"
        :class="{ fade: showPopupAsideFilterMobile }"
        @click.self="$emit('closePopup')"
      >
        <div class="popup">
          <div class="content">
            <AsideFilter />
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Teleport } from 'vue';
import AsideFilter from 'src/pages/ProductList/components/AsideFilter/AsideFilter.vue';

const { showPopupAsideFilterMobile } = defineProps(['showPopupAsideFilterMobile']);
defineEmits(['closePopup']);
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(6, 6, 6, 0.5);

  display: flex;
  justify-content: start;
  align-items: center;
}

.popup {
  width: 80%;
  height: 100%;
  padding: 0.5rem 0.25px;
  background-color: rgb(237, 237, 237);
}

.content {
  padding: 30px 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
