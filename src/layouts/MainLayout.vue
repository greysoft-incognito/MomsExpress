<template>
  <q-layout view="lhh Lpr lFf" class="bg-grey-2">
    <q-header class="bg-white">
      <Header1 />
      <Header2 />
      <Header3 />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer>
      <Footer />
    </q-footer> -->
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

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    Footer,
    Header1,
    Header2,
    Header3,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: links,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
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
