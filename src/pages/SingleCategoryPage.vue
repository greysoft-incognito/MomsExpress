<template>
  <div class="big_screen_padding account_page">
    <q-splitter
      v-model="splitterModel"
      class="bg-white q-pt-xl vendor_splitter"
    >
      <template v-slot:before>
        <q-list class="expansion_container">
          <q-expansion-item
            default-opened
            expand-icon="add"
            expanded-icon="remove"
            label="All Categories"
          >
            <q-separator />
            <div class="q-py-sm">
              <ul class="q-px-md">
                <router-link to="/">
                  <li>Clothing</li>
                </router-link>
                <router-link to="/">
                  <li>Cosmetics</li>
                </router-link>
                <router-link to="/">
                  <li>Electronics</li>
                </router-link>
                <router-link to="/">
                  <li>Clothing</li>
                </router-link>
                <router-link to="/">
                  <li>Cosmetics</li>
                </router-link>
                <router-link to="/">
                  <li>Electronics</li>
                </router-link>
                <router-link to="/">
                  <li>Clothing</li>
                </router-link>
                <router-link to="/">
                  <li>Cosmetics</li>
                </router-link>
                <router-link to="/">
                  <li>Electronics</li>
                </router-link>
                <router-link to="/">
                  <li>Clothing</li>
                </router-link>
                <router-link to="/">
                  <li>Cosmetics</li>
                </router-link>
                <router-link to="/">
                  <li>Electronics</li>
                </router-link>
              </ul>
            </div>
            <!-- <q-separator /> -->
          </q-expansion-item>

          <q-expansion-item
            default-opened
            expand-icon="add"
            expanded-icon="remove"
            label="Top Selling"
          >
            <q-separator />
            <div class="q-pa-md">
              <div v-for="n in 4" :key="n" class="row items-center q-mb-md">
                <q-img class="product_image" src="Images/2-1.jpg" />
                <div class="q-ml-sm">
                  <div class="text-subtitle1">Cooking Pot</div>
                  <div class="row justify-center">
                    <q-rating
                      v-model="ratingModel"
                      size="1.2rem"
                      color="grey"
                      readonly
                      :color-selected="ratingColors"
                    />
                  </div>
                  <div class="text-bold">$53.00</div>
                </div>
              </div>
            </div>
          </q-expansion-item>

          <q-expansion-item
            default-opened
            expand-icon="add"
            expanded-icon="remove"
            label="Top Categories"
          >
            <q-separator />
            <div class="q-py-sm">
              <ul class="q-px-md">
                <router-link to="/">
                  <li>Clothing</li>
                </router-link>
                <router-link to="/">
                  <li>Cosmetics</li>
                </router-link>
                <router-link to="/">
                  <li>Electronics</li>
                </router-link>
                <router-link to="/">
                  <li>Clothing</li>
                </router-link>
              </ul>
            </div>
            <!-- <q-separator /> -->
          </q-expansion-item>

          <q-expansion-item
            default-opened
            expand-icon="add"
            expanded-icon="remove"
            label="New products"
          >
            <q-separator />
            <div class="q-pa-md">
              <div v-for="n in 3" :key="n" class="row items-center q-mb-md">
                <q-img class="product_image" src="Images/2-1.jpg" />
                <div class="q-ml-sm">
                  <div class="text-subtitle1">Cooking Pot</div>
                  <div class="row justify-center">
                    <q-rating
                      v-model="ratingModel"
                      size="1.2rem"
                      color="grey"
                      readonly
                      :color-selected="ratingColors"
                    />
                  </div>
                  <div class="text-bold">$53.00</div>
                </div>
              </div>
            </div>
          </q-expansion-item>
        </q-list>
      </template>

      <template v-slot:after>
        <div class="bg-grey-3 shop_banner column flex-center">
          <q-icon size="3.5rem" name="wallpaper" color="grey" />
          <div class="q-my-sm text-h5 text-bold text-uppercase">Category X</div>
        </div>

        <h5 class="q-my-md text-bold">Products</h5>

        <q-separator />

        <div class="products_container q-my-md">
          <SingleProductTile v-for="n in 10" :key="n" />
        </div>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import { ref } from "vue";
import AccountDetails from "components/Buyer/AccountComponents/AccountDetails.vue";
import Addresses from "components/Buyer/AccountComponents/Addresses.vue";
import Ordes from "components/Buyer/AccountComponents/Orders.vue";
import Wishlist from "components/Buyer/AccountComponents/Wishlist.vue";
import SingleProductTile from "src/components/Product/SingleProductTile.vue";

export default {
  setup() {
    return {
      tab: ref("orders"),
      splitterModel: ref(25),
    };
  },
  components: { Addresses, Ordes, Wishlist, AccountDetails, SingleProductTile },
};
</script>

<style scoped>
.non_hover_btn:hover {
  color: #808080 !important;
}
.shop_banner {
  height: 300px;
  border-radius: 15px;
  position: relative;
}
.store_name {
  position: absolute;
  bottom: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  height: 70px;
}
ul {
  list-style: none;
}
li {
  font-size: 0.9rem;
  margin: 4% 0;
}

ul a:hover {
  color: #1976d2 !important;
}
.products_container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}
.vendor_splitter {
  gap: 35px;
}
.product_image {
  width: 35%;
}
</style>
