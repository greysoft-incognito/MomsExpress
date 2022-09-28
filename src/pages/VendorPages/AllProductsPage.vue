<template>
  <q-page class="q-px-lg q-py-md table_page">
    <div class="route_name">
      <div class="text-h6">{{ $route.name }}</div>
    </div>

    <div class="row justify-between q-my-md">
      <div class="row q-gutter-x-md">
        <q-btn
          class="text-subtitle2 q-mx-md"
          no-caps
          label="New Product"
          icon="add"
          to="/vendor/new_product"
          color="primary"
        />
      </div>

      <q-btn
        flat
        icon="delete"
        no-caps
        round
        class="bordered-btn"
        color="red"
      />
    </div>

    <q-list padding class="list q-py-md bg-white" separator>
      <!-- <ProductItem v-for="n in 5" :key="n" /> -->
      <ProductsTable />
    </q-list>
  </q-page>
</template>

<script>
import { ref } from "vue";
import ProductItem from "src/components/Vendor/Products/ProductItem.vue";
import ProductsTable from "../VendorPages/ProductsTable.vue";

export default {
  name: "Products",
  components: {
    ProductItem,
    ProductsTable,
  },
  data() {
    return {
      icon: ref(false),
      products: [],
      id: "",
      skeleton: ref(true),
      noProduct: ref(false),
    };
  },
};
</script>

<style>
.filter {
  width: 15% !important;
}
.search {
  width: 80% !important;
}
.hide-skeleton {
  display: none;
}
.addProduct {
  width: 100%;
  max-width: 100%;
}
@media screen and (min-width: 1024px) {
  .addProduct {
    width: 70% !important;
  }
}
p {
  display: inline;
}

.my-menu-link {
  color: blue;
}

.list-boxes {
  height: 50px;
  width: 100%;
  border: 2px solid blue;
  border-radius: 4px;
  padding: 3% 1.5%;
}

.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}
.product-title {
  width: 80%;
  text-overflow: ellipsis;
  display: inline;
  overflow-y: hidden;
}

.product-card {
  min-height: 370px;
  height: 300px;
}

@media screen and (max-width: 1175px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 900px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 831px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 660px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 430px) {
  .container {
    grid-template-columns: repeat(1, 80%);
    place-content: center;
  }
  .card {
  }
}

.card {
  width: 100%;
}

.title {
  visibility: visible;
}

.list {
  border-radius: 8px;
  /* cursor: pointer; */
}
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
