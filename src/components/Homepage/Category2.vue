<template>
  <div class="big_screen_padding bg-white main_container">
    <div class="row q-my-sm text-bold justify-between">
      <div class="text-h6 text-bold">Electronics</div>
      <router-link to="/category">
        <span>More Products</span> <q-icon name="chevron_right" />
      </router-link>
    </div>
    <q-separator class="q-my-md" />
    <div class="category_container bg-">
      <div class="banner"></div>
      <div class="products">
        <SingleProductTile v-for="n in 8" :key="n" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProductTile from "../Product/SingleProductTile.vue";
export default { components: { SingleProductTile } };
</script>

<style scoped>
.main_container {
  padding-bottom: 3%;
  padding-top: 3%;
}
.category_container {
  display: grid;
  grid-template-columns: 25% 75%;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}
</style>
