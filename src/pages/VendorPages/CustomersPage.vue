<template>
  <q-page class="q-px-lg q-py-xl">
    <div class="text-h6">{{ $route.name }}</div>
    <div class="text-weight-thin">Lorem Store Name</div>
    <div class="q-pa-md">
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
            <q-td key="order" class="text-" style="width: 20%" :props="props">
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

const rows = [
  {
    id: "Frozen Yogurt",
    date: 6.0,
    customer: 159,
    order: 24,
    status: "1%",
    amount: 4.0,
    payment: 87,
  },
  {
    id: "Ice cream sandwich",
    date: 9.0,
    customer: 237,
    order: 37,
    status: "1%",
    amount: 4.3,
    payment: 129,
  },
  {
    id: "Eclair",
    date: 16.0,
    customer: 262,
    order: 23,
    status: "7%",
    amount: 6.0,
    payment: 337,
  },
  {
    id: "Cupcake",
    date: 3.7,
    customer: 305,
    order: 67,
    status: "8%",
    amount: 4.3,
    payment: 413,
  },
  {
    id: "Gingerbread",
    date: 16.0,
    customer: 356,
    order: 49,
    status: "16%",
    amount: 3.9,
    payment: 327,
  },
  {
    id: "Jelly bean",
    date: 0.0,
    customer: 375,
    order: 94,
    status: "0%",
    amount: 0.0,
    payment: 50,
  },
  {
    id: "Lollipop",
    date: 0.2,
    customer: 392,
    order: 98,
    status: "2%",
    amount: 0,
    payment: 38,
  },
  {
    id: "Honeycomb",
    date: 3.2,
    customer: 408,
    order: 87,
    status: "45%",
    amount: 6.5,
    payment: 562,
  },
  {
    id: "Donut",
    date: 25.0,
    customer: 452,
    order: 51,
    status: "22%",
    amount: 4.9,
    payment: 326,
  },
  {
    id: "KitKat",
    date: 26.0,
    customer: 518,
    order: 65,
    status: "6%",
    amount: 7,
    payment: 54,
  },
];

const tableLayout = null;

const pagination = {
  sortBy: "id",
  descending: "",
  rowsPerPage: "10",
};

rows.forEach((row, index) => {
  row.index = index + 1;
});

export default {
  setup() {
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
  },
  mounted() {},
};
</script>
