<template>
  <q-page class="q-px-lg q-py-xl">
    <div class="q-mx-md">
      <div class="text-h6">{{ $route.name }}</div>
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
          <q-tr :props="props">
            <q-td key="name" :props="props"> moms@gmail.com </q-td>

            <q-td key="calories" :props="props"> Moms Guy </q-td>

            <q-td key="fat" :props="props"> 08198568678 </q-td>

            <!-- <q-td key="carbs" :props="props"> Shoes </q-td> -->

            <q-td key="carbs" :props="props"> 2days ago </q-td>

            <q-td key="action" class="text-center">
              <q-btn
                icon="visibility"
                size="0.6rem"
                round
                flat
                color="primary"
                to="user_detail"
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
    label: "Email",
    align: "center",
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  {
    name: "calories",
    align: "center",
    label: "Name",
    field: "calories",
  },
  {
    name: "fat",
    label: "Phone",
    align: "center",
    field: "fat",
  },
  // { name: "carbs", label: "Last order", align: "center", field: "carbs" },
  { name: "carbs", label: "Active last", align: "center", field: "carbs" },
  { name: "action", label: "", align: "center", field: "carbs" },
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
