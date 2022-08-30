<template>
  <div class="big_screen_padding bg-white main_container">
    <div class="row q-my-sm text-bold justify-between">
      <div class="text-h6 text-bold">Kitchen Utensils</div>
      <router-link to="/category">
        <span>More Products</span> <q-icon name="chevron_right" />
      </router-link>
    </div>
    <!-- {{ products }} -->
    {{ exactCat }}
    <q-separator class="q-my-md" />
    <div v-if="skeleton">
      <div style="height: 100%; gap: 1rem" class="row no-wrap lar items-start">
        <q-card
          v-for="type in skele"
          :key="type"
          flat
          style="max-width: 300px; height: 100%; width: 300px"
        >
          <q-skeleton height="150px" square />

          <q-card-section>
            <q-skeleton type="text" class="text-subtitle1" />
            <q-skeleton type="text" width="50%" class="text-subtitle1" />
            <q-skeleton type="text" class="text-caption" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <select hidden v-model="exactCat" name="" id="">
      <option v-for="cat in categories" :key="cat.id" :value="cat.slug">
        {{ cat.name }}
      </option>
    </select>
    <div class="category_container bg-">
      <div class="banner"></div>
      <div class="products">
        <div
          v-for="product in products"
          :key="product.id"
          class="column q-mb-md text-center border_card product_tile"
        >
          <!-- {{ product.uploads[0].url }} -->
          <div class="image_container">
            <!-- <q-img class="border_card image" src="Images/2-1.jpg" /> -->
            <q-img
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
              :to="{
                name: 'productDetail',
                params: { name: product.slug, id: product.id },
              }"
            />

            <div class="view_details">
              <q-btn
                icon="fa-regular fa-heart"
                class="non_hover_btn"
                no-caps
                size="0.75rem"
                round
                flat
                color="primary"
              />

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

          <div class="row justify-center q-my-sm">
            <q-rating
              v-model="ratingModel"
              size="1.2rem"
              color="grey"
              readonly
              :color-selected="ratingColors"
            />
            <span>( 2 reviews)</span>
          </div>
          <div class="text-bold">${{ product.price }}</div>
        </div>
        <SingleProductTile v-for="n in 6" :key="n" />
      </div>
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
      ratingModel: ref(4),
      ratingColors: ["green"],
    };
  },
  created() {
    this.getProducts();
    this.getCategory();
  },

  data() {
    return {
      skeleton: true,
      products: [],
      categories: [],
      exactCat: "phones-and-tablets",
      skele: ["ske", "ske", "ske", "ske", "ske", "ske", "ske"],
    };
  },

  methods: {
    getProducts() {
      this.loading = true;
      this.$api
        .get("product/all")
        .then((resp) => {
          console.log(resp);
          this.products = resp.data.data;
          thisproducts.splice(6, resp.data.data.length - 1);
          this.$store.cart.meals = resp.data.data;
          this.skeleton = false;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.errors = response.data.errors;
        });
    },

    getCategory() {
      this.loading = true;
      this.$api
        .get("category/all")
        .then((resp) => {
          console.log(resp);
          this.categories = resp.data.data;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.errors = response.data.errors;
        });
    },
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
  background-image: url("/Images/1-1.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 15px;
}
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
@media screen and (max-width: 720px) {
  .category_container {
    grid-template-columns: 1fr;
  }
  .banner {
    height: 25vh;
  }
}

@media screen and (max-width: 500px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
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
}
@media screen and (max-width: 720px) {
  .category_container {
    grid-template-columns: 1fr;
  }
  .banner {
    height: 25vh;
  }
}

@media screen and (max-width: 500px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
  }
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
