<template>
  <div class="q-pa-md">
    <div class="q-py-md row">
      <q-space />
      <q-btn
        label="Save changes"
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
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
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
