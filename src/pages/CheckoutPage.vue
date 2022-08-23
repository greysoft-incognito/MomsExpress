<template>
  <div class="big_screen_padding account_page">
    <q-splitter v-model="splitterModel" reverse class="bg-white q-pt-xl">
      <template v-slot:after>
        <div class="h3 q-px-xl">
          <div>
            <div
              class="bg-grey-1 text-black text-caption q-pb-md q-pt-xs q-px-sm"
            >
              <h5 class="text-left text-bold q-mb-sm">YOUR ORDER</h5>

              <div>
                <p class="text-subtitle1 q-px-sm text-bold">Product</p>
                <q-separator class="q-my-sm" />
                <div
                  v-for="n in 4"
                  :key="n"
                  class="row justify-between text-grey text-subtitle1 q-my-xs q-px-sm"
                >
                  <div>Lorem Item <span> x 1</span></div>
                  <span class="text-bold"> $1000</span>
                </div>
                <div class="row text-subtitle1 q-my-xs justify-between q-px-sm">
                  <span>Subtotal</span> <span class="text-bold"> $3000 </span>
                </div>
              </div>

              <div>
                <p class="text-subtitle1 q-px-sm q-mt-lg q-mb-sm text-bold">
                  Shipping
                </p>
                <div class="q-px-lg">
                  <q-option-group
                    v-model="group"
                    :options="options"
                    color="primary"
                  />
                </div>
              </div>

              <q-separator class="q-my-sm" />

              <div
                class="row text-subtitle1 text-bold q-my-xs justify-between q-px-sm"
              >
                <span>Total</span> <span class="text-bold"> $3000 </span>
              </div>

              <q-separator class="q-my-sm" />

              <div>
                <p class="text-subtitle1 q-px-sm q-mt-lg q-mb-sm text-bold">
                  Payment Method
                </p>
                <div class="q-px-lg">
                  <q-option-group
                    v-model="group"
                    :options="options"
                    color="primary"
                  />
                </div>
              </div>

              <q-btn
                label="Place Order"
                text-color="white"
                class="q-my-md bg-primary full-width"
              />
            </div>
          </div>
        </div>
      </template>

      <template v-slot:before>
        <CheckoutItem />
        <q-btn
          icon="chevron_left"
          label="Back to Cart"
          to="/cart"
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
import CheckoutItem from "src/components/Checkout/CheckoutItem.vue";

export default {
  setup() {
    return {
      tab: ref("orders"),
      splitterModel: ref(40),
      group: ref(""),

      options: [
        {
          label: "Option 1",
          value: "op1",
        },
        {
          label: "Option 2",
          value: "op2",
        },
        {
          label: "Option 3",
          value: "op3",
        },
      ],
    };
  },
  components: { CheckoutItem },
};
</script>

<style scoped>
.non_hover_btn:hover {
  color: grey !important;
}
</style>
