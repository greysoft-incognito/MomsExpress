<template>
  <!-- {{ productDetails }} -->
  {{ this.$store.cart.plate }}
  <div class="big_screen_padding account_page">
    <q-splitter
      v-model="splitterModel"
      reverse
      class="bg-white q-pt-md product_splitter"
    >
      <template v-slot:after>
        <q-list class="expansion_container">
          <div class="q-px-md text-grey-9">
            <q-list separator bordered>
              <q-item class="q-py-md" v-ripple>
                <q-item-section avatar>
                  <q-icon size="2.5rem" name="local_shipping" />
                </q-item-section>

                <q-item-section>
                  <div class="text-bold">Free Shipping & Returns</div>
                  <div>For all orders over $99</div>
                </q-item-section>
              </q-item>

              <q-item class="q-py-md" v-ripple>
                <q-item-section avatar>
                  <q-icon size="2.5rem" name="work_outline" />
                </q-item-section>

                <q-item-section>
                  <div class="text-bold">Secure Payment</div>
                  <div>We ensure secure payment</div>
                </q-item-section>
              </q-item>

              <q-item class="q-py-md" v-ripple>
                <q-item-section avatar>
                  <q-icon size="2.5rem" name="paid" />
                </q-item-section>

                <q-item-section>
                  <div class="text-bold">Money Back Guarantee</div>
                  <div>Any back within 30 days</div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="q-mt-lg q-px-md text-bold text-subtitle1">
            More products
          </div>
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
        </q-list>
      </template>

      <template v-slot:before>
        <div class="product_detail_container">
          <div class="product_detail_images">
            <q-carousel swipeable animated v-model="slide" thumbnails infinite>
              <q-carousel-slide
                :name="1"
                img-src="https://cdn.quasar.dev/img/mountains.jpg"
              />
              <q-carousel-slide
                :name="2"
                img-src="https://cdn.quasar.dev/img/parallax1.jpg"
              />
              <q-carousel-slide
                :name="3"
                img-src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
            </q-carousel>
          </div>

          <div class="details">
            <div class="">
              <h5 class="Product_name text-bold text-capitalize text-grey-10">
                {{ productDetails.name }}
              </h5>
              <p class="category_name text-grey-7 q-mt-sm">
                <span class="text-bold"> Category: </span
                >{{ productDetails.category }}
              </p>

              <p class="category_name text-grey-7 q-mt-sm">
                <span class="text-bold"> In Stock: </span
                >{{ productDetails.stock }}
              </p>

              <q-separator class="q-my-sm" />

              <h4 class="product_price">${{ productDetails.price }}</h4>
              <!-- <h4 class="product_price">{{ productDetails.id }}</h4> -->

              <div class="q-my-sm text-grey-8">
                <q-rating
                  v-model="ratingModel"
                  size="1.1rem"
                  color="grey"
                  readonly
                  :color-selected="ratingColors"
                />
                <span>( 2 reviews)</span>
              </div>

              <div>
                <div class="row q-my-sm items-center text-grey-8">
                  <q-icon name="done" class="q-mr-md" /> Ultrices eros in cursus
                  turpis massa cursus mattis.
                </div>
                <div class="row q-my-sm items-center text-grey-8">
                  <q-icon name="done" class="q-mr-md" /> Ultrices eros in cursus
                  turpis massa cursus mattis.
                </div>
                <div class="row q-my-sm items-center text-grey-8">
                  <q-icon name="done" class="q-mr-md" /> Ultrices eros in cursus
                  turpis massa cursus mattis.
                </div>
              </div>

              <q-separator class="q-my-sm" />

              <div class="quantity_box row text-center items-center q-my-lg">
                <q-input class="text-center" outlined>
                  <template v-slot:append>
                    <div class="row quantity_box">
                      <q-btn
                        round
                        size="0.65rem"
                        icon="remove"
                        flat
                        class="bg-grey-3"
                        text-color="black"
                      />

                      <q-btn
                        round
                        size="0.65rem"
                        icon="add"
                        flat
                        class="bg-grey-3"
                        text-color="black"
                      />
                    </div>
                  </template>
                </q-input>

                <q-btn
                  icon="shopping_basket"
                  outline
                  color="primary"
                  label="Add To Cart"
                  class="btn"
                  no-caps
                  @click="
                    this.$store.cart.addToplate(
                      productDetails,
                      productDetails.id
                    )
                  "
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Description & Reviews  -->
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="left"
          narrow-indicator
        >
          <q-tab name="description" no-caps label="Description" />
          <q-tab name="reviews" no-caps label="Reviews" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="description">
            <Description />
          </q-tab-panel>

          <q-tab-panel name="reviews">
            <div class="review_top">
              <Ratings />
              <PostAReview />
            </div>
            <q-separator class="q-my-md" />
            <Reviews />
          </q-tab-panel>
        </q-tab-panels>

        <div class="q-my-md">
          <RelatedProducts />
        </div>

        <div class="q-my-md">
          <RelatedProducts />
        </div>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import { ref } from "vue";
import Ratings from "../components/Product/ProductDetail/Ratings.vue";
import PostAReview from "../components/Product/ProductDetail/PostAReview.vue";
import Description from "src/components/Product/ProductDetail/Description.vue";
import Reviews from "../components/Product/ProductDetail/Reviews.vue";
import RelatedProducts from "src/components/Categories/RelatedProducts.vue";
export default {
  setup() {
    return {
      tab: ref("orders"),
      splitterModel: ref(25),
      comment: "",
      // skeleton: true,
      slide: 1,
      tab: ref("description"),
      // tab: ref("reviews"),
      ratingColors: ["green"],
      ratingModel: ref(4),
      meal: {
        id: 0,
        img: "Images/2-1.jpg",
        name: "Jollof Rice",
        price: 700,
        quantity: 1,
      },
    };
  },
  components: { Ratings, PostAReview, Description, Reviews, RelatedProducts },
  data() {
    return {
      productDetails: [],
    };
  },
  created() {
    let detail = this.$router.currentRoute.value.params;
    let name = detail.name;
    console.log(detail);
    console.log(name);
    // this.skeleton = true;
    this.$api
      .get(`product/${name}`)
      .then((res) => {
        console.log(res);
        this.productDetails = res.data.data;
        this.message = res.data.message;
        // this.skeleton = false;
      })
      .catch((err) => {});
  },
};
</script>

<style scoped>
.product_detail_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin: 3% 0;
}

.Product_name,
.product_price {
  margin: 0;
}

.quantity_box {
  gap: 10px;
}

.quantity_box .q-input {
  width: 35% !important;
}
.quantity_box .btn {
  /* width: 40%; */
}
.description {
  width: 70%;
}

.review_top {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}
.product_splitter {
  gap: 20px !important;
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

@media screen and (max-width: 1015px) {
  .product_splitter {
    display: block;
  }
  .expansion_container {
    display: none;
  }
}

@media screen and (max-width: 844px) {
  .product_detail_container {
    grid-template-columns: 1fr;
    margin: 0% 0 3%;
  }
}

@media screen and (max-width: 560px) {
  .review_top {
    grid-template-columns: 1fr;
  }
}
</style>
