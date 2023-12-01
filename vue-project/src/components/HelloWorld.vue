<!-- Cach 1: -->
<script setup lang="ts">
import { defineProps } from 'vue';

interface HelloWorldProps {
  msg: string;
}

const { msg } = defineProps<HelloWorldProps>();
</script>

<!-- <script lang="ts">
import { ref } from 'vue';

interface HelloWorldProps {
  msg: string;
}

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props: HelloWorldProps) {
    const count = ref(0);

    return {
      msg: props.msg,
      count
    };
  }
};
</script> -->

<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
