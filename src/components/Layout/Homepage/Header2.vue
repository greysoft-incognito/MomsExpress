<template>
  <q-toolbar class="q-my-sm big_screen_padding header_two">
    <div
      class="row q-my-sm header_two_cont justify-between items-align full-width"
    >
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
        class="hamburger_btn"
        color="primary"
      />
      <div class="image_container flex flex-center">
        <q-img src="Images/lorem_logo.svg" />
      </div>

      <div class="row text-black items-center">
        <div class="flex input_div flex-center q-mr-lg">
          <q-input
            placeholder="Search for products"
            class="search_input"
            outlined
            dense
          >
            <template v-slot:prepend>
              <q-icon name="search" color="primary" />
              <q-separator class="q-ma-sm" vertical />
            </template>
          </q-input>
        </div>

        <div class="buttons row items-center">
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
              v-if="this.$store.cart.plate.length != 0"
              color="red"
              class="text-bold"
              floating
              transparent
            >
              {{ this.$store.cart.plate.length }}
            </q-badge>
          </q-btn>
        </div>
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

@media screen and (max-width: 990px) {
  .search_input {
    width: 350px;
  }
  .header_two_cont {
    margin: 0;
  }
}

@media screen and (max-width: 850px) {
  .search_input {
    width: 300px;
  }
}

@media screen and (max-width: 770px) {
  .input_div {
    display: none;
  }
  .header_two_cont {
    /* justify-content: left; */
  }
  .buttons {
    justify-self: end !important;
    align-self: flex-end !important;
  }
}
</style>
