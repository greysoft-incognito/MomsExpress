<template>
  <div>
    <div class="carousel">
      <!-- <img src="banner.svg" alt="" /> -->
    </div>
    <!-- <q-carousel
      animated
      v-model="slide"
      navigation
      class="carousel"
      :autoplay="true"
      infinite
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        v-for="(product, index) in heroImages"
        :key="product.id"
        :name="index"
        :img-src="`https://moon.5pays.store/${product.uploads[0].url}`"
      >
        <div class="hold">
          <div class="category">
            {{ product.category }}
          </div>
          <div class="price">₦{{ product.price }}</div>
          <div class="name">
            {{ product.name }}
          </div>

          <q-btn
            :to="{
              name: 'productDetail',
              params: { name: product.slug, id: product.id },
            }"
            class="shop"
          >
            Shop Now
            <i class="fa-sharp q-pl-md fa-solid fa-arrow-right"></i>
          </q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel> -->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      heroImages: [],
    };
  },
  methods: {
    getAllProducts() {
      this.$api
        .get(`product/all`)
        .then((resp) => {
          console.log(resp);
          let newData = resp.data.data;
          this.heroImages = newData.splice(41, 45);
          // this.heroImages =
          //   resp.data.data[
          //     Math.floor(Math.random() * resp.data.data.length - 1)
          //   ];
          // console.log(this.heroImages);
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
  created() {
    // this.getAllProducts();
  },
};
</script>

<style>
.carousel {
  height: 40vh !important;
  background: url("/banner.svg") no-repeat center center/cover;
  position: relative;
}
.carousel::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /* background: #333;
  opacity: 0.7; */
}
.q-carousel__control {
  z-index: 10;
}
.q-carousel__slide {
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  z-index: 10;
  min-height: 40%;
}

.hold {
  display: flex;
  justify-content: flex-end;
  text-align: left;
  align-items: flex-end;
  gap: 0rem;
  height: 100%;
  padding-right: 4rem;
  flex-direction: column;
}
.price {
  font-size: 3em;
  color: #fff;
  font-weight: 700;
}
.category {
  font-size: 3em;
  color: #fff;
  font-weight: 700;
  text-align: right;
  line-height: 1;
  max-width: 400px;
}
.name {
  font-size: 3em;
  color: #e06900;
  font-weight: 700;
}

.shop {
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 1rem;
  width: 180px;
  margin-top: 2rem;
}

.shop i {
  font-size: 20px;
}

.q-panel {
  display: flex;
  justify-content: center;
  align-items: center;
}
.q-panel > div {
  height: 50%;
  width: 100%;
}
.q-carousel__navigation {
  display: none;
}

@media (max-width: 1024px) {
  .q-panel > div {
    height: 80%;
    width: 100%;
  }
}
</style>
