<template>
  <div class="q-px-md q-py-lg bg-grey-3">
    <q-input
      placeholder="Search for products"
      class="search_input"
      outlined
      dense
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
          <q-tab-panel name="main" class="q-px-none">
            <q-list separator>
              <q-item
                class="q-px-none"
                clickable
                v-ripple
                v-for="n in 6"
                :key="n"
              >
                <q-item-section>Single line item</q-item-section>
              </q-item>
            </q-list>
          </q-tab-panel>

          <q-tab-panel name="categories">
            <q-list separator>
              <q-item
                v-for="n in 10"
                :key="n"
                clickable
                class="row items-center q-px-none"
                to="/category"
              >
                <q-icon name="settings" class="q-mr-sm" />
                <span>Category x</span></q-item
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
  setup() {
    return {
      tab: ref("main"),
    };
  },
};
</script>
