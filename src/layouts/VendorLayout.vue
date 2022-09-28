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
        class="text-primary text-bold text-h5 q-px-md row justify-center items-center"
      >
        <div>MOMS<span class="text-secondary">EXPRESS</span></div>
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
import EssentialLink from "components/VendorEssentialLink.vue";
import links from "../functions/vendorDrawerLinks.js";
import Header from "src/components/Layout/VendorHeader.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
    Header,
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
