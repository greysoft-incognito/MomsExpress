<template>
  <div class="">
    <q-table
      title="Products Table"
      :rows="rows"
      :hide-header="mode === 'grid'"
      :columns="columns"
      row-key="id"
      :grid="mode == 'grid'"
      :filter="filter"
      :loading="loading"
      selection="multiple"
      v-model:selected="selected"
      v-model:pagination="pagination"
      @request="onRequest"
    >
      <template v-slot:top-right="props">
        <!-- <q-btn
          @click="createProduct"
          color="primary"
          label="Create Product"
          padding="sm"
          class="q-mr-xs"
        /> -->

        <q-input
          outlined
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
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          v-if="mode === 'list'"
        >
          <q-tooltip :disable="$q.platform.is.mobile">
            {{ props.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen" }}
          </q-tooltip>
        </q-btn>

        <q-btn
          flat
          round
          dense
          :icon="mode === 'grid' ? 'list' : 'grid_on'"
          @click="
            mode = mode === 'grid' ? 'list' : 'grid';
            separator = mode === 'grid' ? 'none' : 'horizontal';
          "
          v-if="!props.inFullscreen"
        >
          <q-tooltip :disable="$q.platform.is.mobile">{{
            mode === "grid" ? "List" : "Grid"
          }}</q-tooltip>
        </q-btn>

        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          padding="xs"
          v-if="rows.length"
          @click="exportTable"
        />
      </template>
      <template v-slot:body-cell-image_url="props">
        <q-td :props="props">
          <q-avatar size="90px" class="shadow-10">
            <img :src="`http://165.227.74.156/${props.row.uploads[0].url}`" />
          </q-avatar>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div>
            <q-btn
              round
              dense
              color="negative"
              size="sm"
              icon="delete"
              @click="deleteProducts(props.row.slug)"
            >
              <q-tooltip>Delete {{ props.row.name }}</q-tooltip>
            </q-btn>
            <q-btn
              round
              dense
              glossy
              color="info"
              size="sm"
              class="q-ml-sm"
              icon="edit"
              @click="editProduct(props.row)"
            >
              <q-tooltip>Edit {{ props.row.name }}</q-tooltip>
            </q-btn>
          </div>
        </q-td>
      </template>

      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-negative q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> Well this is sad... {{ message }} </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>

      <template v-slot:bottom v-if="selected.length">
        <q-btn
          @click="deleteProducts"
          :loading="loaders.delete"
          color="negative"
          :label="`Delete ${selected.length} Selected Fruitbays`"
          padding="sm"
          class="q-mr-xs"
        />
      </template>
    </q-table>
  </div>
  <q-dialog v-model="create_product">
    <q-card style="width: 800px; max-width: 85vw">
      <q-card-section>
        <div class="text-h6">
          Edit Product
          <q-btn
            round
            flat
            dense
            icon="close"
            class="float-right"
            color="grey-8"
            v-close-popup
          ></q-btn>
        </div>
      </q-card-section>
      <q-separator inset></q-separator>
      <q-card-section class="q-pt-none">
        <q-form class="q-gutter-md" @submit.prevent="createProduct">
          <div class="row q-gutter-sm">
            <div class="col">
              <q-item-label class="q-pb-xs">Image</q-item-label>
              <q-file
                dense
                color="teal"
                outlined
                name="image[]"
                accept=".jpeg,.jpg,.png,.svg,jpeg"
                v-model="image"
                label="Image"
                @update:model-value="setFile"
              >
              </q-file>
            </div>
          </div>

          <div class="row q-gutter-sm">
            <div class="col">
              <q-item-label class="q-pb-xs">Name</q-item-label>
              <q-input dense outlined name="name" v-model="name" label="Name" />
              <div class="error" v-if="errors.name">{{ errors.name[0] }}</div>
            </div>
            <div class="col">
              <q-item-label class="q-pb-xs">Category</q-item-label>
              <select v-model="category" name="" id="">
                <option
                  v-for="category in getCategory"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
              <div class="error" v-if="errors.category">
                {{ errors.category[0] }}
              </div>
            </div>
          </div>
          <div class="row q-gutter-sm">
            <div class="col">
              <q-item-label class="q-pb-xs">Stock</q-item-label>
              <q-input
                dense
                outlined
                name="stock"
                v-model="stock"
                label="Stock"
              />
              <div class="error" v-if="errors.stock">
                {{ errors.stock[0] }}
              </div>
            </div>
            <div class="col">
              <q-item-label class="q-pb-xs">Price</q-item-label>
              <q-input
                dense
                outlined
                name="price"
                type="number"
                v-model="price"
                label="Price"
              />
              <div class="error" v-if="errors.price">{{ errors.price[0] }}</div>
            </div>
          </div>
          <div class="row q-gutter-sm">
            <div class="col">
              <q-item-label class="q-pb-xs">Description</q-item-label>
              <q-input
                dense
                outlined
                type="textarea"
                name="description"
                v-model="description"
                label="Description"
              />
              <div class="error" v-if="errors.description">
                {{ errors.description[0] }}
              </div>
            </div>
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions align="right" class="text-teal">
        <q-btn
          v-if="!editstate"
          label="Save"
          type="submit"
          color="primary"
          :loading="loading"
          @click="createProducts"
          v-close-popup="false"
        />
        <q-btn
          v-if="editstate"
          label="Edit"
          type="submit"
          color="primary"
          :loading="loading"
          @click="editProducts"
          v-close-popup="false"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { exportFile, useMeta } from "quasar";
import helper from "../../plugins/helpers";
const columns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: "name",
    sortable: true,
  },
  {
    name: "price",
    required: true,
    label: "Price",
    align: "left",
    field: "price",
    sortable: true,
  },
  {
    name: "stock",
    required: true,
    label: "Stock",
    align: "left",
    field: "stock",
    sortable: true,
  },

  {
    name: "category",
    required: true,
    label: "Category",
    align: "left",
    field: "category",
    sortable: true,
  },

  {
    name: "image_url",
    required: true,
    label: "Image",
    align: "left",
    field: "image_url",
    sortable: true,
  },
  {
    name: "actions",
    required: true,
    label: "Actions",
    align: "left",
    field: (row) => row.id,
    sortable: false,
  },
];
function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;
  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}
