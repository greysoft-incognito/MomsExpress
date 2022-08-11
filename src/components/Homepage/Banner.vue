<template>
  <div class="big_screen_padding">
    <div class="banner_container">
      <div class="row items-center">
        <q-icon size="2.5rem" class="q-mr-sm" name="local_shipping" />
        <div>
          <div class="text-bold">Free Shipping & Returns</div>
          <div>For all orders over $99</div>
        </div>
      </div>

      <div class="row items-center">
        <q-icon size="2.5rem" class="q-mr-sm" name="work_outline" />
        <div>
          <div class="text-bold">Secure Payment</div>
          <div>We ensure secure payment</div>
        </div>
      </div>

      <div class="row items-center">
        <q-icon size="2.5rem" class="q-mr-sm" name="paid" />
        <div>
          <div class="text-bold">Money Back Guarantee</div>
          <div>Any back within 30 days</div>
        </div>
      </div>

      <div class="row items-center">
        <q-icon size="2.5rem" class="q-mr-sm" name="support_agent" />
        <div>
          <div class="text-bold">Customer Support</div>
          <div>Call or email us 24/7</div>
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
</style>
