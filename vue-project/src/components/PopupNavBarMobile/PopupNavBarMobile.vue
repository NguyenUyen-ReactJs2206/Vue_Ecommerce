<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        class="overlay"
        v-if="showPopupNavMobile"
        :class="{ fade: showPopupNavMobile }"
        @click.self="$emit('close-popup')"
      >
        <div class="popup-nav-mobile">
          <div class="popup-nav-mobile__content">
            <FormSearch
              :queryConfig="queryConfig"
              :handleClosePopupNavMobile="handleClosePopupNavMobile"
              :className="'main-header__form-search-mobile'"
            />
            <div class="popup-nav-mobile__aside-filter">
              <AsideFilter
                :handleClosePopupNavMobile="handleClosePopupNavMobile"
                :queryConfig="queryConfig"
                :categories="categoriesStore.categories || []"
              />
            </div>
          </div>

          <button class="popup-nav-mobile__button-close" @click="$emit('close-popup')">x</button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Teleport } from 'vue';
import FormSearch from '../FormSearch/FormSearch.vue';
import AsideFilter from 'src/pages/ProductList/components/AsideFilter/AsideFilter.vue';
import { useCategoriesStore } from 'src/stores/category.store';
import { QueryConfig } from 'src/pages/ProductList/ProductList.vue';

type Props = { showPopupNavMobile: boolean; handleClosePopupNavMobile: () => void; queryConfig: QueryConfig };

const { showPopupNavMobile, handleClosePopupNavMobile, queryConfig } = defineProps<Props>();
defineEmits(['close-popup']);

const categoriesStore = useCategoriesStore();
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

.popup-nav-mobile {
  width: 80%;
  height: 100%;
  padding: 0.5rem 0.25px;
  background-color: rgb(237, 237, 237);
  position: relative;
  overflow-y: auto;

  &__content {
    padding: 4rem 10px;
  }

  &__button-close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;

    font-size: x-large;
    background-color: var(--light);
    color: var(--primary);

    border: 1px solid rgb(219, 215, 215);
    border-radius: 4px;
    box-shadow: var(--shadow);

    &:hover {
      background-color: var(--primary);
      color: var(--light);
      transition: all 0.1s ease-in-out;
    }
  }

  &__aside-filter {
    margin: 2rem 0;
  }
}

@media screen and (max-width: 400px) {
  .popup-nav-mobile {
    width: 100%;
    height: 100%;
  }
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
