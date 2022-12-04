<template>
  <div class="big_screen_padding bg-white main_container">
    <div class="row q-my-sm text-bold justify-between">
      <div class="text-h6 text-bold">{{ products.name }}</div>
      <router-link
        :to="{
          name: 'category',
          params: { categoryname: products.slug, id: products.id },
        }"
      >
        <span>More Products</span> <q-icon name="chevron_right" />
      </router-link>
    </div>
    <!-- {{ products }} -->
    <!-- {{ banner }} -->
    <q-separator class="q-my-md" />

    <div v-if="skeleton" class="category_container">
      <div class="banner">
        <q-skeleton height="100%" square />
      </div>
      <div style="gap: 1rem" class="row no-wrap lar items-start products">
        <q-card v-for="n in 8" :key="n" flat>
          <q-skeleton height="200px" square />

          <q-card-section>
            <q-skeleton type="text" class="text-subtitle1" />
            <q-skeleton type="text" width="50%" class="text-subtitle1" />
            <q-skeleton type="text" class="text-caption" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div v-if="products.products.length" class="category_container bg-">
      <div :style="`background-image: url(${banner})`" class="banner"></div>
      <div class="products">
        <div
          v-for="product in products.products"
          :key="product.id"
          class="column q-mb-md text-center border_card product_tile"
        >
          <!-- {{ product.uploads[0].url }} -->
          <div class="image_container">
            <div class="overlay"></div>
            <!-- <q-img class="border_card image" src="Images/2-1.jpg" /> -->
            <q-img
              style="object-fit: contain"
              class="border_card image"
              :src="`https://moon.5pays.store/${product.uploads[0].url}`"
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
                params: { name: product.slug, id: product.id },
              }"
            />

            <q-btn
              label="Add to Cart"
              :ripple="false"
              flat
              class="add_to_cart add_to_cart2 bg-primary text-white"
              no-caps
              color="primary"
              :to="{
                name: 'productDetail',
                params: { name: product.slug, id: product.id },
              }"
            />

            <div class="view_details">
              <q-btn
                @click="this.$store.cart.addToplate(product, product.id)"
                icon="fa-solid fa-cart-plus"
                class="non_hover_btn"
                no-caps
                size="0.75rem"
                round
                flat
                color="primary"
              />
            </div>
          </div>
          <router-link
            :to="{
              name: 'productDetail',
              params: { name: product.slug, id: product.id },
            }"
            class="text-subtitle1 q-mt-sm"
          >
            {{ product.name }}
          </router-link>

          <!-- <div class="row justify-center q-my-sm">
            <q-rating
              v-model="ratingModel"
              size="1.2rem"
              color="grey"
              readonly
              :color-selected="ratingColors"
            />
            <span>( 2 reviews)</span>
          </div> -->
          <div class="text-bold">₦{{ product.price }}</div>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-h2">
      You no not have any products in this category
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import SingleProductTile from "../Product/SingleProductTile.vue";
export default {
  components: { SingleProductTile },
  setup() {
    return {
      // ratingModel: ref(4),
      // ratingColors: ["green"],
    };
  },
  props: ["products", "skeleton", "banner"],

  data() {
    return {
      skele: ["ske", "ske", "ske", "ske", "ske", "ske", "ske"],
    };
  },
};
</script>

<style scoped>
.main_container {
  padding-bottom: 3%;
  padding-top: 3%;
}
.category_container {
  display: grid;
  grid-template-columns: 25% 2fr;
  gap: 25px;
}
.banner {
  /* background-image: url("/Images/1-1.jpg"); */
  background-position: center;
  background-size: cover;
  border-radius: 15px;
}
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}
.product_tile {
  /* box-shadow: 0px 2px 8px -5.5px; */
  border-radius: 8px;
  transition: 0.8s;
}

@media screen and (max-width: 1010px) {
  .category_container {
    grid-template-columns: 30% 2fr;
    gap: 15px;
  }
  .products {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 720px) {
  .banner {
    height: 25vh;
  }
  .category_container {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 500px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
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

.add_to_cart2 {
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

@media screen and (max-width: 770px) {
  .overlay {
    background: transparent;
    display: block;
  }
  /* .view_details {
    display: block !important;
    background: white;
    border-radius: 50%;
    top: 5% !important;
  } */
  .add_to_cart2 {
    display: block !important;
  }
  .image_container:hover .overlay {
    display: none !important;
  }
  .image_container:hover .add_to_cart {
    display: none !important;
  }

  .image_container:hover .view_details {
    display: none !important;
  }
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

/* .product_tile:hover .view_details {
  display: block;
} */
.view_details {
  display: none;
  position: absolute;
  /* width: 100%; */
  right: 2%;
  top: 2%;
}
@media (max-width: 800px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 3rem;
  }
}
</style>
