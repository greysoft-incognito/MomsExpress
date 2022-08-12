<template>
  <div class="products">
    <SingleProductTile v-for="n in 10" :key="n" />
  </div>
</template>

<script>
import { ref } from "vue";
import SingleProductTile from "src/components/Product/SingleProductTile.vue";

export default {
  setup() {
    return {
      ratingModel: ref(4),
      ratingColors: ["green"],
    };
  },
  components: { SingleProductTile },
};
</script>

<style scoped></style>
