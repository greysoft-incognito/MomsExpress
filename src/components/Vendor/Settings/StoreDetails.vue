<template>
  <div class="q-px-md q-py-lg">
    <div class="bg-grey-3 shop_banner column flex-center">
      <q-icon size="3.5rem" name="wallpaper" color="grey" />
      <div class="q-my-sm text-h5 text-weight-light">Shop Banner/Image</div>
    </div>
    <div class="q-mt-lg">
      <div class="q-my-xs text-subtitle2 text-bold">Shop Name</div>
      <q-input class="full-width" placeholder="shop name" outlined dense />
    </div>

    <div class="q-mt-lg">
      <div class="q-my-xs text-subtitle2 text-bold">Tagline</div>
      <q-input class="full-width" placeholder="shop name" outlined dense />
    </div>

    <div class="q-mt-lg">
      <div class="q-my-xs text-subtitle2 text-bold">Description/About</div>
      <q-input class="full-width" placeholder="shop name" outlined dense />
    </div>

    <div class="q-mt-lg row">
      <q-space />
      <q-btn
        label="Save details "
        class="bordered-btn"
        color="primary"
        no-caps
        size="1.1rem"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shop_banner {
  height: 250px;
  border-radius: 15px;
}
</style>
