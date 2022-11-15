<template>
  <q-page class="q-px-lg table_page q-py-md">
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
        class="q-py-sm my-sticky-column-table"
      >
        <!-- <template v-slot:top-right>
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
        </template> -->
        <template v-slot:body="props">
          <q-tr class="q-pl-md" :props="props">
            <q-td key="index" class="text-center" :props="props">
              {{ props.row.order_number }}
            </q-td>
            <q-td key="customer" :props="props">
              {{ props.row.product_name }}</q-td
            >
            <q-td key="phone" :props="props">
              {{ props.row.product_quantity }}
            </q-td>
            <q-td
              key="status"
              :props="props"
              class="text-bold"
              :class="props.row.is_paid == true ? `text-green` : `text-red`"
              >{{ props.row.is_paid == true ? `Paid` : `Unsettled` }}</q-td
            >
            <q-td class="total" key="total" :props="props">{{
              props.row.product_amount
            }}</q-td>
            <q-td
              key="date"
              class="text-orange text-bold"
              :class="
                props.row.delivery === 'pending' ? `text-orange` : `text-green`
              "
              :props="props"
              >{{ props.row.delivery }}</q-td
            >

            <!-- <q-td key="action" :props="props" style="width: 10%">
              <div class="row justify-center">
                <q-btn
                  color="grey"
                  round
                  class="q-mx-sm non_hover_btn"
                  flat
                  size="0.6rem"
                  icon="fas fa-eye"
                />
              </div>
            </q-td> -->
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
    label: "Order No.",
    field: "index",
    align: "center",
  },
  {
    name: "customer",
    align: "center",
    label: "Item",
    field: "customer",
  },
  { name: "phone", label: "Quantity", align: "center", field: "phone" },
  { name: "date", label: "Payment", align: "center", field: "date" },
  { name: "total", label: "Total(₦)", align: "center", field: "total" },
  {
    name: "status",
    label: "Delivery",
    align: "center",
    field: "status",
    // sortable: true,
    style: "width: 20px",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
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
      columns,
      rows,
      filter: ref(""),
      tableLayout: ref(false),
      pagination,
    };
  },
  methods: {
    getOrders() {
      this.$api
        .get(`orders/all`)
        .then((resp) => {
          // console.log(resp.data);
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
    // console.log(this.$store.auth.token);
  },
};
</script>

<style scoped>
/* .my-sticky-column-table thead tr:first-child th:first-child {
  background-color: #fff;
}

.my-sticky-column-table td:first-child {
  background-color: white;
}

theadtr:first-child,
td:first-child {
  position: sticky !important;
  left: 0;
  z-index: 1;
} */

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
.q-table--no-wrap th,
.q-table--no-wrap td {
  white-space: nowrap !important;
}
</style>
