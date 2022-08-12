<template>
  <div class="column q-mb-md text-center border_card">
    <q-img class="border_card" src="Images/2-1.jpg" />
    <div class="text-subtitle1 q-mt-sm">Cooking Pot</div>
    <div class="row justify-center q-my-sm">
      <q-rating
        v-model="ratingModel"
        size="1.2rem"
        color="grey"
        readonly
        :color-selected="ratingColors"
      />
      <span>( 2 reviews)</span>
    </div>
    <div class="text-bold">$53.00</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      ratingModel: ref(4),
      ratingColors: ["green"],
    };
  },
};
</script>

<style scoped></style>
