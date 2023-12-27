<template>
  <Teleport to="body">
    <div class="overlay" @click.self="$emit('closePopup')">
      <Transition>
        <div class="popup">
          <div class="content">
            <AsideFilter />
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Teleport } from 'vue';
import AsideFilter from 'src/pages/ProductList/components/AsideFilter/AsideFilter.vue';

// const { showPopupAsideFilterMobile } = defineProps(['showPopupAsideFilterMobile']);
defineEmits(['closePopup']);
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
.overlay {
  position: absolute;
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
</style>
