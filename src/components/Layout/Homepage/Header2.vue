<template>
  <q-toolbar class="q-my-sm big_screen_padding">
    <div class="row q-my-md justify-between items-align full-width">
      <div class="image_container flex flex-center">
        <q-img src="Images/lorem_logo.svg" />
      </div>

      <div class="row text-black items-center">
        <div class="flex flex-center q-mr-lg">
          <q-input
            placeholder="Search for products"
            class="search_input"
            outlined
          >
            <template v-slot:prepend>
              <q-icon name="search" color="primary" />
              <q-separator class="q-ma-sm" vertical />
            </template>
          </q-input>
        </div>
        <q-separator class="q-mx-xs q-my-md" vertical />
        <div>
          <q-btn
            color="primary"
            flat
            round
            class="q-mx-sm"
            icon="favorite_border "
          />
        </div>

        <q-btn
          class="q-mr-md q-my-md"
          color="primary"
          round
          flat
          icon="shopping_cart"
          to="/cart"
        >
          <q-badge
            v-if="cartNumber != 0"
            color="red"
            class="text-bold"
            floating
            transparent
          >
            2
          </q-badge>
        </q-btn>
      </div>
    </div>
  </q-toolbar>
</template>

<script>
export default {
  props: ["toggleLeftDrawer"],
  data() {
    return {
      cartNumber: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
.layout_header {
  height: 70px !important;
}
.search_input {
  width: 450px;
}
@media screen and (min-width: 770px) {
  .hamburger_btn {
    display: none;
  }
}

.image_container {
  width: 20%;
}
</style>
