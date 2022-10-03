<template>
  <div>
    <q-carousel
      animated
      v-model="slide"
      navigation
      class="carousel"
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
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
          this.heroImages =
            resp.data.data[
              Math.floor(Math.random() * resp.data.data.length - 1)
            ];
          console.log(this.heroImages);
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
    this.getAllProducts();
  },
};
</script>

<style>
.carousel {
  height: 60vh !important;
}
</style>
