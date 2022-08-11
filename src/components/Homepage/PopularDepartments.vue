<template>
  <div class="bg-white big_screen_padding">
    <div class="q-gutter-y-md" style="width: 100%">
      <div class="text-center text-bold text-h6 q-mb-md">
        Popular Departments
      </div>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey departments_tab q-pt-md"
        :ripple="false"
        active-color="primary"
        indicator-color="primary"
        :indicator="false"
        align="center"
      >
        <q-tab
          class="q-mx-sm"
          name="new_arrivals"
          label="New Arrivals"
          no-caps
        />
        <q-tab class="q-mx-sm" name="best_seller" label="Best Seller" no-caps />
        <q-tab
          class="q-mx-sm"
          name="most_popular"
          label="Most Popular"
          no-caps
        />
        <q-tab class="q-mx-sm" name="featured" label="Featured" no-caps />
      </q-tabs>

      <!-- <q-separator /> -->

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="new_arrivals">
          <div class="products">
            <div
              v-for="n in 10"
              :key="n"
              class="column q-mb-md text-center product_tile border_card"
            >
              <q-img class="border_card" src="Images/2-1.jpg" />
              <div class="text-subtitle1 q-mt-sm">Cooking Pot</div>
              <div class="row justify-center q-my-sm">
                <q-rating
                  v-model="ratingModel"
                  size="1.2rem"
                  color="grey"
                  :color-selected="ratingColors"
                />
                <span>( 2 reviews)</span>
              </div>
              <div class="text-bold">$53.00</div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="best_seller">
          <div class="text-h6">Mails</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="most_popular">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="featured">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("new_arrivals"),
      ratingModel: ref(4),
      ratingColors: ["green"],
    };
  },
};
</script>

<style>
.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
}
</style>
