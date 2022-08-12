<template>
  <q-layout view="lhh Lpr lff" class="bg-grey-2">
    <q-header class="bg-white">
      <Header1 :toggleAuthForm="toggleAuthForm" @clicked="authTypeChecker" />
      <Header2 />
      <Header3 />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

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
              <Login />
            </q-tab-panel>

            <q-tab-panel name="signup">
              <Signup />
            </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-footer>
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
import Login from "../components/Authentication.vue/Login.vue";
import Signup from "src/components/Authentication.vue/Signup.vue";

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
      toggleAuthForm() {
        alert.value = !alert.value;
      },
    };
  },
  methods: {
    authTypeChecker(value) {
      if (value === "register") this.tab = "signup";
      if (value === "login") this.tab = "Signin";
    },
  },
  mounted() {},
});
</script>

<style>
@media screen and (min-width: 1500px) {
  .big_screen_padding {
    padding: 0 15%;
  }
}
</style>
