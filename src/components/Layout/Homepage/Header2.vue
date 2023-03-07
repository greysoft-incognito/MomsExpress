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

      <router-link
        to="/"
        style="height: 70px"
        class="text-primary q-px-md column justify-center items-left moms_logo"
      >
        <img src="logo.png" class="logo" />
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
            @keydown="
              (result = true), search.length > 1 ? getSearch(search) : ''
              "
          >
          <!-- @blur="result = false" -->
            <template v-slot:prepend>
              <q-icon name="search" color="primary" />
              <q-separator class="q-ma-sm" vertical />
            </template>
          </q-input>

          <div
          v-if="search === '' ? (result = false) : result"
            class="search-result text-black text-subtitle2 bg-white"
          >
            <q-list>
              <div v-if="!searchResults.length" class="flex flex-center">
                <div class="text-subtitle1 text-secondary">No Search Found</div>
              </div>
              <a
                v-else
                class="search"
                v-for="product in searchResults"
                :key="product._id"
                @click="searchRoute(product.slug, product.id)"
              >
                <!-- :to="{
                  name: 'productDetail',
                  params: { name: product.slug, id: product.id },
                }" -->
                {{ product.name }}
              </a>
            </q-list>
          </div>
        </div>

        <div class="buttons row items-center">
          <q-separator class="q-mx-xs q-my-md" vertical />

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
          // console.log(resp);
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
    searchRoute(slug, product_id) {
      this.$router.push({
        name: "productDetail",
        params: { name: slug, id: product_id },
      });
      this.result = false
      this.search = ''
    },
  },
  mounted() {
    // this.getSearch();
  },
};
</script>

<style scoped>
.logo {
  /* width: 100%; */
  height: 80%;
}

@media screen and (max-width: 700px) {
  .logo {
    height: 60%;
  }
}
.small_text {
  font-size: 0.65rem;
  margin: 0;
}
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
  z-index: 1000;
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
