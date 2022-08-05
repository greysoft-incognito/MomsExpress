<template>
  <q-btn
    dense
    icon="chevron_left"
    size="1.25rem"
    class="q-mr-sm non_hover_btn"
    flat
    @click="toggleLeftDrawer"
    color="primary"
    :to="routeTo"
  />
</template>

<script>
export default {
  props: ["routeTo"],
};
</script>
