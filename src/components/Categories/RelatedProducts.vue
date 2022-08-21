<template>
  <div class="row justify-between q-my-sm">
    <h6>Related Products</h6>
    <q-btn
      flat
      icon-right="chevron_right"
      class="non_hover_btn"
      no-caps
      size="0.8rem"
      label="More Products"
      :ripple="false"
    />
  </div>
  <q-separator class="q-my-md" />
  <div class="related_container">
    <SingleProductTile v-for="n in 3" :key="n" />
  </div>
</template>

<script>
import SingleProductTile from "../Product/SingleProductTile.vue";
export default { components: { SingleProductTile } };
</script>

<style scoped>
.related_container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
</style>
