<template>
  <div class="big_screen_padding account_page">
    <!-- For below Tablet devices -->
    <div class="account_mobile_page">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey q-py-md"
        active-color="primary"
        indicator-color="primary"
        align="left"
      >
        <q-tab
          class="text-capitalize"
          name="accountDetails"
          :ripple="false"
          label="Account Details"
        />
        <q-tab
          class="text-capitalize"
          name="addresses"
          :ripple="false"
          label="Addresses"
        />
        <q-tab
          class="text-capitalize"
          name="orders"
          :ripple="false"
          label="Orders"
        />
        <q-tab
          class="text-capitalize"
          name="wishlist"
          :ripple="false"
          label="Wishlist"
        />
        <!-- <q-tab
          @click="this.$router.push('/vendorOnboard')"
          :ripple="false"
          label="Become a Vendor"
        /> -->
      </q-tabs>

      <!-- <q-separator /> -->

      <q-tab-panels v-model="tab" animated>
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
    </div>

    <!-- For Tablets above  -->
    <q-splitter
      v-model="splitterModel"
      class="bg-white q-pt-lg account_splitter"
    >
      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          active-color="primary"
          no-caps
          class="text-grey account_tab non_hover_btn menu_bar"
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
          <q-tab
            @click="this.$router.push('/cart')"
            :ripple="false"
            label="Cart"
          />
          <q-separator />
          <q-tab
            @click="this.$router.push('/become_a_vendor')"
            :ripple="false"
            label="Become a Vendor"
          />
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
import AccountDetails from "components/Buyer/AccountComponents/AccountDetails.vue";
import Addresses from "components/Buyer/AccountComponents/Addresses.vue";
import Ordes from "components/Buyer/AccountComponents/Orders.vue";
import Wishlist from "components/Buyer/AccountComponents/Wishlist.vue";

export default {
  setup() {
    return {
      tab: ref("accountDetails"),
      splitterModel: ref(20),
    };
  },
  components: { Addresses, Ordes, Wishlist, AccountDetails },
};
</script>

<style scoped>
.non_hover_btn:hover {
  color: grey !important;
}

@media screen and (max-width: 770px) {
  .account_splitter {
    display: none;
  }
  .menu_bar {
    display: none !important;
  }
}
@media screen and (min-width: 770px) {
  .account_mobile_page {
    display: none;
  }
}
</style>
