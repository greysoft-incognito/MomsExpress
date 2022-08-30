<template>
  <div class="column q-mb-md text-center border_card product_tile">
    <div class="image_container">
      <q-img class="border_card image" src="Images/2-1.jpg" />
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
      Cooking Pot
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
    <div class="text-bold price_text">$53.00</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      ratingModel: ref(4),
      ratingColors: ["green"],
    };
  },
};
</script>

<style scoped>
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
