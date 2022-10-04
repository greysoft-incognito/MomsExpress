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
        :products="home_equipments"
        :skeleton="skeleton"
        :banner="`https://images.unsplash.com/photo-1628736878100-64f39c9b22c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80`"
      />
      <Categoryy
        :products="clothes"
        :skeleton="skeleton"
        :banner="`https://portotheme.com/html/wolmart/assets/images/menu/banner-2.jpg`"
      />
      <Categoryy
        :products="mens_fashion"
        :skeleton="skeleton"
        :banner="`https://www.stylostreet.com/wp-content/uploads/2022/01/casual-slim-fit-coat-for-men-sale-collection-3-683x1024.jpg`"
      />
      <Categoryy
        :products="electronics"
        :skeleton="skeleton"
        :banner="`https://portotheme.com/html/wolmart/assets/images/demos/demo1/banners/3.jpg`"
      />
      <Categoryy
        :products="computers"
        :skeleton="skeleton"
        :banner="`https://portotheme.com/html/wolmart/assets/images/menu/banner-4.jpg`"
      />
      <Categoryy
        :products="women_fashion"
        :skeleton="skeleton"
        :banner="`https://portotheme.com/html/wolmart/assets/images/demos/demo1/banners/2.jpg`"
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
      home_equipments: [],
      mens_fashion: [],
      computers: [],
      women_fashion: [],
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
          this.electronics = this.categories[6];
          this.computers = this.categories[7];
          this.mens_fashion = this.categories[4];
          this.clothes = this.categories[2];
          this.women_fashion = this.categories[10];
          this.home_equipments = this.categories[9];
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
