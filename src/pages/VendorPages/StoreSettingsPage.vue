<template>
  <q-page class="q-px-lg q-py-md table_page">
    <div class="route_name">
      <div class="text-h6">{{ $route.name }}</div>
    </div>
    <div class="q-gutter-y-md full-width q-mt-md">
      <q-card style="border-radius: 15px" flat class="q-px-sm q-py-md">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="left"
          no-caps
        >
          <q-tab name="store" label="Store details" />
          <q-tab name="user" label="User details" />
          <q-tab name="bank" label="Bank Information" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="store">
            <StoreDetails />
          </q-tab-panel>

          <q-tab-panel name="user">
            <UserDetails />
          </q-tab-panel>

          <q-tab-panel name="bank">
            <BankDetails />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import StoreDetails from "src/components/Vendor/Settings/StoreDetails.vue";
import UserDetails from "src/components/Vendor/Settings/UserDetails.vue";
import BankDetails from "src/components/Vendor/Settings/BankDetails.vue";

export default {
  setup() {
    return {
      tab: ref("store"),
    };
  },
  components: { StoreDetails, UserDetails, BankDetails },
};
</script>
<style scoped>
@media screen and (max-width: 500px) {
  .table_page {
    padding: 2.5%;
  }
}

@media screen and (min-width: 1500px) {
  .table_page {
    padding: 2% 5%;
  }
}
</style>
