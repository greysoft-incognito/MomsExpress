<template>
  <div class="">
    <Hero />
    <Banner />
    <Advert1 />
    <TopCategories />
    <PopularDepartments />
    <Advert2 />
    <!-- <Category1 /> -->
    <div v-if="categories.length">
      <Categoryy
        :products="phoneAndTablets"
        :skeleton="skeleton"
        :banner="`https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/blt9c92e7e4fe2d5eb0/60b8e4bea8cd6a0a26e295de/Oppo_Find_X3PRO_1500x1500px_image4.png`"
      />
      <Categoryy
        :products="clothes"
        :skeleton="skeleton"
        :banner="`https://www.stylostreet.com/wp-content/uploads/2022/01/casual-slim-fit-coat-for-men-sale-collection-3-683x1024.jpg`"
      />
      <Categoryy
        :products="electronics"
        :skeleton="skeleton"
        :banner="`https://d1csarkz8obe9u.cloudfront.net/posterpreviews/red-cyber-monday-sale-banner-design-template-498b464962b0328971e80ebdfb7a813a_screen.jpg?ts=1604377456`"
      />
    </div>
    <!-- <Category1 /> -->
    <!-- <Category2 /> -->
    <!-- <Advert1 /> -->
    <!-- <Category3 /> -->
  </div>
</template>

<script>
import Hero from "src/components/Homepage/Hero.vue";
import Banner from "src/components/Homepage/Banner.vue";
import Advert1 from "src/components/Homepage/Advert1.vue";
import TopCategories from "src/components/Homepage/TopCategories.vue";
import PopularDepartments from "../components/Homepage/PopularDepartments.vue";
import Advert2 from "src/components/Homepage/Advert2.vue";
import Category1 from "src/components/Homepage/Category1.vue";
import Categoryy from "src/components/Homepage/Categoryy.vue";
import Category2 from "src/components/Homepage/Category2.vue";
import Category3 from "src/components/Homepage/Category3.vue";
export default {
  components: {
    Hero,
    Banner,
    Advert1,
    TopCategories,
    PopularDepartments,
    Advert2,
    Category1,
    Categoryy,
    Category2,
    Advert1,
    Category3,
  },

  created() {
    if (this.exactCat) {
      this.getProducts();
    }
    this.getCategory();
  },

  data() {
    return {
      skeleton: true,
      categories: [],
      exactCat: "",
      phoneAndTablets: [],
      electronics: [],
      clothes: [],
      skele: ["ske", "ske", "ske", "ske", "ske", "ske", "ske"],
    };
  },
  methods: {
    getCategory() {
      this.$api
        .get("category/all")
        .then((resp) => {
          console.log(resp);
          this.categories = resp.data.data;
          this.phoneAndTablets = this.categories[0];
          this.electronics = this.categories[1];
          this.clothes = this.categories[2];
          this.skeleton = false;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.errors = response.data.errors;
        });
    },
  },
};
</script>

<style scoped></style>
