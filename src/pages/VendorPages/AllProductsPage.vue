<template>
  <q-page class="q-px-lg q-py-xl">
    <div class="q-px-md">
      <div class="text-h6">{{ $route.name }}</div>
      <div class="text-weight-thin">Lorem Store Name</div>
    </div>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        flat
        :rows="records"
        :columns="columns"
        row-key="name"
        class="q-pt-md"
      >
        <template v-slot:top-left>
          <q-btn
            class="text-subtitle2 q-mx-md"
            no-caps
            label="New Product"
            icon="add"
            to="new_product"
            color="primary"
          />
        </template>

        <template v-slot:top-right>
          <q-btn
            class="text-subtitle2 q-mx-md"
            no-caps
            label="Delete"
            icon="delete"
            color="red"
            disable
          />
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="check" class="text-center">
              <ProductsCheckbox />
            </q-td>
            <q-td key="calories" style="width: 135px">
              <img class="image" :src="props.row.calories" />
            </q-td>
            <q-td key="name">
              <div class="text-h6 text-bold">
                {{ props.row.name }}
              </div>
              <div class="q-my-xs">
                <span class="q-ml-xs text-bold">0</span>
                <span class="text-weight-light q-my-auto q-ml-sm">
                  In Stock</span
                >
              </div>
              <div class="q-my-xs">
                <ProductsToggle />
              </div>
            </q-td>
            <q-td class="text-bold" key="fat">
              <div class="text-subtitle1 text-weight-light">
                ${{ props.row.fat * 1000 }}
              </div>
            </q-td>
            <q-td class="text-center" key="fat">
              <div class="text-h6 text-subtitle1 text-weight-light">
                Lorem Category
              </div>
            </q-td>
            <q-td class="text-right" style="width: 135px" key="carbs">
              <!-- {{ props.row.carbs }} -->
              <q-btn
                flat
                icon="chevron_right"
                size="1.8rem"
                to="vendor/product_detail"
                class="non_hover_btn"
                color="grey"
                :ripple="false"
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref, computed } from "vue";
import ProductsCheckbox from "src/components/Vendor/Products/ProductsCheckbox.vue";
import ProductsToggle from "src/components/Vendor/Products/ProductsToggle.vue";

const columns = [
  {
    name: "check",
    label: "",
    align: "left",
  },
  {
    name: "name",
    required: true,
    label: "Product",
    style: "width: 10px",
    align: "left",
    field: (row) => row.name,
    // format: (val) => `${val}`,
  },
  {
    name: "calories",
    align: "center",
    label: "",
    field: "calories",
  },
  {
    name: "name",
    required: true,
    label: "Price",
    style: "width: 10px",
    align: "left",
    field: (row) => row.name,
    // format: (val) => `${val}`,
  },
  {
    name: "fat",
    align: "center",
    label: "Category",
    field: "fat",
  },
  { name: "carbs", align: "center", label: "", field: "carbs" },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: "https://cdn.quasar.dev/img/parallax2.jpg",
    fat: 6.0,
    carbs: 24,
  },
  {
    name: "Ice cream sandwich",
    calories: "https://cdn.quasar.dev/img/parallax2.jpg",
    fat: 9.0,
    carbs: 37,
  },
  {
    name: "Eclair",
    calories: "https://cdn.quasar.dev/img/parallax2.jpg",
    fat: 16.0,
    carbs: 23,
  },
  {
    name: "Cupcake",
    calories: "https://cdn.quasar.dev/img/parallax2.jpg",
    fat: 3.7,
    carbs: 67,
  },
  {
    name: "Gingerbread",
    calories: "https://cdn.quasar.dev/img/parallax2.jpg",
    fat: 16.0,
    carbs: 49,
  },
  {
    name: "Jelly bean",
    calories: "https://cdn.quasar.dev/img/parallax2.jpg",
    fat: 0.0,
    carbs: 94,
  },
  {
    name: "Lollipop",
    calories: "https://cdn.quasar.dev/img/parallax2.jpg",
    fat: 0.2,
    carbs: 98,
  },
  {
    name: "Honeycomb",
    calories: "https://cdn.quasar.dev/img/parallax2.jpg",
    fat: 3.2,
    carbs: 87,
  },
  {
    name: "Donut",
    calories: "https://cdn.quasar.dev/img/parallax2.jpg",
    fat: 25.0,
    carbs: 51,
  },
  {
    name: "KitKat",
    calories: "https://cdn.quasar.dev/img/parallax2.jpg",
    fat: 26.0,
    carbs: 65,
  },
];

export default {
  setup() {
    const hasData = ref(true);
    return {
      hasData,
      selected: ref([rows[1]]),
      columns,
      records: computed(() => (hasData.value === true ? rows : [])),
    };
  },
  components: { ProductsCheckbox, ProductsToggle },
};
</script>

<style scoped>
.image {
  height: 110px;
  width: 110px;
  margin-right: 3%;
}
</style>
