# Vue_Ecommerce

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
// if (window.innerWidth < 768) {
// isVisible.value = false;
// } else {
// isVisible.value = true;
// }
// });

// // Chạy logic ban đầu
// if (window.innerWidth >= 768) {
// isVisible.value = true;
// }
