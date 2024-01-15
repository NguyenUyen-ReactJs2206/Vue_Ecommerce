<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const queryParams = ref<Record<string, string | number>>({});

onMounted(() => {
  const route = useRoute();
  queryParams.value = route.query as Record<string, string>;
});
</script>
