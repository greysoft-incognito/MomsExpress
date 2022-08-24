<template>
  <div class="advert1_container big_screen_padding">
    <div class="left">
      <div class="text-white q-pa-lg">
        <div class="text-subtitle1">
          Get up to <span class="text-orange text-bold">NATURAL PROCESS</span>
        </div>
        <div class="text-h5 text-bold">Cosmetic Makeup Professional</div>
        <div class="text-h6">Collection</div>

        <div class="q-mt-lg text-bold">
          Starting at <span class="text-orange text-bold">$170.00</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="text-black q-pa-lg">
        <div class="text-subtitle1">TRENDING NOW</div>
        <div class="text-h5 text-bold">Women's Lifestyle Collection</div>
        <div class="text-h6">Collection</div>

        <div class="q-mt-lg text-bold">
          Starting at <span class="text-orange text-bold">$90.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.advert1_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin: 5% 0 !important;
}
.left {
  background-image: url("/Images/3-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
  border-radius: 8px;
}

.right {
  border-radius: 8px;
  background-image: url("/Images/3-2.jpg");
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
