<template>
  <!-- {{ this.$store.cart.singleProducts }} -->
  <!-- {{ this.$store.cart.plate }} -->
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
            <div class="q-pa-md">
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
          </div>
        </q-list>
      </template>

      <template v-slot:before>
        <!-- <div
          class="product_detail_container"
          style="padding: 0 4%"
          v-if="skeleton"
        >
          <q-skeleton
            class="col-lg-5 col-md-5 col-sm-12 col-xs-12"
            height="350px"
          />
          <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 q-px-lg">
            <q-skeleton type="text" width="50%" height="50px" />
            <q-skeleton type="text" width="30%" height="30px" />
            <q-skeleton type="text" width="30%" height="30px" />
            <q-skeleton type="text" width="70%" height="180px" />
            <q-skeleton type="text" width="30%" height="30px" />
          </div>
        </div> -->
        <div class="product_detail_container">
          <!-- `https://moon.5pays.store/${productDetails.uploads[0].url}` -->
          <!-- {{ this.$store.cart.singleProducts.uploads[0] }} -->
          <div class="product_detail_images">
            <q-carousel swipeable animated v-model="slide" thumbnails infinite>
              <q-carousel-slide
                :name="1"
                :img-src="`https://moon.5pays.store/${this.$store.cart.singleProducts.uploads[0]?.url}`"
              />
              <!-- <q-carousel-slide
                :name="2"
                img-src="https://cdn.quasar.dev/img/parallax1.jpg"
              />
              <q-carousel-slide
                :name="3"
                img-src="https://cdn.quasar.dev/img/parallax2.jpg"
              /> -->
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

              <h4 class="product_price">₦{{ productDetails.price }}</h4>
              <!-- <h4 class="product_price">{{ productDetails.id }}</h4> -->

              <!-- <div class="q-my-sm text-grey-8">
                <q-rating
                  v-model="ratingModel"
                  size="1.1rem"
                  color="grey"
                  readonly
                  :color-selected="ratingColors"
                />
                <span>( 2 reviews)</span>
              </div> -->

              <!-- <div>
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
              </div> -->

              <q-separator class="q-my-sm" />

              <div class="quantity_box row text-center items-center q-my-lg">
                <!-- <q-input class="text-center" outlined>
                  <template v-slot:append>
                    <div class="row quantity_box">
                      <q-btn
                        @click="this.$store.cart.remove(productDetails.id)"
                        round
                        size="0.65rem"
                        icon="remove"
                        flat
                        class="bg-grey-3"
                        text-color="black"
                      />

                      <q-input
                        v-model="this.$store.cart.singleProducts.stock"
                        class="text-center"
                        outlined
                        dense
                      />

                      <q-btn
                        @click="this.$store.cart.add(productDetails.id)"
                        round
                        size="0.65rem"
                        icon="add"
                        flat
                        class="bg-grey-3"
                        text-color="black"
                      />
                    </div>
                  </template>
                </q-input> -->

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
                <!-- {{ this.$store.cart.singleProducts.vendor.name }} -->
                <!-- <router-link
                  :to="{
                    name: 'vendorpage',
                    params: { vendorname: productDetails.vendor },
                  }"
                  class="btn"
                >
                  View vendor
                </router-link> -->
                <!-- <q-btn
                  label="View Vendor"
                  :to="{
                    name: 'vendorpage',
                    params: {
                      vendor: this.$store.cart.singleProducts.name,
                    },
                  }"
                  outline
                  color="secondary"
                  no-caps
                /> -->
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
            <h6 class="text-h6">Product detail</h6>
            <div class="description text-grey-8">
              {{ productDetails.description }}
            </div>
          </q-tab-panel>

          <q-tab-panel name="reviews">
            <div class="review_top">
              <!-- <Ratings /> -->
              <div class="review_input text-grey-8">
                <h6>Submit Your Review</h6>
                <p>* Your email address will not be published.</p>
                <p>Your Rating of This Product:</p>
                <q-input
                  outlined
                  class="q-my-md"
                  placeholder="Write your review here..."
                  type="textarea"
                  v-model="commentText"
                />
                <div class="fullname">
                  <div class="q-my-sm">
                    <q-input
                      v-model="username"
                      outlined
                      placeholder="Your name"
                      dense
                    />
                  </div>

                  <div class="q-my-sm">
                    <q-input
                      v-model="email"
                      class="full-width"
                      placeholder="Email"
                      dense
                      outlined
                    />
                  </div>
                </div>

                <q-btn
                  class="q-my-md"
                  @click="postComment"
                  label="SUbmit Review"
                  color="primary"
                />
              </div>
            </div>
            <q-separator class="q-my-md" />
            <div class="reviews">
              <div class="row justify-between q-my-sm">
                <h6>Reviews</h6>
                <q-space />
                <!-- <q-btn
                  flat
                  icon-right="chevron_right"
                  class="non_hover_btn q-pr-none"
                  no-caps
                  size="0.8rem"
                  label="View all"
                  :ripple="false"
                /> -->
              </div>
            </div>

            <div class="">
              <div class="">
                <q-list separator class="rounded-borders" style="">
                  <q-item
                    v-for="item in productDetails.comments"
                    :key="item.id"
                    class="q-my-sm q-px-none comments"
                  >
                    <!-- <q-item-section avatar top>
            <q-avatar size="4rem">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section> -->

                    <q-item-section>
                      <q-item-label lines="1">
                        <span class="text-bold text-subtitle1">{{
                          item.created_by
                        }}</span>
                        <span class="text-caption text-grey-8 q-ml-sm">
                          {{ item.created_at }}
                        </span>
                      </q-item-label>

                      <!-- <q-item-label>
                        <q-rating
                          class="q-mb-sm"
                          v-model="ratingModel"
                          size="1rem"
                          color="grey"
                          readonly
                          :color-selected="ratingColors"
                        />
                      </q-item-label> -->

                      <q-item-label class="text-grey-8">
                        <div class="review_text">
                          {{ item.comment }}
                        </div>
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>

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
      skeleton: true,
      slide: 1,
      tab: ref("description"),
      // tab: ref("reviews"),
      // ratingColors: ["green"],
      // ratingModel: ref(4),
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
      commentText: "",
      email: "",
      username: "",
      productDetails: [],
      categoryDetails2: [],
    };
  },
  created() {
    this.getProductDetail();
    let detail = this.$router.currentRoute.value.params;
    let name = detail.name;
    // console.log(detail);
    // console.log(name);
    // this.skeleton = true;
    this.getProductDetails(name);
  },
  methods: {
    postComment() {
      console.log(this.commentText);
      let detail = this.$router.currentRoute.value.params;
      let name = detail.name;
      this.$api
        .post(`${name}/comment/create`, {
          comment: this.commentText,
        })
        .then((res) => {
          this.commentText = "";
          console.log(res);
          this.getProductDetails(name);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProductDetails(name) {
      this.$api
        .get(`product/${name}`)
        .then((res) => {
          this.skeleton = false;
          this.productDetails = res.data.data;
          this.$store.cart.singleProducts = this.productDetails;
          this.message = res.data.message;
          // this.skeleton = false;
        })
        .catch((err) => {});
    },
    getProductDetail() {
      this.$api
        .get(`/category/home-equipments`)
        .then((res) => {
          this.categoryDetails2 = res.data.data.products.reverse();
          this.categoryDetails2.splice(4, res.data.data.products.length - 1);
        })
        .catch((err) => {});
    },
  },
  computed: {
    routeName() {
      return this.$router.currentRoute.value.params.name;
    },
  },
  watch: {
    routeName: function () {
      // if (this.$router.currentRoute.value.name === "product_detail") {
      // this.getProductDetail();
      let detail = this.$router.currentRoute.value.params;
      let name = detail.name;
      // this.skeleton = true;
      this.getProductDetails(name);
    },
    // },
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
  grid-template-columns: 1fr;
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

.review_text {
  line-height: 1.5;
}
@media screen and (max-width: 400px) {
  .comments {
    display: block !important;
  }
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

@media screen and (max-width: 1448px) {
  .checkbox_container p {
    width: 85%;
  }
}

@media screen and (max-width: 640px) {
  .checkbox_container p {
    font-size: 0.9rem;
  }
}
</style>
