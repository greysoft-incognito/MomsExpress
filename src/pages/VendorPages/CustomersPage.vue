<template>
  <q-page class="q-px-lg q-py-md table_page">
    <div class="route_name">
      <div class="text-h6">{{ $route.name }}</div>
    </div>
    <div class="q-mt-md">
      <q-table
        :grid="tableLayout"
        :filter="filter"
        :rows="rows"
        :columns="columns"
        row-key="id"
        :pagination="pagination"
        flat
      >
        <template v-slot:top-right>
          <q-input
            borderless
            dense
            debounce="300"
            v-model="filter"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn
            flat
            class="text-subtitle2 q-mx-md"
            no-caps
            :label="tableLayout ? 'Row' : 'Grid'"
            :icon="tableLayout ? 'fas fa-grip-lines' : 'fa-solid fa-border-all'"
            color="primary"
            @click="toggleLayout"
          />
        </template>
        <template v-slot:body="props">
          <q-tr class="q-pl-md" :props="props">
            <q-td key="index" class="text-center" :props="props">
              {{ props.row.index }}
            </q-td>
            <q-td key="date" :props="props"> 1/08/2022 </q-td>
            <q-td key="customer" style="width: 20%" :props="props"
              >tobiikupolati@gmail.com
            </q-td>
            <q-td key="order" class="order" style="width: 20%" :props="props">
              Bag, shoe, face, cap(2)
            </q-td>
            <q-td key="status" style="width: 10%" :props="props">
              <q-badge color="green"> successful </q-badge></q-td
            >
            <q-td key="amount" :props="props">$10,000</q-td>
            <q-td key="payment" :props="props"> Paystack </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

const columns = [
  {
    name: "index",
    label: "#",
    field: "index",
  },
  {
    name: "date",
    align: "center",
    label: "Date",
    field: "date",
  },
  {
    name: "customer",
    label: "Customer",
    align: "center",
    field: "customer",
    // sortable: true,
    style: "width: 20px",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  { name: "order", label: "Order", align: "center", field: "order" },
  { name: "amount", label: "Amount", align: "center", field: "amount" },
];

const rows = [];

const tableLayout = null;

const pagination = {
  sortBy: "id",
  descending: "",
  rowsPerPage: "10",
};

export default {
  data() {
    return {
      rows,
      columns,
      filter: ref(""),
      pagination,
      tableLayout: ref(false),
    };
  },
  methods: {
    toggleLayout() {
      this.tableLayout = !this.tableLayout;
    },
    getOrders() {
      this.$api
        .get(`orders/all`)
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
@media screen and (max-width: 500px) {
  .table_page {
    padding: 2.5%;
  }
  .order {
    width: 30% !important;
  }
}

@media screen and (min-width: 1500px) {
  .table_page {
    padding: 2% 5%;
  }
}

.q-table--no-wrap th,
.q-table--no-wrap td {
  white-space: nowrap !important;
}
</style>
