<template>
  <q-page class="q-px-lg q-py-xl">
    <div class="text-h6">{{ $route.name }}</div>
    <div class="text-weight-thin">Lorem Store Name</div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardPage",
});
</script>
