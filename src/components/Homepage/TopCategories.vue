<template>
  <div class="top_categories_container big_screen_padding bg-white">
    <div class="text-center text-bold text-h6 q-mb-md">
      Top Categories of The Month
    </div>

    <div class="cards_container">
      <div
        v-for="n in 6"
        :key="n"
        class="column bg-grey-2 border_card card"
        @click="$router.push('/category')"
      >
        <q-img class="border_card" src="Images/2-1.jpg" />
        <div class="text-center text-subtitle1 text-bold q-my-xs">Fashion</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top_categories_container {
  padding-top: 4%;
  padding-bottom: 4%;
}
.cards_container {
  display: grid;
  grid-template-columns: repeat(6, 16%);
  gap: 15px;
}

.border_card {
  border-radius: 15px;
}
.card {
  cursor: pointer;
  transition: 0.3s;
}

.card:hover {
  transform: translate(0, -10px);
}
</style>
