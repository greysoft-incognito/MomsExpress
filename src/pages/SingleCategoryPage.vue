<template>
  <div class="big_screen_padding account_page">
    <!-- {{ categoryDetails }} -->
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
            label="Top Selling"
          >
            <q-separator />
            <div class="q-pa-md">
              <div
                v-for="n in 6"
                :key="n"
                :class="skeleton1 === false ? 'hide-skeleton' : ''"
                class="side_items_image_container"
              >
                <q-card flat class="row items-center" v-show="skeleton1">
                  <q-skeleton height="70px" width="70px" square />

                  <q-card-section>
                    <q-skeleton
                      type="text"
                      width="100px"
                      class="text-subtitle1"
                    />
                    <q-skeleton
                      type="text"
                      width="100px"
                      class="text-subtitle1"
                    />

                    <q-skeleton type="text" class="text-caption" />
                  </q-card-section>
                </q-card>
              </div>
              <div
                v-for="products in categoryDetails2"
                :key="products.id"
                class="row items-center q-mb-md side_items_image_container"
              >
                <q-img
                  class="product_image"
                  :src="`https://moon.5pays.store/${products.uploads[0].url}`"
                />
                <div class="q-ml-sm">
                  <router-link
                    class="text-subtitle1"
                    :to="{
                      name: 'productDetail',
                      params: { name: products.slug, id: products.id },
                    }"
                  >
                    {{ products.name }}
                  </router-link>
                  <!-- <div class="row">
                    <q-rating
                      v-model="ratingModel"
                      size="1.2rem"
                      color="grey"
                      readonly
                      color-selected="secondary"
                    />
                  </div> -->
                  <div class="text-bold">₦53.00</div>
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
              <div
                v-for="n in 6"
                :key="n"
                :class="skeleton2 === false ? 'hide-skeleton' : ''"
              >
                <q-card
                  flat
                  class="row items-center q-ml-md"
                  v-show="skeleton2"
                >
                  <q-skeleton type="text" width="65%" class="text-subtitle1" />
                </q-card>
              </div>
              <ul class="q-px-md">
                <router-link
                  v-for="cat in getCategory"
                  :key="cat.id"
                  :to="{
                    name: 'category',
                    params: { categoryname: cat.slug, id: cat.id },
                  }"
                >
                  <li>{{ cat.name }}</li>
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
              <div
                v-for="n in 6"
                :key="n"
                :class="skeleton1 === false ? 'hide-skeleton' : ''"
                class="side_items_image_container"
              >
                <q-card flat class="row items-center" v-show="skeleton1">
                  <q-skeleton height="70px" width="70px" square />

                  <q-card-section>
                    <q-skeleton
                      type="text"
                      width="100px"
                      class="text-subtitle1"
                    />
                    <q-skeleton
                      type="text"
                      width="100px"
                      class="text-subtitle1"
                    />

                    <q-skeleton type="text" class="text-caption" />
                  </q-card-section>
                </q-card>
              </div>
              <div
                v-for="products in categoryDetails3"
                :key="products.id"
                class="row items-center q-mb-md side_items_image_container"
              >
                <q-img
                  class="product_image"
                  :src="`https://moon.5pays.store/${products.uploads[0].url}`"
                />
                <div class="q-ml-sm">
                  <router-link
                    class="text-subtitle1"
                    :to="{
                      name: 'productDetail',
                      params: { name: products.slug, id: products.id },
                    }"
                  >
                    {{ products.name }}
                  </router-link>
                  <!-- <div class="row">
                    <q-rating
                      v-model="ratingModel"
                      size="1.2rem"
                      color="grey"
                      readonly
                      color-selected="secondary"
                    />
                  </div> -->
                  <div class="text-bold">₦53.00</div>
                </div>
              </div>
            </div>
          </q-expansion-item>
        </q-list>
      </template>

      <template v-slot:after>
        <div class="bg-orange-4 shop_banner column flex-center">
          <!-- <q-icon size="3.5rem" name="wallpaper" color="grey" /> -->
          <div class="q-my-sm text-h5 text-white text-bold text-uppercase">
            {{
              categoryDetails.name
                ? categoryDetails.name
                : this.$router.currentRoute.value.params.categoryname
            }}
          </div>
        </div>

        <div v-if="this.$store.cart.singleCategory.products !== []">
          <h5 class="q-my-md text-bold">Products</h5>

          <q-separator />
          <!-- {{ this.$store.cart.singleCategory }} -->
          <div class="products_container q-my-md">
            <div
              v-for="products in categoryDetails.products
                ? categoryDetails.products
                : categoryDetails"
              :key="products.id"
              class="column q-mb-md text-center border_card product_tile"
            >
              <div class="image_container">
                <div class="overlay"></div>
                <q-img
                  class="border_card image"
                  :src="`https://moon.5pays.store/${products.uploads[0].url}`"
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
              <!-- <div class="row justify-center">
                <q-rating
                  v-model="ratingModel"
                  size="1.1rem"
                  color="grey"
                  readonly
                  color-selected="secondary"
                  class="stars"
                />
                <span class="review_text">( 2 reviews)</span>
              </div> -->
              <div class="text-bold price_text">₦{{ products.price }}</div>
            </div>
            <!-- <SingleProductTile v-for="n in 10" :key="n" /> -->
            <div
              v-for="n in 6"
              :key="n"
              :class="skeleton === false ? 'hide-skeleton' : ''"
            >
              <q-card flat v-show="skeleton">
                <q-skeleton height="150px" square />

                <q-card-section>
                  <q-skeleton type="text" class="text-subtitle1" />
                  <q-skeleton type="text" width="50%" class="text-subtitle1" />
                  <q-skeleton type="text" class="text-caption" />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <q-page
          v-if="this.$store.cart.singleCategory.products === []"
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
  data() {
    return {
      tab: ref("orders"),
      splitterModel: ref(25),
      // ratingModel: ref(4),
      // ratingColors: ["green"],
      categoryDetails: [],
      categoryDetails2: [],
      categoryDetails3: [],
      getCategory: [],
      skeleton: true,
      skeleton1: true,
      skeleton2: true,
    };
  },
  components: { Addresses, Ordes, Wishlist, AccountDetails, SingleProductTile },
  computed: {
    routeName() {
      return this.$router.currentRoute.value.params.categoryname;
    },
    // randomNumber() {
    //   let products = this.categoryDetails.products;
    //   return Math.floor(
    //     Math.random() * this.categoryDetails.products
    //       ? this.categoryDetails.products.length
    //       : ""
    //   );
    // },
  },
  created() {
    // this.skeleton = true;
    this.getSideBarProducts();
    this.getCategories();
    if (
      this.$router.currentRoute.value.params.categoryname === "all-products"
    ) {
      this.getAllProducts();
    } else {
      this.getProductDetail();
    }
  },
  methods: {
    getProductDetail() {
      let detail = this.$router.currentRoute.value.params.categoryname;
      this.$api
        .get(`/category/${detail}`)
        .then((res) => {
          this.skeleton = false;
          this.categoryDetails = res.data.data;
          this.$store.cart.singleCategory = this.categoryDetails;
          this.message = res.data.message;
          // this.skeleton = false;
        })
        .catch((err) => {});
    },
    getAllProducts() {
      this.$api
        .get(`product/all`)
        .then((resp) => {
          console.log(resp);
          this.categoryDetails = resp.data.data;
          this.$store.cart.singleCategory = this.categoryDetails;
          // this.skeleton = false;
        })
        .catch((response) => {
          this.$q.notify({
            message: response.data.message,
            color: "red",
            position: "top",
          });
          this.errors = response.data.errors;
        });
    },
    getSideBarProducts() {
      this.$api
        .get(`product/all`)
        .then((resp) => {
          console.log(resp);
          this.skeleton1 = false;
          this.categoryDetails2 = resp.data.data;
          this.categoryDetails2.splice(4, resp.data.data.length - 1);
          this.categoryDetails3 = resp.data.data;
          this.categoryDetails3.splice(4, resp.data.data.length - 1);
          // this.skeleton = false;
          console.log(this.categoryDetails2);
          console.log(this.categoryDetails3);
        })
        .catch((response) => {
          console.log(response);
          setTimeout(() => {
            this.skeleton1 = false;
          }, 7000);
          // this.$q.notify({
          //   message: response.data.message,
          //   color: "red",
          //   position: "top",
          // });
          // this.errors = response.data.errors;
        });
    },
    getCategories() {
      this.$api
        .get("category/all")
        .then((resp) => {
          this.skeleton2 = false;
          this.getCategory = resp.data.data;
          this.getCategory.splice(5, resp.data.data.length - 1);
          // this.loading = false;
        })
        .catch(({ response }) => {
          this.loading = false;
          // this.$q.notify({
          //   message: response.data.message || response.data.payload,
          //   color: "red",
          //   position: "top",
          //   timeout: 3000,
          // });
          this.errors = response.data.errors;
          // setTimeout(() => {
          //   this.errors = [];
          // }, 7000);
          // console.log(response);
        });
    },
  },
  watch: {
    routeName: function () {
      if (this.$router.currentRoute.value.name === "category") {
        if (
          this.$router.currentRoute.value.params.categoryname === "all-products"
        ) {
          this.getAllProducts();
        } else {
          this.getProductDetail();
        }
      }
    },
  },
};
</script>

<style scoped>
.hide-skeleton {
  display: none;
}
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
  color: #e06900 !important;
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

.overlay {
  background: rgb(128, 128, 128, 0.35);
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  display: none;
}

.image_container:hover .overlay {
  display: block;
}
.image_container:hover .add_to_cart {
  display: block;
  z-index: 3;
}

.image_container:hover .view_details {
  display: grid;
  z-index: 3;
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
}

@media screen and (max-width: 800px) {
  .image_container {
    height: 200px;
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
