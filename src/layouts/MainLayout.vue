<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-2">
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import links from "../functions/vendorDrawerLinks.js";
import Footer from "src/components/Layout/Footer.vue";
// import links from "../functions/adminDrawerLinks.js";
// import Header from "src/components/Layout/Header.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    Footer,
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

<style scoped></style>
