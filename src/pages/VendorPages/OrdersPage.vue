<template>
  <q-page class="q-px-lg q-py-xl">
    <div class="text-h6">{{ $route.name }}</div>
    <div class="text-weight-thin">Lorem Store Name</div>
    <div class="q-pa-md">
      <q-table
        :grid="tableLayout"
        title="Treats"
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
            <q-td key="id" :props="props">
              {{ props.row.id }}
            </q-td>
            <q-td key="customer" :props="props">
              {{ props.row.customer }}
            </q-td>
            <q-td key="status" :props="props">{{ props.row.status }} </q-td>
            <q-td key="phone" :props="props">
              {{ props.row.phone }}
            </q-td>
            <q-td key="total" :props="props">{{ props.row.total }}</q-td>
            <q-td key="date" :props="props">{{ props.row.date }}</q-td>
            <q-td key="action" :props="props" style="width: 160px">
              <div class="row justify-center">
                <q-btn
                  color="grey"
                  round
                  class="q-mx-sm non_hover_btn"
                  flat
                  size="0.6rem"
                  icon="fas fa-eye"
                />
                <q-btn
                  color="grey"
                  round
                  class="q-mx-sm non_hover_btn"
                  flat
                  size="0.6rem"
                  icon="fas fa-print"
                />
              </div>
            </q-td>
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
    name: "id",
    required: true,
    label: "Order (#)",
    align: "center",
    style: "width: 50px; padding: 0 30px",
    field: (row) => row.id,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "customer",
    align: "center",
    label: "Customer",
    field: "customer",
  },
  {
    name: "status",
    label: "Status",
    align: "center",
    field: "status",
    sortable: true,
    style: "width: 20px",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  { name: "phone", label: "Phone", align: "center", field: "phone" },
  { name: "total", label: "Total", align: "center", field: "total" },
  { name: "date", label: "Date", align: "center", field: "date" },
  {
    name: "action",
    label: "",
    field: "action",
    align: "center",
  },
];

const rows = [
  {
    id: "Frozen Yogurt",
    customer: 159,
    status: 6.0,
    phone: 24,
    total: "1%",
    date: 4.0,
    action: 87,
  },
  {
    id: "Ice cream sandwich",
    customer: 237,
    status: 9.0,
    phone: 37,
    total: "1%",
    date: 4.3,
    action: 129,
  },
  {
    id: "Eclair",
    customer: 262,
    status: 16.0,
    phone: 23,
    total: "7%",
    date: 6.0,
    action: 337,
  },
  {
    id: "Cupcake",
    customer: 305,
    status: 3.7,
    phone: 67,
    total: "8%",
    date: 4.3,
    action: 413,
  },
  {
    id: "Gingerbread",
    customer: 356,
    status: 16.0,
    phone: 49,
    total: "16%",
    date: 3.9,
    action: 327,
  },
  {
    id: "Jelly bean",
    customer: 375,
    status: 0.0,
    phone: 94,
    total: "0%",
    date: 0.0,
    action: 50,
  },
  {
    id: "Lollipop",
    customer: 392,
    status: 0.2,
    phone: 98,
    total: "2%",
    date: 0,
    action: 38,
  },
  {
    id: "Honeycomb",
    customer: 408,
    status: 3.2,
    phone: 87,
    total: "45%",
    date: 6.5,
    action: 562,
  },
  {
    id: "Donut",
    customer: 452,
    status: 25.0,
    phone: 51,
    total: "22%",
    date: 4.9,
    action: 326,
  },
  {
    id: "KitKat",
    customer: 518,
    status: 26.0,
    phone: 65,
    total: "6%",
    date: 7,
    action: 54,
  },
];

const tableLayout = null;

const pagination = {
  sortBy: "id",
  descending: "",
  rowsPerPage: "10",
};

export default {
  setup() {
    return {
      columns,
      rows: ref(rows),
      filter: ref(""),
      tableLayout: ref(false),
      pagination,
    };
  },
  methods: {
    toggleLayout() {
      this.tableLayout = !this.tableLayout;
      console.log(this.tableLayout);
    },
  },
  mounted() {},
};
</script>
