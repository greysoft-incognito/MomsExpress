<template>
  <div class="big_screen_padding account_page">
    <q-splitter v-model="splitterModel" reverse class="bg-white q-pt-xl">
      <template v-slot:after class="">
        <div class="h3 q-px-xl">
          <div>
            <div class="bg-grey-1 text-black text-caption q-py-md q-px-sm">
              <div class="text-h5 text-left text-bold q-mb-md">CART TOTALS</div>
              <div class="row justify-between text-subtitle1 q-my-xs q-px-sm">
                <span>No. of Items</span>
                <span class="text-bold"> 16</span>
              </div>
              <div class="row justify-between text-subtitle1 q-my-xs q-px-sm">
                <span>Subtotal</span>
                <span class="text-bold"> $1000</span>
              </div>
              <div class="row text-subtitle1 q-my-xs justify-between q-px-sm">
                <span>Shipping Fee</span> <span class="text-bold"> N0 </span>
              </div>
              <q-separator spaced />
              <div class="row text-subtitle1 q-my-xs justify-between q-px-sm">
                <span>Total Amount</span>
                <span class="text-bold"> $1000 </span>
              </div>
              <q-btn
                label="Proceed To Checkout"
                text-color="white"
                style="width: 100%"
                class="q-my-sm bg-primary"
                to="/checkout"
                icon-right="arrow_forward"
              />
              <div class="row text-subtitle1 justify-between q-px-sm">
                <span>Estimated Delivery Date</span> <br />
                <span class="text-bold">4th May 2022 </span>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-slot:before>
        <CartItem />
        <q-separator />
        <q-btn
          icon="chevron_left"
          label="Continue Shopping"
          to="/"
          class="q-mt-lg q-mb-xl bg-primary"
          text-color="white"
          flat
          no-caps
        />
      </template>
    </q-splitter>
  </div>
</template>

<script>
import { ref } from "vue";
import CartItem from "../components/Cart/CartItem.vue";

export default {
  setup() {
    return {
      tab: ref("orders"),
      splitterModel: ref(35),
    };
  },
  components: { CartItem },
};
</script>

<style scoped>
.non_hover_btn:hover {
  color: grey !important;
}
</style>
