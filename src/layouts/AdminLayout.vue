<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-2">
    <q-header elevated class="layout_header bg-white">
      <Header :toggleLeftDrawer="toggleLeftDrawer" />
    </q-header>

    <q-drawer
      width="250"
      :breakpoint="770"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <router-link
        to="/"
        style="height: 70px"
        class="text-primary q-px-md column justify-center items-left moms_logo"
      >
        <img src="logo.png" class="logo" />
      </router-link>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/AdminEssentialLink.vue";
import links from "../functions/adminDrawerLinks.js";
import Header from "src/components/Layout/AdminHeader.vue";
import Footer from "src/components/Layout/Footer.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    Header,
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

<style scoped>
.logo {
  width: 70%;
  height: 80%;
}

@media screen and (max-width: 700px) {
  .logo {
    height: 60%;
  }
}
</style>
