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
            v-for="n in 10"
            :key="n"
            clickable
            class="q-px-lg row items-center"
          >
            <q-icon name="settings" class="q-mr-sm" />
            <span>Category x</span></q-item
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
        <router-link class="q-mx-md" to="/">Vendor</router-link>
        <router-link class="q-mx-md" to="/">Trending</router-link>
        <router-link class="q-mx-md" to="/">New</router-link>
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
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.layout_header {
  height: 70px !important;
}
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
</style>
