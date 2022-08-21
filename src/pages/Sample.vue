<template>
  <q-page class="big_screen_padding">
    <!-- <div class="row">
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
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
      </div>

      <div class="details">
        <div class="">
          <h5 class="Product_name text-bold text-capitalize text-grey-10">
            product.name
          </h5>
          <p class="category_name text-grey-7 q-mt-sm">
            <span class="text-bold"> Category: </span>Lorem category
          </p>

          <p class="category_name text-grey-7 q-mt-sm">
            <span class="text-bold"> In Stock: </span>35
          </p>

          <q-separator class="q-my-sm" />

          <h4 class="product_price">$500</h4>

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
              size="1.25rem"
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
  </q-page>
</template>

<script>
import { ref } from "vue";
import Ratings from "../components/Product/ProductDetail/Ratings.vue";
import PostAReview from "../components/Product/ProductDetail/PostAReview.vue";
import Description from "src/components/Product/ProductDetail/Description.vue";
import Reviews from "../components/Product/ProductDetail/Reviews.vue";
export default {
  name: "details.vue",
  props: ["id"],
  data() {
    return {
      comment: "",
      // skeleton: true,
      slide: 1,
      tab: ref("reviews"),
    };
  },
  components: { Ratings, PostAReview, Description, Reviews },
};
</script>

<style>
.product_detail_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin: 3% 0;
}

.product_detail_images {
  /* width: 30%; */
}

.Product_name,
.product_price {
  margin: 0;
}

.product_price {
}

.quantity_box {
  gap: 10px;
}

.quantity_box .q-input {
  width: 25% !important;
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
</style>
