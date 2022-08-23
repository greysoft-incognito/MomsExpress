<template>
  <div class="q-pa-md">
    <div class="q-py-md row">
      <q-space />
      <q-btn
        label="New Bank"
        class="bordered-btn"
        icon="add"
        color="primary"
        no-caps
        @click="alert = true"
      />
    </div>

    <q-table
      hide-bottom
      flat
      separator="none"
      :rows="rows"
      :columns="columns"
      row-key="name"
      class="bank_table"
    />

    <q-dialog v-model="alert">
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-subtitle1 text-primary">New Bank</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div>
            <div class="q-mt-md">
              <div class="q-my-xs text-subtitle2 text-bold">Bank Name</div>
              <q-input
                class="input_field"
                placeholder="shop name"
                outlined
                dense
              />
            </div>

            <div class="q-mt-lg">
              <div class="q-my-xs text-subtitle2 text-bold">Account Number</div>
              <q-input
                class="input_field"
                placeholder="shop name"
                outlined
                dense
              />
            </div>

            <div class="q-mt-lg">
              <div class="q-my-xs text-subtitle2 text-bold">Account Name</div>
              <q-input
                class="input_field"
                placeholder="shop name"
                outlined
                dense
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            no-caps
            label="Add  Account"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
const columns = [
  {
    name: "name",
    required: true,
    label: "Bank",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  {
    name: "calories",
    align: "center",
    align: "left",
    label: "Account Number",
    field: "calories",
  },
  {
    name: "fat",
    align: "left",
    label: "Account Name",
    field: "fat",
  },
];

const rows = [
  {
    name: " First Bank",
    calories: 101265459,
    fat: "Lorem person Dude",
  },
  {
    name: "First Bank",
    calories: 201265437,
    fat: "Lorem person Dude",
  },
  {
    name: "First Bank",
    calories: 201265462,
    fat: "Lorem person Dude",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
      alert: ref(false),
    };
  },
};
</script>

<style scoped>
.bank_table .q-table--no-wrap th,
.bank_table .q-table--no-wrap td {
  white-space: nowrap !important;
}
</style>
