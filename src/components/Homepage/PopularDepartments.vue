<template>
  <div class="bg-white big_screen_padding">
    <div class="q-gutter-y-md" style="width: 100%">
      <div class="text-center text-bold text-h6 q-mb-md">
        Popular Departments
      </div>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey departments_tab q-pt-md"
        :ripple="false"
        active-color="primary"
        indicator-color="primary"
        :indicator="false"
        align="center"
      >
        <q-tab
          class="q-mx-sm"
          name="new_arrivals"
          label="New Arrivals"
          no-caps
        />
        <q-tab class="q-mx-sm" name="best_seller" label="Best Seller" no-caps />
        <q-tab
          class="q-mx-sm"
          name="most_popular"
          label="Most Popular"
          no-caps
        />
        <q-tab class="q-mx-sm" name="featured" label="Featured" no-caps />
      </q-tabs>

      <!-- <q-separator /> -->

      <q-tab-panels v-model="tab">
        <q-tab-panel name="new_arrivals">
          <NewArrivals />
        </q-tab-panel>

        <q-tab-panel name="best_seller">
          <BestSeller />
        </q-tab-panel>

        <q-tab-panel name="most_popular">
          <MostPopular />
        </q-tab-panel>

        <q-tab-panel name="featured">
          <Featured />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import NewArrivals from "./PopularDepartment.vue/NewArrivals.vue";
import BestSeller from "./PopularDepartment.vue/BestSeller.vue";
import MostPopular from "./PopularDepartment.vue/MostPopular.vue";
import Featured from "./PopularDepartment.vue/Featured.vue";

export default {
  setup() {
    return {
      tab: ref("new_arrivals"),
      ratingModel: ref(4),
      ratingColors: ["green"],
    };
  },
  components: { NewArrivals, BestSeller, MostPopular, Featured },
  created() {
    this.getCategories();
  },

  data() {
    return {
      products: [],
    };
  },

  methods: {
    getCategories() {
      this.loading = true;
      this.$api
        .get("product/all")
        .then((resp) => {
          console.log(resp);
          this.products = resp.data.data;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.errors = response.data.errors;
        });
    },
  },
};
</script>

<style>
.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
}
</style>
