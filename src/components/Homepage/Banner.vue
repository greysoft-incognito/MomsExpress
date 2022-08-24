<template>
  <div class="big_screen_padding banner">
    <div class="banner_container">
      <div class="row items-center item">
        <q-icon size="2.5rem" class="q-mr-sm icon" name="local_shipping" />
        <div>
          <div class="sup_text text-bold">Free Shipping & Returns</div>
          <div class="sub_text">For all orders over $99</div>
        </div>
      </div>

      <div class="row items-center item">
        <q-icon size="2.5rem" class="q-mr-sm icon" name="paid" />
        <div>
          <div class="sup_text text-bold">Money Back Guarantee</div>
          <div class="sub_text">Any back within 30 days</div>
        </div>
      </div>

      <div class="row items-center item">
        <q-icon size="2.5rem" class="q-mr-sm icon" name="work_outline" />
        <div>
          <div class="sup_text text-bold">Secure Payment</div>
          <div class="sub_text">We ensure secure payment</div>
        </div>
      </div>

      <div class="row items-center item">
        <q-icon size="2.5rem" class="q-mr-sm icon" name="support_agent" />
        <div>
          <div class="sup_text text-bold">Customer Support</div>
          <div class="sub_text">Call or email us 24/7</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner_container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgb(128, 128, 128, 0.3);
  margin: 4% 0;
  padding: 2% 4%;
}
@media screen and (max-width: 1001px) {
  .banner_container {
    place-items: center;
  }
  .item {
    margin-bottom: 4%;
    display: grid;
    place-items: center;
    text-align: center;
    align-items: center;
  }
}
@media screen and (max-width: 800px) {
  .banner_container {
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    border: none;
  }
  .icon {
    border: 1px solid rgb(128, 128, 128, 0.3);
    border-radius: 50%;
    padding: 5%;
    font-size: 1.8rem !important;
  }
}

@media screen and (max-width: 450px) {
  .banner {
    padding: 0;
  }
  .banner_container {
    gap: 5px;
  }
  .sub_text {
    display: none;
  }
  .sup_text {
    font-weight: normal;
    font-size: 0.9rem;
  }
}
</style>
