<template>
  <q-toolbar class="header3 big_screen_padding">
    <div class="row full-width">
      <div class="categories text-black">
        <q-list
          @mouseover="showCategories = true"
          @click="showCategories = !showCategories"
        >
          <q-item clickable>
            <q-item-section avatar>
              <q-icon name="menu" />
            </q-item-section>
            <q-item-section>Categories</q-item-section>
            <q-item-section side>
              <q-icon name="expand_more" />
            </q-item-section>
          </q-item>
        </q-list>

        <q-card
          class="categories_list"
          :class="showCategories ? 'show_category' : 'hide_category'"
          separator
          @mouseleave="showCategories = false"
        >
          <q-item
            v-for="category in getCategory"
            :key="category.id"
            clickable
            @click="showCategories = false"
            class="q-px-lg row items-center"
            :to="{
              name: 'category',
              params: { categoryname: category.slug, id: category.id },
            }"
          >
            <q-icon name="settings" class="q-mr-sm" />
            <span>{{ category.name }}</span></q-item
          >

          <q-btn
            label="View All Categories"
            icon-right="chevron_right"
            class="q-my-sm non_hover_btn"
            color="primary"
            :ripple="false"
            flat
            size="0.8rem"
          />
        </q-card>
      </div>

      <div class="nav_links row q-ml-lg text-black items-center">
        <router-link class="q-mx-md" to="/">Home</router-link>
        <router-link class="q-mx-md" to="/">Shop</router-link>
        <q-btn-dropdown
          flat
          no-caps
          class="non_hover_btn text-weight-normal"
          label="Vendor"
          :ripple="false"
        >
          <q-list>
            <q-item clickable v-close-popup to="become_a_vendor">
              <q-item-section>
                <q-item-label>Become a Vendor</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup to="">
              <q-item-section>
                <q-item-label>Featured Vendors</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup to="">
              <q-item-section>
                <q-item-label>Top Vendors</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <!-- <router-link class="q-mx-md" to="/">Vendor</router-link> -->
        <router-link class="q-mx-md" to="/category">Trending</router-link>
        <router-link class="q-mx-md" to="/category">New</router-link>
      </div>
    </div>
  </q-toolbar>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["toggleLeftDrawer"],
  setup() {
    return {
      showCategories: ref(false),
    };
  },

  data() {
    return {
      getCategory: [],
    };
  },

  created() {
    this.getCategories();
  },
  methods: {
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
  },
  mounted() {},
};
</script>

<style scoped>
.search_input {
  width: 400px;
}
@media screen and (min-width: 770px) {
  .hamburger_btn {
    display: none;
  }
}

.categories {
  width: 22%;
  position: relative;
}
.categories_list {
  position: absolute;
  z-index: 1;
  width: 100%;
  background-color: white;
}
.hide_category {
  display: none;
}

.show_category {
  display: block !important;
}

.header3 {
  border: 1px solid rgb(128, 128, 128, 0.3);
}

.nav_links a:hover {
  color: #1976d2;
}
@media screen and (max-width: 900px) {
  .categories {
    width: 27%;
  }
}
</style>
