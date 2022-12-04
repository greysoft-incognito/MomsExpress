<template>
  <q-page class="">
    <!-- <div class="text-h6 row items-center q-mb-md">
      <q-icon name="favorite" color="grey" class="q-mr-sm" />
      <span>Cart </span>
      {{rows}}
    </div> -->
    <!-- {{ this.$store.cart.meals }} -->
    <!-- {{ this.$store.cart.meals }} -->
    {{ rows }}
    <div v-if="rows.length" class="q-pa-md">
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
                <q-img
                  :src="`https://moon.5pays.store/${props.row.uploads[0].url}`"
                />
                <!-- {{ props.row.uploads[0].src }} -->
                <q-btn
                  @click="this.$store.cart.removeFromCart(props.row.id)"
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
              {{ props.row.name }}
            </q-td>

            <q-td class="text-center" key="fat" :props="props">
              ${{ props.row.price }}
            </q-td>

            <q-td class="text-center" key="carbs" :props="props">
              <div
                class="quantity_box row text-center items-center justify-center"
              >
                <q-btn
                  round
                  @click="this.$store.cart.remove(props.row.id)"
                  size="0.65rem"
                  icon="remove"
                  flat
                  class="bg-grey-3"
                  text-color="black"
                />
                <q-input
                  v-model="props.row.stock"
                  class="text-center"
                  outlined
                  dense
                />
                <q-btn
                  @click="this.$store.cart.add(props.row.id)"
                  round
                  size="0.65rem"
                  icon="add"
                  flat
                  class="bg-grey-3"
                  text-color="black"
                />
              </div>
            </q-td>

            <q-td class="text-center" key="carbs" :props="props">
              ${{ parseInt(props.row.price) * parseInt(props.row.stock) }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

    <div v-else class="noLength text-h3 text-center q-py-lg">
      You no not have any item in your cart
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

// const rows = [
//   {
//     id: 1,
//     img: "Images/2-1.jpg",
//     name: "Jollof Rice",
//     price: 700,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     img: "Images/2-1.jpg",
//     name: "Jollof Rice",
//     price: 700,
//     quantity: 1,
//   },
//   {
//     id: 3,
//     img: "Images/2-1.jpg",
//     name: "Jollof Rice",
//     price: 700,
//     quantity: 1,
//   },
// ];

const pagination = {
  sortBy: "id",
  descending: "",
  rowsPerPage: "10",
};

export default {
  setup() {
    return {
      columns,
      pagination,
    };
  },
  data() {
    return {
      rows: this.$store.cart.plate,
    };
  },

  computed: {
    getSubtotal(quantity, price) {
      console.log(quantity, price);
    },
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
