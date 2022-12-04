<template>
  <div class="advert1_container big_screen_padding">
    <div class="left"></div>
    <div class="middle"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.advert1_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin: 5% 0 !important;
}
.left {
  background-image: url("/tablets.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 230px;
  border-radius: 8px;
}

.middle {
  border-radius: 8px;
  background-image: url("/phones.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 230px;
}

.right {
  border-radius: 8px;
  background-image: url("/laptops.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 230px;
}
@media screen and (max-width: 850px) {
  .advert1_container {
    grid-template-columns: 1fr;
  }
  .right {
    display: none;
  }
}
</style>
