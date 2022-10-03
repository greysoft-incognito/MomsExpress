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
              {{ props.row.order_number }}
            </q-td>

            <q-td
              style="width: 20%"
              class="text-left"
              key="calories"
              :props="props"
            >
              {{ props.row.created_at }}
            </q-td>

            <q-td style="width: 20%" class="text-left" key="fat" :props="props">
              {{ props.row.status }}
            </q-td>

            <q-td
              style="width: 25%"
              class="text-left"
              key="carbs"
              :props="props"
            >
              <span>N{{ props.row.amount }}</span>
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
    label: "Time",
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

const pagination = {
  sortBy: "id",
  descending: "",
  rowsPerPage: "10",
};

export default {
  data() {
    return {
      columns,
      rows: [],
      pagination,
    };
  },
  methods: {
    getOrders() {
      this.$api
        .get(`orders/user/all`)
        .then((resp) => {
          console.log(resp.data);
          this.rows = resp.data.data;
        })
        .catch((response) => {
          this.$q.notify({
            message: response.data.message,
            color: "red",
            position: "top",
          });
          this.errors = response.data.errors;
        });
    },
  },
  created() {
    this.getOrders();
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
