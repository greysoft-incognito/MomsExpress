<template>
  <q-page class="q-px-lg q-py-xl">
    <div style="width: 50%">
      <div class="q-px-md">
        <div class="text-h5">{{ $route.name }}</div>
      </div>
      <div class="q-py-md row">
        <q-btn
          label="New Category"
          class="bordered-btn"
          icon="add"
          color="primary"
          no-caps
          @click="alert = true"
        />
        <q-space />
      </div>

      <q-table
        hide-bottom
        flat
        separator="none"
        :rows="rows"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body="props">
          <q-tr>
            <q-td key="index" :props="props">
              {{ props.row.index }}
            </q-td>
            <q-td key="calories" :props="props">
              {{ props.row.calories }}
            </q-td>
            <q-td key="fat" :props="props">
              {{ props.row.fat }}
            </q-td>
            <q-td style="width: 20%" class="text-center">
              <q-btn
                color="grey"
                round
                class="q-mx-sm non_hover_btn"
                flat
                size="0.6rem"
                icon="delete"
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

    <q-dialog v-model="alert">
      <q-card style="width: 500px; max-width: 70vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-subtitle1 text-primary text-bold">New Category</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <form @submit.prevent="addCategories">
          <q-card-section class="q-pt-none">
            <div>
              <div class="q-mt-md">
                <div class="q-my-xs text-subtitle2 text-bold">
                  Category Name
                </div>
                <q-input
                  class="input_field"
                  placeholder="shop name"
                  outlined
                  dense
                  v-model="form.name"
                />
                <div class="error" v-if="errors.name">
                  {{ errors.name[0] }}
                </div>
              </div>

              <!-- <div class="q-mt-lg">
                <div class="q-my-xs text-subtitle2 text-bold">
                  Category Icon
                </div>
                <q-input
                  class="input_field"
                  placeholder="shop name"
                  outlined
                  dense
                  v-model="form.shop_details"
                />
              </div> -->
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              no-caps
              label="Add  Category"
              color="primary"
              type="submit"
              :loading="loading"
            />
          </q-card-actions>
        </form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from "vue";
const columns = [
  {
    name: "index",
    label: "#",
    align: "center",
    field: "index",
  },
  {
    name: "calories",
    align: "center",
    label: "Category Name ",
    field: "calories",
  },
  {
    name: "fat",
    align: "center",
    label: "Category Icon",
    field: "fat",
  },
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
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
];

rows.forEach((row, index) => {
  row.index = index + 1;
});

export default {
  setup() {
    return {
      columns,
      rows,
      alert: ref(false),
    };
  },
  data() {
    return {
      loading: false,
      errors: [],
      form: {
        name: "",
        shop_details: "",
      },
    };
  },

  methods: {
    addCategories() {
      this.loading = true;
      this.$api
        .post("admin/category/store", this.form)
        .then((resp) => {
          this.loading = false;
          this.$q.notify({
            message: "Category successfully created",
            color: "green",
            position: "top",
          });
          console.log(resp);
          this.form.name = "";
          this.alert = false;
        })
        .catch(({ response }) => {
          this.loading = false;

          this.$q.notify({
            message: response.data.message + ", you need to login to continue",
            color: "red",
            position: "top",
          });
          this.errors = response.data.errors;
          setTimeout(() => {
            this.errors = [];
          }, 7000);
        });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
