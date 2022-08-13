<template>
  <q-page class="">
    <div class="text-h6 row items-center q-mb-md">
      <q-icon name="fa-solid fa-bookmark" color="grey" class="q-mr-sm" />
      <span>Orders </span>
    </div>
    <div class="q-pa-md">
      <q-table
        :pagination="pagination"
        :rows="rows"
        flat
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body="props">
          <q-tr :props="props" class="table_row">
            <q-td
              style="width: 20%"
              class="text-left"
              key="name"
              :props="props"
            >
              #2321
            </q-td>

            <q-td
              style="width: 20%"
              class="text-left"
              key="calories"
              :props="props"
            >
              August 20, 2021
            </q-td>

            <q-td style="width: 20%" class="text-left" key="fat" :props="props">
              Processing
            </q-td>

            <q-td
              style="width: 25%"
              class="text-left"
              key="carbs"
              :props="props"
            >
              <span>$150</span>
              for
              <span>1</span>
              item
            </q-td>

            <q-td
              style="width: 15%"
              class="text-center"
              key="carbs"
              :props="props"
            >
              <q-btn
                label="view"
                class="full-width"
                color="primary"
                no-caps
                outline
                dense
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: "name",
    required: true,
    label: "Order",
    align: "center",
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  {
    name: "calories",
    align: "center",
    label: "Date",
    field: "calories",
  },
  {
    name: "fat",
    label: "Status",
    align: "center",
    field: "fat",
  },
  { name: "carbs", label: "Total", align: "center", field: "carbs" },
  { name: "carbs", label: "Actions", align: "center", field: "carbs" },
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
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];

const pagination = {
  sortBy: "id",
  descending: "",
  rowsPerPage: "10",
};

export default {
  setup() {
    return {
      columns,
      rows,
      pagination,
    };
  },
};
</script>

<style scoped>
.table_row {
  height: 100px !important;
}

.table_row td {
  font-size: 1rem !important;
}
</style>
