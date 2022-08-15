<template>
  <q-page class="">
    <!-- <div class="text-h6 row items-center q-mb-md">
      <q-icon name="favorite" color="grey" class="q-mr-sm" />
      <span>Cart </span>
    </div> -->
    <div class="q-pa-md">
      <q-table
        :pagination="pagination"
        :rows="rows"
        flat
        :columns="columns"
        row-key="name"
        hide-bottom
      >
        <template v-slot:body="props">
          <q-tr :props="props" no-hover class="table_row">
            <q-td class="text-left" key="name" :props="props">
              <div class="relative-position">
                <q-img src="Images/2-1.jpg" />
                <q-btn
                  icon="close"
                  round
                  size="0.5rem"
                  flat
                  text-color="primary"
                  class="remove_product_btn bg-white"
                />
              </div>
            </q-td>

            <q-td class="text-left" key="calories" :props="props">
              Cooking Pot
            </q-td>

            <q-td class="text-center" key="fat" :props="props"> $85 </q-td>

            <q-td class="text-center" key="carbs" :props="props">
              <div
                class="quantity_box row text-center items-center justify-center"
              >
                <q-btn
                  round
                  size="0.65rem"
                  icon="remove"
                  flat
                  class="bg-grey-3"
                  text-color="black"
                />
                <q-input class="text-center" outlined dense />
                <q-btn
                  round
                  size="0.65rem"
                  icon="add"
                  flat
                  class="bg-grey-3"
                  text-color="black"
                />
              </div>
            </q-td>

            <q-td class="text-center" key="carbs" :props="props"> $85 </q-td>
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
    label: "Product",
    align: "center",
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  {
    name: "calories",
    align: "center",
    label: "",
    field: "calories",
  },
  {
    name: "fat",
    label: "Price",
    align: "center",
    field: "fat",
  },
  { name: "carbs", label: "Quantity", align: "center", field: "carbs" },
  { name: "carbs", label: "Subtotal", align: "center", field: "carbs" },
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
  height: 160px !important;
}

.table_row td {
  font-size: 1rem !important;
}
.remove_product_btn {
  position: absolute;
  top: 0;
  right: 2%;
}
.quantity_box {
  /* border: 1px solid grey; */
  /* width: 50%; */
  gap: 5px;
}
.quantity_box .q-input {
  width: 20% !important;
}
</style>
