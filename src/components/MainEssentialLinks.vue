<template>
  <div class="q-px-md q-py-lg bg-grey-3">
    <q-input
      placeholder="Search for products"
      class="search_input"
      outlined
      dense
      @click="toggle()"
    >
      <template v-slot:prepend>
        <q-icon name="search" color="primary" />
        <q-separator class="q-ma-sm" vertical />
      </template>
    </q-input>
    <div class="q-gutter-y-md q-my-md">
      <div>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="main" label="main menu" />
          <q-tab name="categories" label="categories" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="bg-grey-3">
          <q-tab-panel name="main" class="q-px-none relative-position">
            <q-list separator>
              <q-item class="q-px-sm" exact to="/" clickable v-ripple>
                <q-item-section>Home</q-item-section>
              </q-item>
              <q-item
                class="q-px-sm"
                :to="{
                  name: 'category',
                  params: { categoryname: 'all-products' },
                }"
                clickable
                v-ripple
              >
                <q-item-section>Shop</q-item-section>
              </q-item>

              <q-item class="q-px-sm" to="/cart" clickable v-ripple>
                <q-item-section>Cart</q-item-section>
              </q-item>

              <q-item
                v-show="$store.auth.userDetails !== null"
                class="q-px-sm"
                clickable
                v-ripple
                :to="
                  $store.auth.vendorDetails === null ? `/account` : `/vendor`
                "
              >
                <q-item-section>{{
                  $store.auth.vendorDetails === null ? "Account" : "Dashboard"
                }}</q-item-section>
              </q-item>

              <q-item
                v-show="$store.auth.userDetails !== null"
                class="q-px-sm"
                clickable
                v-ripple
                to="/logout"
              >
                <q-item-section>Logout</q-item-section>
              </q-item>

              <q-item
                v-show="
                  $store.auth.userDetails === null ||
                  $store.auth.vendorDetails === null
                "
                class="q-px-sm"
                clickable
                @click="signIn()"
                v-ripple
              >
                <q-item-section>Sign In</q-item-section>
              </q-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel name="categories">
            <q-list separator>
              <q-item
                v-for="category in getCategory"
                :key="category.id"
                clickable
                class="row items-center q-px-none"
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
            </q-list>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["toggleAuthForm", "toggleSearchDialog"],
  data() {
    return {
      tab: ref("main"),
      getCategory: [],
    };
  },

  created() {
    this.getCategories();
  },
  methods: {
    signIn() {
      this.toggleAuthForm();
    },
    toggle() {
      this.toggleSearchDialog();
    },
    getCategories() {
      this.$api
        .get("category/all")
        .then((resp) => {
          // console.log(resp);
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
};
</script>
