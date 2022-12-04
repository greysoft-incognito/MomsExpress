<template>
  <div class="row justify-between q-my-md">
    <h6>Other Products</h6>
    <q-space />
    <!-- <q-btn
      flat
      icon-right="chevron_right"
      class="non_hover_btn"
      no-caps
      size="0.8rem"
      label="More Products"
      to="/category"
      :ripple="false"
    /> -->
  </div>
  <q-separator class="q-my-md" />
  <div class="related_container">
    <div
      v-for="products in categoryDetails.products
        ? categoryDetails.products
        : categoryDetails"
      :key="products.id"
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
  </div>
</template>

<script>
import SingleProductTile from "../Product/SingleProductTile.vue";
export default {
  components: { SingleProductTile },
  data() {
    return {
      categoryDetails: [],
    };
  },
  methods: {
    getProductDetail() {
      this.$api
        .get(`product/all`)
        .then((res) => {
          console.log(res);
          this.categoryDetails = res.data.data;
          console.log(this.categoryDetails);
          this.categoryDetails.splice(3, res.data.data.length - 1);
          console.log(this.categoryDetails);
          // this.skeleton = false;
        })
        .catch((err) => {});
    },
  },
  mounted() {
    this.getProductDetail();
  },
};
</script>

<style scoped>
.related_container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* grid-template-columns: 1fr 1fr 1fr; */
  gap: 30px;
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