export default {
  setup() {
    useMeta({
      title: "Stories",
    });
  },
  data() {
    return {
      columns,
      selected: [],
      categories: [],
      rows: [],
      errors: [],
      getCategory: [],
      featured: 1,
      image: null,
      name: "",
      category: "",
      price: "",
      stock: "",
      description: "",
      slug: "",
      editstate: false,
      pagination: {
        sortBy: "id",
        descending: false,
        page: 1,
        rowsPerPage: 5,
        rowsNumber: 100,
      },
      filter: "",
      curl: "",
      separator: "",
      mode: "list",
      role: "fruitbay",
      loading: false,
      create_product: false,
      loaders: {
        delete: false,
        category: false,
        deleteBtn: [],
        save: [],
      },
    };
  },
  mounted() {
    this.onRequest({
      pagination: this.pagination,
      filter: undefined,
    });
  },
  created() {
    this.getCategories();
  },
  methods: {
    setFile(prop) {
      this.image = prop;
    },
    setCategoryId(option) {
      this.$refs._dh.toggleOption(option.opt);
      this.fruitbay.fruit_bay_category_id = this.category.id;
    },
    onRequest(props) {
      this.loading = true;
      // const { page, sortBy, desc } = props.pagination;
      // const filter = props.filter;
      const url = `product/all`;

      this.curl = url;
      this.$api
        .get(url)
        .then(({ data }) => {
          console.log(data.data);
          this.loading = false;
          this.rows = data.data;
        })
        .catch(({ response }) => {
          console.log(response);
          this.loading = false;
          this.rows = [];
        });
    },

    createProduct() {
      this.create_product = true;
      this.description = "";
      this.title = "";
      this.genre_id = "";
      this.rating = "";
      this.image = null;
      this.demographic = "";
      this.type = "";
    },

    editProduct(product) {
      this.editstate = true;
      this.create_product = true;
      this.name = product.name;
      this.price = product.price;
      this.stock = product.stock;
      this.description = product.description;
      this.type = product.type;
      let slug = product.slug;
      this.slug = slug;
    },

    editProducts(e) {
      e.preventDefault();
      let description = this.description;
      let name = this.name;
      let price = this.price;
      let stock = this.stock;
      let image = this.image;

      let slug = this.slug;

      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("description", description);
      formData.append("image[]", image);
      formData.append("_method", "PATCH");
      this.loading = true;
      this.$api
        .post(`product/update/${slug}`, formData)
        .then(({ data }) => {
          console.log("edited", data);
          this.refreshPage();
          this.loading = false;
          this.$q.notify({
            message: data.message,
            color: "red",
            position: "top",
          });
          this.create_product = false;
          this.image = null;
          this.errors = [];
        })
        .catch((e) => {
          let error = this.$plugins.reader.error(e);
          this.errors = error.errors || {};
          this.loading = false;
          this.$q.notify({
            message: "Error",
            color: "red",
            position: "top",
          });
          this.$helper.notify(error.message || error, error.status || "error");
        });
    },
    deleteProducts(slug) {
      this.$helper
        .notify(
          "Are you sure you want to delete this product? This action may be irreversible!",
          "error",
          true,
          "Yes, Delete!"
        )
        .onOk(() => {
          this.loaders.delete = true;
          this.$api
            .delete(`product/${slug}`)
            .then((response) => {
              console.log(response);
              this.selected = [];
              this.refreshPage();
            })
            .catch(({ response }) => {
              console.log(response);
            });
        });
    },
    getCategories() {
      this.$api
        .get("category/all")
        .then((resp) => {
          console.log(resp);
          this.getCategory = resp.data.data;
          this.loading = false;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.$q.notify({
            message: response.data.message || response.data.payload,
            color: "red",
            position: "top",
            timeout: 3000,
          });
          this.errors = response.data.errors;
          setTimeout(() => {
            this.errors = [];
          }, 7000);
          console.log(response);
        });
    },
    refreshPage() {
      if (this.curl !== "") {
        this.loading = true;
        this.$api
          .get(this.curl)
          .then(({ data }) => {
            this.loading = false;
            this.rows = data.data;
            console.log(data);
          })
          .catch(({ response }) => {
            console.log(response);
            this.loading = false;
            this.rows = [];
          });
      }
    },

    exportTable() {
      // naive encoding to csv format
      const content = [this.columns.map((col) => wrapCsvValue(col.label))]
        .concat(
          this.rows.map((row) =>
            this.columns
              .map((col) =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");
      const status = exportFile("fruitbay-management.csv", content, "text/csv");
      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning",
        });
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}

select {
  width: 100%;
  padding: 0.6rem;
}
</style>
