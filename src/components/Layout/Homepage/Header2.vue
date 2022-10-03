<template>
  <q-toolbar class="q-my-sm big_screen_padding header_two">
    <div class="row q-my-sm header_two_cont items-center full-width">
      <div class="column">
        <q-space />
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="hamburger_btn q-mr-sm"
          color="primary"
        />
        <q-space />
      </div>

      <router-link to="/" class="text-primary text-bold text-h5">
        <div>MOMS<span class="text-secondary">EXPRESS</span></div>
      </router-link>

      <q-space />

      <div class="row text-black items-center input_container">
        <div class="flex input_div flex-center q-mr-lg">
          <q-input
            placeholder="Search for products"
            class="search_input"
            outlined
            v-model="search"
            dense
            @click="search !== '' ? (result = true) : (result = false)"
            @blur="result = false"
            @keydown="
              (result = true), search.length > 1 ? getSearch(search) : ''
            "
          >
            <template v-slot:prepend>
              <q-icon name="search" color="primary" />
              <q-separator class="q-ma-sm" vertical />
            </template>
          </q-input>

          <div
            v-if="(result, search === '' ? (result = false) : result)"
            class="search-result text-black text-subtitle2 bg-white"
          >
            <q-list>
              <!-- <q-scroll-area style="height: auto"> -->
              <q-list-item>
                <router-link
                  class="search"
                  v-for="product in searchResults"
                  :key="product._id"
                  :to="{
                    name: 'productDetail',
                    params: { name: product.slug, id: product.id },
                  }"
                  >{{ product.name }}</router-link
                >
              </q-list-item>
              <!-- </q-scroll-area> -->
            </q-list>
          </div>
        </div>

        <div class="buttons row items-center">
          <q-separator class="q-mx-xs q-my-md" vertical />
          <!-- <div>
            <q-btn
              color="primary"
              flat
              round
              class="q-mx-sm"
              icon="favorite_border "
            />
          </div> -->

          <q-btn
            class="q-mr-md q-my-md"
            color="primary"
            round
            flat
            icon="shopping_cart"
            to="/cart"
          >
            <q-badge
              v-if="this.$store.cart.plate.length != 0"
              color="secondary"
              class="text-bold"
              floating
            >
              {{ this.$store.cart.plate.length }}
            </q-badge>
          </q-btn>
        </div>
      </div>
    </div>
  </q-toolbar>
</template>

<script>
export default {
  props: ["toggleLeftDrawer"],
  data() {
    return {
      cartNumber: "",
      searchResults: [],
      search: "",
      result: false,
    };
  },
  methods: {
    getSearch(input) {
      // let query = "ipho";
      this.$api
        .get(`search`, { params: { query: input } })
        .then((resp) => {
          console.log(resp);
          this.searchResults = resp.data.data;
        })
        .catch((response) => {
          this.$q.notify({
            message: response.data.message,
            color: "red",
            position: "top",
          });
          this.errors = response.data.errors;
        });
    },
  },
  mounted() {
    // this.getSearch();
  },
};
</script>

<style scoped>
.layout_header {
  height: 70px !important;
}
.input_container {
  position: relative;
}
.search_input {
  width: 450px;
}
.search-result {
  position: absolute;
  background: white !important;
  width: 100%;
  top: 100%;
  left: 0;
  transform: translateX(-6.25%);
  z-index: 100;
  padding: 2% 5%;
  height: auto;
  box-shadow: 0px 2px 12px -5.5px;
}
.search {
  cursor: pointer;
  margin: 2% 0;
  text-decoration: none;
  color: black;
  display: block;
  width: fit-content;
}
.search:hover {
  color: #d56c33 !important;
}
@media screen and (min-width: 770px) {
  .hamburger_btn {
    display: none;
  }
}

.image_container {
  width: 20%;
}

@media screen and (max-width: 990px) {
  .search_input {
    width: 350px;
  }
  .header_two_cont {
    margin: 0;
  }
}

@media screen and (max-width: 850px) {
  .search_input {
    width: 300px;
  }
}

@media screen and (max-width: 770px) {
  .input_div {
    display: none;
  }
  .header_two_cont {
    /* justify-content: left; */
  }
  .buttons {
    justify-self: end !important;
    align-self: flex-end !important;
  }
}
</style>
