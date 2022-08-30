<template>
  <q-page
    v-if="!cartItems.length"
    class="column flex-center big_screen_padding"
  >
    <div class="text-center text-primary text-h5 text-bold">
      No Item in cart
    </div>
    <q-icon name="shopping_cart" size="3rem" color="primary" />
  </q-page>
  <div class="q-pa-md padding-footer big_screen_padding">
    <div v-if="cartItems.length" class="cart_section">
      <div>
        <div v-for="item in cartItems" :key="item._id">
          <div class="cart_item items-center q-my-lg">
            <div class="relative-position image_container">
              <q-img
                class="product_image"
                :src="`http://165.227.74.156/${item.uploads[0].url}`"
              />
              <!-- {{ item.uploads[0].src }} -->
              <q-btn
                @click="this.$store.cart.removeFromCart(item.id)"
                icon="close"
                round
                size="0.5rem"
                flat
                text-color="primary"
                class="remove_product_btn bg-white"
              />
            </div>
            <div class="item-name">{{ item.name }}</div>
            <div class="q-pl-sm text-caption item-price">N{{ item.price }}</div>

            <div class="row justify-center items-center input_container">
              <!-- :disable="item.quantity <= 1" -->
              <q-btn
                round
                @click="this.$store.cart.remove(item.id)"
                size="0.65rem"
                icon="remove"
                flat
                class="bg-grey-3 q-mr-sm button input_btn"
                text-color="black"
              />
              <q-input
                v-model="item.stock"
                class="text-center cart_item_input q-mr-sm"
                outlined
                dense
              />
              <q-btn
                @click="this.$store.cart.add(item.id)"
                round
                size="0.65rem"
                icon="add"
                flat
                class="bg-grey-3 input_btn"
                text-color="black"
              />
            </div>

            <div class="q-pl-sm text-caption item-price">
              N{{ this.$store.cart.totalPrice }}
            </div>
            <!-- <div class="cart-detail q-px-xs text-black relative-position"> -->
            <!-- </div> -->
            <!-- <q-btn
              label="Remove"
                @click="deleteProduct(item.product)"
                no-caps
                style="width: 100%"
                size="0.8rem"
                icon="delete"
                outline
                color="primary"
                class="q-mx-auto"
                /> -->
          </div>

          <q-separator class="q-my-md" />
        </div>
      </div>
      <!-- CheckOut Section -->
      <!-- v-show="cartItems[0]" -->
      <div>
        <div class="bg-grey-1 text-black text-caption q-py-md q-px-sm">
          <div class="text-h5 text-left text-bold q-mb-md">CART TOTALS</div>
          <div class="row justify-between text-subtitle1 q-my-xs q-px-sm">
            <span>No. of Items</span>
            <span class="text-bold"> 16</span>
          </div>
          <div class="row justify-between text-subtitle1 q-my-xs q-px-sm">
            <span>Subtotal</span>
            <span class="text-bold"> $1000</span>
          </div>
          <div class="row text-subtitle1 q-my-xs justify-between q-px-sm">
            <span>Shipping Fee</span> <span class="text-bold"> N0 </span>
          </div>
          <q-separator spaced />
          <div class="row text-subtitle1 q-my-xs justify-between q-px-sm">
            <span>Total Amount</span>
            <span class="text-bold">
              {{ this.$store.cart.totalPrice }}
            </span>
            <!-- <span class="text-bold"> $1000 </span> -->
          </div>
          <q-btn
            label="Proceed To Checkout"
            text-color="white"
            style="width: 100%"
            class="q-my-sm bg-primary"
            to="/checkout"
            icon-right="arrow_forward"
          />
          <div class="row text-subtitle2 justify-between q-px-sm">
            <span>Estimated Delivery Date</span> <br />
            <span class="text-bold">4th May 2022 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import CartItem from "../components/Cart/CartItem.vue";

export default {
  data() {
    return {
      cartItems: this.$store.cart.plate,
    };
  },
  computed: {
    getSubtotal(quantity, price) {
      console.log(quantity, price);
    },
  },
  // components: { CartItem },
};
</script>

<style scoped>
.cart_section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}
.product_image {
  width: 100%;
  height: 100%;
}
.image_container {
  height: 120px;
  width: 150px;
}
.remove_product_btn {
  position: absolute;
  top: 3%;
  right: 3%;
}
.cart_item_input {
  width: 40%;
  text-align: center;
}

.cart_item {
  /* padding: 0 5%; */
  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  align-items: center;
}
.cart_item_image {
  height: 150px;
  width: 20%;
  border-radius: 2% 0 0 0;
}
/* .cart-detail {
  width: 40%;
} */

.item-name {
  font-size: 1.2rem;
  /* max-width: 70%; */
  line-height: 1.1;
}
.item-price {
  font-size: 1.1rem;
  margin-top: 2%;
  text-align: center;
}

@media screen and (max-width: 1150px) {
  .item-name,
  .item-price {
    font-size: 1rem !important;
  }
  .image_container {
    height: 100px;
    width: 120px;
  }
}

@media screen and (max-width: 1022px) {
  .cart_section {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 710px) {
  .image_container {
    height: 80px;
    width: 100px;
  }
  .item-name,
  .item-price {
    font-size: 0.9rem !important;
  }
  .cart_item {
    grid-template-columns: 1fr 1fr 1fr 30% 1fr;
  }
}

@media screen and (max-width: 600px) {
  .cart-item {
    /* padding: 0 5%; */
  }
  .image_container {
    height: 60px;
    width: 80px;
  }
  .remove_product_btn {
    font-size: 0.45rem !important;
  }
  .input_btn {
    font-size: 0.5rem !important;
  }
}

@media screen and (max-width: 540px) {
  .cart_item {
    grid-template-columns: 1fr 1fr 1fr 25% 1fr;
  }
}

@media screen and (max-width: 485px) {
  .cart-item {
    /* padding: 0 5%; */
  }
  .cart_item_image {
    height: 110px;
    width: 40%;
  }

  .item-name {
    font-size: 1rem;
  }
  .item-price {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 370px) {
  .cart-item {
    /* padding: 0 5%; */
  }
  .cart_item_image {
    height: 100px;
  }

  .cart-detail {
    width: 50%;
  }

  .cart_item_input {
    width: 20%;
    font-size: 0.7rem;
    position: static;
    margin: 1% 0 0;
    height: 20px !important;
  }

  .button {
    font-size: 0.6rem !important;
  }

  .item-name {
    font-size: 0.8rem;
  }
  .item-price {
    font-size: 0.7rem;
    margin: 0.5% 0 0;
  }
}
.row > div {
  padding: 0.5%;
}

.row + .row {
  margin-top: 1rem;
}
@media screen and (max-width: 830px) {
  .padding-footer {
    padding-bottom: 15%;
  }
}

@media screen and (max-width: 550px) {
  .padding-footer {
    padding-bottom: 19%;
  }
}

@media screen and (max-width: 410px) {
  .padding-footer {
    padding-bottom: 25%;
  }
}

@media screen and (max-width: 320px) {
  .padding-footer {
    padding-bottom: 28%;
  }
}
</style>
