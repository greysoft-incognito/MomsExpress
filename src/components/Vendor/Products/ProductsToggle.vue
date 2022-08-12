<template>
  <q-toggle
    :label="toggle"
    color="green"
    dense
    size="1.7rem"
    :class="toggle === 'Disabled' ? 'text-grey' : 'text-green'"
    false-value="Disabled"
    true-value="Enabled"
    v-model="toggle"
  />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const toggle = ref("Enabled");
    return {
      toggle,
    };
  },
};
</script>
