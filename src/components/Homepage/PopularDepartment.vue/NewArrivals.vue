<template>
  <div class="products">
    <div
      v-for="n in 8"
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
    <div
      class="q-mb-md text-center border_card product_tile no-wrap"
      style="flex-wrap: nowrap !important"
      v-for="product in products"
      :key="product.id"
    >
      <div class="image_container">
        <div class="overlay"></div>
        <img
          class="border_card image"
          :src="`http://165.227.74.156/${product.uploads[0].url}`"
        />
        <!-- <div class="add_to_cart bg-primary text-white">add to cart</div> -->
        <q-btn
          label="View details"
          :ripple="false"
          class="add_to_cart"
          no-caps
          color="primary"
          to="/product_detail"
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
          />
        </div>
      </div>
      <router-link
        to="/product_detail"
        class="text-subtitle1 product_text q-mt-sm"
      >
        {{ product.name }}
      </router-link>
      <div class="row justify-center">
        <q-rating
          v-model="ratingModel"
          size="1.1rem"
          color="grey"
          readonly
          color-selected="secondary"
          class="stars"
        />
        <span class="review_text">( 2 reviews)</span>
      </div>
      <div class="text-bold price_text">₦{{ product.price }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SingleProductTile from "src/components/Product/SingleProductTile.vue";

export default {
  data() {
    return {
      ratingModel: ref(4),
      ratingColors: ["green"],
      products: [],
      skeleton: true,
    };
  },
  components: { SingleProductTile },
  methods: {
    getAllProducts() {
      this.$api
        .get(`/category/electronics`)
        .then((resp) => {
          console.log(resp);
          this.skeleton = false;
          this.products = resp.data.data.products.reverse();
          this.products.splice(8, resp.data.data.products.length - 1);
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
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>

<style scoped>
.hide-skeleton {
  display: none;
}
.image_container {
  height: 280px;
  position: relative;
  cursor: pointer;
}
.image {
  height: 100%;
  object-fit: cover;
  width: 100%;
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
