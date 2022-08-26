<template>
  <div class="big_screen_padding account_page">
    <q-splitter
      v-model="splitterModel"
      class="bg-white q-pt-md vendor_splitter"
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
              <div
                v-for="products in categoryDetails.products"
                :key="categoryDetails.products.id"
                class="row items-center q-mb-md side_items_image_container"
              >
                <q-img
                  class="product_image"
                  :src="`http://165.227.74.156/${products.uploads[0].url}`"
                />
                <div class="q-ml-sm">
                  <div class="text-subtitle1">{{ products.name }}</div>
                  <div class="row">
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

        <div v-if="this.$store.cart.singleCategory.products.length !== 0">
          <h5 class="q-my-md text-bold">Products</h5>

          <q-separator />
          <!-- {{ this.$store.cart.singleCategory }} -->
          <div class="products_container q-my-md">
            <div
              :to="{
                name: 'productDetail',
                params: { name: products.slug, id: products.id },
              }"
              v-for="products in categoryDetails.products"
              :key="categoryDetails.products.id"
              class="column q-mb-md text-center border_card product_tile"
            >
              <div class="image_container">
                <q-img
                  class="border_card image"
                  :src="`http://165.227.74.156/${products.uploads[0].url}`"
                />
                <!-- <div class="add_to_cart bg-primary text-white">add to cart</div> -->
                <q-btn
                  label="View details"
                  :ripple="false"
                  class="add_to_cart"
                  no-caps
                  color="primary"
                  :to="{
                    name: 'productDetail',
                    params: { name: products.slug, id: products.id },
                  }"
                />

                <div class="view_details">
                  <q-btn
                    icon="fa-regular fa-heart"
                    class="non_hover_btn bg-white q-mb-sm"
                    no-caps
                    size="0.75rem"
                    round
                    flat
                    color="primary"
                  />

                  <q-btn
                    icon="fa-solid fa-cart-plus"
                    class="non_hover_btn bg-white"
                    no-caps
                    size="0.75rem"
                    round
                    flat
                    color="primary"
                    @click="this.$store.cart.addToplate(products, products.id)"
                  />
                </div>
              </div>
              <router-link
                :to="{
                  name: 'productDetail',
                  params: { name: products.slug, id: products.id },
                }"
                class="text-subtitle1 product_text q-mt-sm"
              >
                {{ products.name }}
              </router-link>
              <div class="row justify-center">
                <q-rating
                  v-model="ratingModel"
                  size="1.1rem"
                  color="grey"
                  readonly
                  :color-selected="ratingColors"
                  class="stars"
                />
                <span class="review_text">( 2 reviews)</span>
              </div>
              <div class="text-bold price_text">${{ products.price }}</div>
            </div>
            <!-- <SingleProductTile v-for="n in 10" :key="n" /> -->
          </div>
        </div>
        <q-page
          v-if="this.$store.cart.singleCategory.products.length == 0"
          class="noLength no_item_in_cart text-h4 text-center q-my-xl q-py-lg"
        >
          <div class="text-center text-primary text-bold">
            This category has no products yet
          </div>
          <q-icon name="shopping_cart" size="3rem" color="primary" />
        </q-page>
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
  computed: {
    routeName() {
      return this.$router.currentRoute.value.params.categoryname;
    },
  },
  created() {
    // this.skeleton = true;
    this.getProductDetail();
  },
  methods: {
    getProductDetail() {
      let detail = this.$router.currentRoute.value.params.categoryname;
      console.log(detail);
      this.$api
        .get(`/${detail}`)
        .then((res) => {
          console.log(res);
          this.categoryDetails = res.data.data;
          this.$store.cart.singleCategory = this.categoryDetails;
          this.message = res.data.message;
          // this.skeleton = false;
        })
        .catch((err) => {});
    },
  },
  watch: {
    routeName: function () {
      this.getProductDetail();
    },
  },
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
.side_items_image_container {
  height: 100px !important;
}
.product_image {
  width: 35%;
  height: 100%;
}

.image_container {
  height: 280px;
  position: relative;
  cursor: pointer;
}
.image {
  height: 100%;
}
.add_to_cart {
  /* height: 50px; */
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}

.image_container:hover .add_to_cart {
  display: block;
}

.image_container:hover .view_details {
  display: grid;
}
.product_tile {
  position: relative;
  cursor: pointer;
}

.view_details {
  display: none;
  position: absolute;
  right: 2%;
  top: 2%;
}
@media screen and (max-width: 1130px) {
  .image_container {
    height: 230px;
  }
  .side_items_image_container {
    height: 70px !important;
  }
}

@media screen and (max-width: 1000px) {
  .vendor_splitter {
    display: block;
  }
  .expansion_container {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .image_container {
    height: 200px;
  }
}

@media screen and (max-width: 600px) {
  .products_container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 400px) {
  .products_container {
    gap: 10px;
  }
}

@media screen and (max-width: 570px) {
  .image_container {
    height: 180px;
  }
  .product_text,
  .price_text {
    font-size: 0.9rem;
  }
  .price_text,
  .review_text {
    font-size: 0.8rem;
  }
}
</style>
