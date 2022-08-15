<template>
  <h5 class="text-uppercase text-bold q-py-sm q-mb-xs">Billing Details</h5>

  <form action="">
    <div class="double_input">
      <div class="q-my-sm">
        <label class="text-grey">First name</label>
        <q-input outlined placeholder="John" />
      </div>

      <div class="q-my-sm">
        <label class="text-grey"> Last name</label>
        <q-input class="full-width" placeholder="Doe" outlined />
      </div>
    </div>

    <div class="q-my-sm">
      <label class="text-grey"> Company name (Optional)</label>
      <q-input class="full-width" outlined />
    </div>

    <div class="q-my-sm">
      <label class="text-grey"> Country/Region</label>
      <q-select outlined v-model="model" :options="options" />
    </div>

    <div class="q-my-sm">
      <label class="text-grey"> Street Address</label>
      <q-input class="full-width q-my-sm" outlined />
      <q-input class="full-width q-my-sm" outlined />
    </div>

    <div class="double_input">
      <div class="q-my-sm">
        <label class="text-grey">Town/City</label>
        <q-input outlined />
      </div>

      <div class="q-my-sm">
        <label class="text-grey"> State</label>
        <q-input class="full-width" outlined />
      </div>
    </div>

    <div class="double_input">
      <div class="q-my-sm">
        <label class="text-grey">Zip</label>
        <q-input outlined />
      </div>

      <div class="q-my-sm">
        <label class="text-grey"> Phone</label>
        <q-input class="full-width" outlined />
      </div>
    </div>

    <div class="q-my-sm">
      <label class="text-grey">Email Address </label>
      <q-input outlined />
    </div>

    <div class="q-my-sm">
      <label class="text-grey">Order Notes (Optional) </label>
      <q-input
        outlined
        type="textarea"
        placeholder="Notes about your order, e.g special notes  for delivery"
      />
    </div>
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      model: ref(null),
      options: ["Nigeria", "South Africa", "Ghana", "Niger", "Mali"],
    };
  },
};
</script>
<style scoped>
.double_input {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
</style>
