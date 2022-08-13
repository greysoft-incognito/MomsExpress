<template>
  <div class="big_screen_padding account_page">
    <q-splitter v-model="splitterModel" reverse class="bg-white q-pt-xl">
      <template v-slot:after>
        <div class="h3">Working here!!!</div>
      </template>

      <template v-slot:before>
        <Wishlist />
      </template>
    </q-splitter>
  </div>
</template>

<script>
import { ref } from "vue";
import Wishlist from "./BuyerPages/AccountPages/Wishlist.vue";

export default {
  setup() {
    return {
      tab: ref("orders"),
      splitterModel: ref(35),
    };
  },
  components: { Wishlist },
};
</script>

<style scoped>
.non_hover_btn:hover {
  color: grey !important;
}
</style>
