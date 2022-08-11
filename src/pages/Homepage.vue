<template>
  <div class="">
    <Hero />
    <Banner />
    <Advert1 />
    <TopCategories />
    <PopularDepartments />
    <Advert2 />
    <Category1 />
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
export default {
  components: {
    Hero,
    Banner,
    Advert1,
    TopCategories,
    PopularDepartments,
    Advert2,
    Category1,
  },
};
</script>

<style scoped></style>
