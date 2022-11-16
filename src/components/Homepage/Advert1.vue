<template>
  <div class="advert1_container big_screen_padding">
    <div class="left"></div>
    <!-- <div class="right"></div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.advert1_container {
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  gap: 25px;
  margin: 5% 0 !important;
}
.left {
  background-image: url("/banner.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
  border-radius: 8px;
}

.right {
  border-radius: 8px;
  background-image: url("/Images/1-2.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
}
@media screen and (max-width: 850px) {
  .advert1_container {
    display: block;
  }
  .right {
    display: none;
  }
}
</style>
