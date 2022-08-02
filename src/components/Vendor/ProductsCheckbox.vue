<template>
  <q-checkbox key="check" v-model="val" />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const val = false;
    return {
      val: ref(val),
    };
  },
};
</script>
