<template>
  <div class="category_container bg-white big_screen_padding">
    <div class="banner"></div>
    <div class="products">
      <div
        v-for="n in 8"
        :key="n"
        class="column q-mb-md text-center product_tile border_card"
      >
        <q-img class="border_card" src="Images/2-1.jpg" />
        <div class="text-subtitle1 q-mt-sm">Cooking Pot</div>
        <div class="row justify-center q-my-sm">
          <q-rating
            v-model="ratingModel"
            size="1.2rem"
            color="grey"
            :color-selected="ratingColors"
          />
          <span>( 2 reviews)</span>
        </div>
        <div class="text-bold">$53.00</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.category_container {
  padding-bottom: 3%;
  padding-top: 3%;
  display: grid;
  grid-template-columns: 25% 75%;
  gap: 25px;
}
.banner {
  /* background-color: red; */
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
