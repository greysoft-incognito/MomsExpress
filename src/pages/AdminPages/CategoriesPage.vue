<template>
  <q-page class="q-px-lg q-py-xl">
    <div class="categories_page">
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

      <q-list padding separator class="bg-white list_item">
        <q-item v-for="category in categories" :key="category.id">
          <q-item-section avatar top>
            <q-avatar icon="folder" color="primary" text-color="white" />
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ category.name }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn
              round
              flat
              icon="fa-solid fa-pen"
              size="0.65rem"
              color="green"
              @click="getEditDetails(category)"
            />
          </q-item-section>
        </q-item>
        <q-skeleton
          v-show="skeleton"
          v-for="n in 8"
          :key="n"
          class="q-my-md q-mx-sm"
          type="rect"
          height="40px"
        />
      </q-list>
    </div>

    <!-- EDit Category Dialog  -->
    <q-dialog v-model="editCat">
      <q-card style="width: 500px; max-width: 70vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-subtitle1 text-primary text-bold">
            {{ editCatName }}
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <form @submit.prevent="editCategory">
          <q-card-section class="q-pt-none">
            <div>
              <div class="q-mt-md">
                <div class="q-my-xs text-subtitle2 text-bold">
                  New Category Name
                </div>
                <q-input
                  class="input_field"
                  placeholder="New name"
                  outlined
                  dense
                  v-model="editForm.name"
                />
                <!-- <div class="error" v-if="errors.name">
                  {{ errors.name[0] }}
                </div> -->
              </div>
            </div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              no-caps
              label="Rename  Category"
              color="primary"
              type="submit"
              :loading="loading"
            />
          </q-card-actions>
        </form>
      </q-card>
    </q-dialog>

    <!-- Create New Category  -->
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
                  placeholder="Category name"
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

export default {
  data() {
    return {
      alert: ref(false),
      loading: false,
      errors: [],
      categories: [],
      editCat: false,
      form: {
        name: "",
        shop_details: "",
      },

      editForm: {
        name: "",
        // shop_details: "",
      },
      editCatSlug: "",
      editCatName: "",
      skeleton: true,
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
          this.getCategory();
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
    getEditDetails(cat) {
      this.editCat = true;
      this.editCatSlug = cat.slug;
      this.editCatName = cat.name;
    },
    editCategory() {
      this.$api
        .patch(`admin/${this.editCatSlug}/edit`, this.editForm)
        .then((resp) => {
          this.loading = false;
          this.$q.notify({
            message: "Category Name successfully Updated",
            color: "green",
            position: "top",
          });
          console.log(resp);
          this.editForm.name = "";
          this.editCatSlug = "";
          this.editCat = false;
          this.getCategory();
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
    getCategory() {
      this.$api
        .get("category/all")
        .then((resp) => {
          console.log(resp);
          this.categories = resp.data.data;
          this.skeleton = false;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.errors = response.data.errors;
        });
    },
  },
  created() {
    this.getCategory();
  },
};
</script>

<style scoped>
.error {
  color: red;
}

.categories_page {
  width: 50%;
}

.list_item {
  border-radius: 15px;
}
</style>
