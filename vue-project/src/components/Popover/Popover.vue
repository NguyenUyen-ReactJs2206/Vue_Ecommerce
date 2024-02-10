<template>
  <div :class="className" ref="reference" @mouseenter="showPopover" @mouseleave="handleMouseLeave">
    <slot name="main" />

    <Teleport to="body">
      <transition name="fade">
        <div
          v-if="isOpenPopover"
          :class="{ fade: isOpenPopover }"
          @mouseenter="cancelHidePopover"
          @mouseleave="hidePopover"
        >
          <div
            ref="floating"
            :style="{
              position: strategy,
              top: y + 'px',
              left: x + 'px',
              width: 'max-content',
              transformOrigin: `${middlewareData.arrow?.x}px top`
            }"
          >
            <span
              ref="arrowRef"
              class="main-header__popover-triangle"
              :style="{
                left: middlewareData.arrow?.x + 'px',
                top: middlewareData.arrow?.y + 'px'
              }"
            ></span>
            <!-- <div v-html="renderedContent"></div> -->
            <slot name="renderPopover" />
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFloating, arrow, shift, offset } from '@floating-ui/vue';

interface Props {
  className: string;
}

const { className } = defineProps<Props>();

const reference = ref(null);
const floating = ref(null);
const isOpenPopover = ref<boolean>(false);
const arrowRef = ref<HTMLElement | null>(null);

const { x, y, strategy, middlewareData } = useFloating(reference, floating, {
  middleware: [
    offset(12),
    shift(),

    arrow({
      element: arrowRef
    })
  ]
});

const showPopover = () => {
  isOpenPopover.value = true;
};
const hidePopover = () => {
  isOpenPopover.value = false;
};
const cancelHidePopover = () => {
  clearTimeout(hidePopoverTimeout);
};

let hidePopoverTimeout: number | undefined | any;

const handleMouseLeave = (event: MouseEvent | any) => {
  // Kiểm tra xem target liên quan có nằm trong phần tử cha không
  if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) {
    // Đặt một độ trễ trước khi ẩn popover để có thời gian cho chuột vào popover
    hidePopoverTimeout = setTimeout(() => {
      isOpenPopover.value = false;
    }, 100);
  }
};

// const renderedContent = computed(() => {
//   return renderPopover;
// });
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
