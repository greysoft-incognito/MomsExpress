<template>
  <div class="q-px-md q-py-lg">
    <div class="q-mt-lg">
      <div class="q-my-xs text-subtitle2 text-bold">Store Name:</div>
      <q-input
        class="full-width"
        v-model="user.store_name"
        placeholder="Store name"
        outlined
        dense
      />
    </div>

    <div class="q-mt-lg">
      <div class="q-my-xs text-subtitle2 text-bold">Store Phone Number:</div>
      <q-input
        class="full-width"
        v-model="user.phone_number"
        placeholder="Store phone number"
        outlined
        dense
      />
    </div>

    <div class="q-mt-lg">
      <div class="q-my-xs text-subtitle2 text-bold">Address:</div>
      <q-input
        class="full-width"
        v-model="user.address"
        placeholder="Store address"
        outlined
        dense
      />
    </div>

    <div class="q-mt-lg">
      <div class="q-my-xs text-subtitle2 text-bold">
        Registration Number (CAC):
      </div>
      <q-input
        class="full-width"
        placeholder="Business registration number"
        outlined
        dense
        v-model="regNum"
      />
    </div>

    <div class="q-mt-lg">
      <div class="q-my-xs text-subtitle2 text-bold">Description:</div>
      <q-input
        class="full-width"
        type="textarea"
        placeholder="Description"
        outlined
        dense
        v-model="description"
      />
    </div>

    <div class="q-mt-lg row">
      <q-btn
        label="Save details "
        class="bordered-btn"
        color="primary"
        no-caps
        size="1rem"
      />
      <q-space />
      <q-btn
        label="Delete Store"
        class="bordered-btn"
        color="red"
        icon="delete"
        no-caps
        size="1rem"
        @click="confirm = true"
      />
    </div>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-ml-sm"
            >Are you sure you want to delete your store?</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Proceed" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "",
      regNum: "",
      confirm: false,
    };
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("vendorDetails"));
    },
  },
};
</script>

<style scoped>
.shop_banner {
  height: 250px;
  border-radius: 15px;
}
</style>
