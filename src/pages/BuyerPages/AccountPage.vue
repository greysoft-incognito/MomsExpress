<template>
  <div class="big_screen_padding account_page">
    <q-splitter v-model="splitterModel" class="bg-white q-pt-xl">
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          active-color="primary"
          no-caps
          class="text-grey account_tab non_hover_btn"
        >
          <q-tab
            name="accountDetails"
            :ripple="false"
            label="Account Details"
          />
          <q-separator />
          <q-tab name="addresses" :ripple="false" label="Addresses" />
          <q-separator />
          <q-tab name="orders" :ripple="false" label="Orders" />
          <q-separator />
          <q-tab name="wishlist" :ripple="false" label="Wishlist" />
          <q-separator />
          <q-tab @click="this.$router.push('/')" :ripple="false" label="Cart" />
          <q-separator />
          <q-tab
            @click="this.$router.push('/')"
            :ripple="false"
            label="Logout"
          />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          class="q-px-md"
        >
          <q-tab-panel name="accountDetails">
            <AccountDetails />
          </q-tab-panel>

          <q-tab-panel name="addresses">
            <Addresses />
          </q-tab-panel>

          <q-tab-panel name="orders">
            <Ordes />
          </q-tab-panel>

          <q-tab-panel name="wishlist">
            <Wishlist />
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import { ref } from "vue";
import AccountDetails from "./AccountPages/AccountDetails.vue";
import Addresses from "./AccountPages/Addresses.vue";
import Ordes from "./AccountPages/Orders.vue";
import Wishlist from "./AccountPages/Wishlist.vue";

export default {
  setup() {
    return {
      tab: ref("orders"),
      splitterModel: ref(20),
    };
  },
  components: { AccountDetails, Addresses, Ordes, Wishlist },
};
</script>

<style scoped>
.non_hover_btn:hover {
  color: grey !important;
}
</style>
