<template>
  <q-layout :view="screenWIdth == true ? `lHh Lpr lFf` : `lhh Lpr lff`">
    <q-header class="bg-white">
      <Header1
        class="header_one"
        :toggleAuthForm="toggleAuthForm"
        @clicked="authTypeChecker"
      />
      <Header2 class="header_two" :toggleLeftDrawer="toggleLeftDrawer" />
      <Header3 class="header_three" />
    </q-header>

    <q-drawer :width="280" :breakpoint="770" v-model="leftDrawerOpen" bordered>
      <MainEssentialLinks
        class="full-height"
        :toggleAuthForm="toggleAuthForm"
        :toggleSearchDialog="toggleSearchDialog"
      />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-page-sticky
      position="bottom-right"
      :offset="[40, 25]"
      class="floating_cart"
      v-if="
        this.$store.cart.plate.length != 0 &&
        this.$router.currentRoute.value.path !== '/cart'
      "
    >
      <q-btn
        class="q-mr-md q-my-md"
        color="primary"
        round
        icon="shopping_cart"
        to="/cart"
        fab
      >
        <q-badge color="secondary" class="text-bold" floating>
          {{ this.$store.cart.plate.length }}
        </q-badge>
      </q-btn>
    </q-page-sticky>

    <!-- Authentication Form Dialog -->
    <q-dialog v-model="alert">
      <q-card style="width: 500px; max-width: 80vw">
        <q-card-section class="row">
          <q-space />
          <q-btn
            icon="close"
            class="close_btn"
            flat
            round
            dense
            v-close-popup
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
          >
            <q-tab name="Signin" label="Sign In" />
            <q-tab name="signup" label="Sign Up" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="Signin">
              <Login :toggleShit="toggleShit" />
            </q-tab-panel>

            <q-tab-panel name="signup">
              <Signup :toggleShit="toggleShit" />
            </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Mobile Screen Serach Dialog -->
    <q-dialog
      v-model="mobleDialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
      class="mobile_dialog"
    >
      <q-card class="bg-white text-black">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <q-input
            placeholder="Search for products"
            class="search_input"
            outlined
            v-model="search"
            dense
            @click="search !== '' ? (result = true) : (result = false)"
            @blur="result = false"
            @keydown="
              (result = true), search.length >= 1 ? getSearch(search) : ''
            "
          >
            <template v-slot:prepend>
              <q-icon name="search" color="primary" />
              <q-separator class="q-ma-sm" vertical />
            </template>
          </q-input>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-list>
            <!-- <q-scroll-area style="height: auto"> -->
            <div>
              <div
                class="search"
                v-for="product in searchResults"
                :key="product.id"
                @click="searchProductDetail(product.slug, product.id)"
              >
                {{ product.name }}
              </div>
            </div>
            <!-- :to="{
              name: 'productDetail',
              params: { name: product.slug, id: product.id },
            }" -->

            <!-- </q-scroll-area> -->
          </q-list>

          <div v-show="searchResults.length == 0" class="text-center text-grey">
            Your results would show here
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-footer class="row items-center mobile_footer q-py-xs">
      <div class="text-center">
        <q-btn icon="home" to="/" flat :ripple="false" />
        <div class="text-caption">Home</div>
      </div>

      <div class="text-center">
        <q-btn
          :to="{
            name: 'category',
            params: { categoryname: 'all-products' },
          }"
          icon="format_list_bulleted"
          flat
          :ripple="false"
        />
        <div class="text-caption">Shop</div>
      </div>

      <div v-show="$store.auth.userDetails === null" class="text-center">
        <q-btn
          icon="perm_identity"
          @click="alert = true"
          flat
          :ripple="false"
        />
        <div class="text-caption">Sign In</div>
      </div>

      <div v-show="$store.auth.userDetails !== null" class="text-center">
        <q-btn
          icon="perm_identity"
          :to="$store.auth.vendorDetails === null ? `/account` : `/vendor`"
          flat
          :ripple="false"
        />
        <div class="text-caption">
          {{ $store.auth.vendorDetails === null ? "Account" : "Dashboard" }}
        </div>
      </div>

      <div class="text-center">
        <q-btn class="" to="/cart" flat icon="shopping_cart">
          <q-badge color="red" class="text-bold" floating transparent>
            {{ this.$store.cart.plate.length }}
          </q-badge>
        </q-btn>
        <div class="text-caption">Cart</div>
      </div>
      <div class="text-center">
        <q-btn @click="mobleDialog = true" icon="search" flat :ripple="false" />
        <div class="text-caption">Search</div>
      </div>
    </q-footer>

    <q-footer class="desktop_footer">
      <Footer />
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/AdminEssentialLink.vue";
import links from "../functions/adminDrawerLinks.js";
import Footer from "src/components/Layout/Footer.vue";
import Header1 from "../components/Layout/Homepage/Header1.vue";
import Header2 from "../components/Layout/Homepage/Header2.vue";
import Header3 from "../components/Layout/Homepage/Header3.vue";
import Login from "../components/Authentication/Login.vue";
import Signup from "src/components/Authentication/Signup.vue";
import MainEssentialLinks from "../components/MainEssentialLinks.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    Footer,
    Header1,
    Header2,
    Header3,
    Login,
    Signup,
    MainEssentialLinks,
  },

  data() {
    const leftDrawerOpen = ref(false);
    const alert = ref(false);

    return {
      search: "",
      searchResults: [],
      result: "",
      mobleDialog: ref(false),
      maximizedToggle: ref(true),
      essentialLinks: links,
      leftDrawerOpen,
      tab: ref("Signin"),
      customModel: ref("no"),
      alert,
      toggleShit() {
        alert.value = false;
        console.log("please");
      },
      toggleAuthForm() {
        // if (leftDrawerOpen === true) leftDrawerOpen === false;
        alert.value = !alert.value;
      },

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      screenWIdth: window.innerWidth < 770 ? true : false,
    };
  },
  methods: {
    toggleSearchDialog() {
      this.mobleDialog = !this.mobleDialog;
      this.leftDrawerOpen == false;
    },
    authTypeChecker(value) {
      if (value === "register") this.tab = "signup";
      if (value === "login") this.tab = "Signin";
    },
    getSearch(input) {
      // let query = "ipho";
      this.$api
        .get(`search`, { params: { query: input } })
        .then((resp) => {
          console.log(resp);
          this.searchResults = resp.data.data;
          if (resp.data.data.length == 0) {
            this.$q.notify({
              message: "No result for this search",
              color: "orange",
              position: "bottom",
            });
          }
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
    searchProductDetail(slug, productId) {
      this.$router.push({
        name: "productDetail",
        params: { name: slug, id: productId },
      });
      this.mobleDialog = false;
      this.search = "";
      this.searchResults = [];
    },
  },
  // mounted() {
  //   console.log(this.$router.currentRoute.value.path);
  // },
});
</script>

<style>
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
.mobile_footer {
  display: none;
  grid-template-columns: repeat(5, 1fr);
}
@media screen and (min-width: 1500px) {
  .big_screen_padding {
    padding: 0 15%;
  }
}

@media screen and (max-width: 1499px) {
  .big_screen_padding {
    padding: 0 3%;
  }
}

@media screen and (max-width: 880px) {
  .header_one {
    /* display: none; */
  }

  .header_two {
    margin: 0 !important;
  }
}
@media screen and (max-width: 770px) {
  .header_three {
    display: none;
  }
  .desktop_footer,
  .floating_cart,
  .header_one {
    display: none;
  }
  .mobile_footer {
    display: grid;
  }
  .header_two {
    border-bottom: 1px solid #004c59;
    box-shadow: -5px -13px 30px black;
  }
}
</style>
