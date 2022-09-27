<template>
  <q-layout view="lhh Lpr lff">
    <q-header class="bg-white">
      <Header1
        class="header_one"
        :toggleAuthForm="toggleAuthForm"
        @clicked="authTypeChecker"
      />
      <Header2 :toggleLeftDrawer="toggleLeftDrawer" />
      <Header3 class="header_three" />
    </q-header>

    <q-drawer :width="280" :breakpoint="770" v-model="leftDrawerOpen" bordered>
      <MainEssentialLinks class="full-height" />
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

    <q-footer class="row items-center mobile_footer q-py-xs">
      <div class="text-center">
        <q-btn icon="home" to="/" flat :ripple="false" />
        <div class="text-caption">Home</div>
      </div>
      <div class="text-center">
        <q-btn icon="format_list_bulleted" flat :ripple="false" />
        <div class="text-caption">Shop</div>
      </div>
      <div class="text-center">
        <q-btn icon="perm_identity" flat :ripple="false" />
        <div class="text-caption">Account</div>
      </div>
      <div class="text-center">
        <q-btn class="" to="/cart" flat icon="shopping_cart">
          <q-badge color="red" class="text-bold" floating transparent>
            4
          </q-badge>
        </q-btn>
        <div class="text-caption">Cart</div>
      </div>
      <div class="text-center">
        <q-btn icon="search" flat :ripple="false" />
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

  setup() {
    const leftDrawerOpen = ref(false);
    const alert = ref(false);

    return {
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
        alert.value = !alert.value;
      },

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods: {
    authTypeChecker(value) {
      if (value === "register") this.tab = "signup";
      if (value === "login") this.tab = "Signin";
    },
  },
  mounted() {
    console.log(this.$router.currentRoute.value.path);
  },
});
</script>

<style>
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
  .floating_cart {
    display: none;
  }
  .mobile_footer {
    display: grid;
  }
}
</style>
