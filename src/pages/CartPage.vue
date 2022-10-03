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
  <div class="q-pa-md padding-footer q-mt-md q-mb-xl big_screen_padding">
    <div v-if="cartItems.length" class="cart_section">
      <div>
        <div v-for="item in cartItems" :key="item._id">
          <div class="cart_item items-center q-my-lg">
            <div class="relative-position image_container">
              <q-img
                class="product_image"
                :src="`http://165.227.74.156/${item.product.uploads[0].url}`"
              />
              <q-btn
                @click="this.$store.cart.removeFromCart(item.product.id)"
                icon="close"
                round
                size="0.5rem"
                flat
                text-color="primary"
                class="remove_product_btn bg-white"
              />
            </div>
            <div class="item-name">
              <div>
                {{ item.name }}
              </div>
              <div class="text-caption item-price show_on_smallscreen">
                N{{ item.price }}
              </div>
              <div
                class="row justify-center items-center input_container show_on_smallscreen"
              >
                <!-- :disable="item.quantity <= 1" -->
                <q-btn
                  round
                  @click="this.$store.cart.remove(item.product.id)"
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
                  @click="this.$store.cart.add(item.product.id)"
                  round
                  size="0.65rem"
                  icon="add"
                  flat
                  class="bg-grey-3 input_btn"
                  text-color="black"
                />
              </div>
            </div>
            <div class="q-pl-sm text-caption item-price hide_on_smallscreen">
              ₦{{ item.product.price.toLocaleString() }}
            </div>

            <div
              class="row justify-center items-center input_container hide_on_smallscreen"
            >
              <!-- :disable="item.quantity <= 1" -->
              <q-btn
                round
                @click="this.$store.cart.remove(item.product.id)"
                size="0.65rem"
                icon="remove"
                flat
                class="bg-grey-3 q-mr-sm button input_btn"
                text-color="black"
              />
              <q-input
                v-model="item.quantity"
                class="text-center cart_item_input q-mr-sm"
                outlined
                dense
              />
              <q-btn
                @click="this.$store.cart.add(item.product.id)"
                round
                size="0.65rem"
                icon="add"
                flat
                class="bg-grey-3 input_btn"
                text-color="black"
              />
            </div>

            <div class="q-pl-sm text-caption item-price total_price">
              <div>
                ₦{{ (item.product.price * item.quantity).toLocaleString() }}
              </div>
            </div>
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
            <span class="text-bold"> {{ cartItems.length }}</span>
          </div>
          <div class="row justify-between text-subtitle1 q-my-xs q-px-sm">
            <span>Subtotal</span>
            <span class="text-bold">
              ₦{{ this.$store.cart.totalPrice.toLocaleString() }}</span
            >
          </div>

          <q-separator spaced />
          <div class="row text-subtitle1 q-my-xs justify-between q-px-sm">
            <span>Total Amount</span>
            <span class="text-bold">
              ₦{{ this.$store.cart.totalPrice.toLocaleString() }}
            </span>
          </div>
          <q-btn
            label="Proceed To Checkout"
            text-color="white"
            style="width: 100%"
            class="q-my-sm bg-primary"
            icon-right="arrow_forward"
            @click="checkout"
          />
          <div class="row text-subtitle2 justify-between q-px-sm">
            <span>Estimated Delivery Date</span> <br />
            <span class="text-bold">4th October 2022 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      cartItems: this.$store.cart.plate,
      totalPrice: this.$store.cart.totalPrice,
    };
  },
  computed: {
    getSubtotal(quantity, price) {
      console.log(quantity, price);
    },
    reference: function () {
      let text;
      let randomRef = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 15; i++)
        text += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      return text;
    },
    orderId: function () {
      let min = 100;
      let max = 90000;
      let num = Math.floor(Math.random() * min) + max;
      return num;
    },
  },
  methods: {
    checkout() {
      let cartArr = [];
      this.cartItems.map((item) => {
        let obj = {
          id: item.product.id,
          quantity: item.quantity,
          amount: item.product.price * item.quantity,
        };
        cartArr.push(obj);
      });
      console.log(cartArr);
      this.$api
        .post(`order/checkout`, { cart: cartArr })
        .then((resp) => {
          console.log(resp);
          console.log(resp.data.data.amount);

          this.payWithPaystack(
            resp.data.data.id,
            resp.data.data.amount,
            resp.data.data.is_paid
          );
        })
        .catch(({ response }) => {
          this.$q.notify({
            message: "Error creating order. Please try again.",
            color: "red",
            position: "top",
          });
          this.errors = response.data.errors;
        });
    },
    redirect(id) {
      this.$api
        .post(`payment/paystack/${id}`)
        .then((resp) => {
          console.log(resp);
          window.location.href = resp.data.data.url;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },

    payWithPaystack(id, amount, is_paid) {
      console.log(amount, is_paid);
      let price = amount;
      let status = is_paid;
      let router = this.$router;
      let helper = this.$helper;
      let reference = `${this.reference}`;
      let email = "moms@gmail.com";
      let paystackData = {
        amount: 1200,
        reference,
        email,
      };

      this.$q.loading.show();

      this.$api
        .post(`payment/paystack/${id}`, paystackData)
        .then((resp) => {
          this.$q.loading.hide();
          console.log(resp);
          console.log(this.orderId);
          // this.paystack(price, status).openIframe();
          let handler = PaystackPop.setup({
            key: "pk_test_285bb7525b2d3876efffce201f7a271d7c809839", // Replace with your public key
            email: "moms@gmail.com",
            amount: 100,
            ref: `${this.reference}`,
            orderID: this.orderId,
            onClose: function () {
              console.log("closed");
              helper.notify("Transaction cancelled.", "error");
            },
            callback: function (response) {
              let finalData = response;
              console.log("callback");
              console.log(response);
              // window.location.href = response.redirecturl;
              axios
                .get(`${response.redirecturl}`)
                .then((resp) => {
                  console.log(resp);
                })
                .catch(({ response }) => {
                  console.log(response);
                });
              // router.push({
              //   name: "homepage",
              //   // params: {
              //   //   ref: response.reference,
              //   //   reference: response.reference,
              //   // },
              // });
            },
          });

          handler.openIframe();

          // if (!this.$q.platform.is.mobile) {
          //   console.log(data);
          //   return this.paystack(price, status).openIframe();
          // } else {
          //   console.log(data);
          // }
          // window.location.href = data.data.url;
        })
        .catch(({ response }) => {
          this.$q.loading.hide();
          console.log(response);
        });
    },
    paystack(amount = 0, ref = null) {
      console.log(amount);
      let router = this.$router;
      let helper = this.$helper;
      const api = this.$api;
      return PaystackPop.setup({
        key: this.$config.settings.paystack_public_key, // Replace with your public key
        email: this.$store.userDetails.email,
        amount: amount * 100,
        ref: ref,
        label: this.$store.userDetails.email,
        onClose: function () {
          console.log("closed");
          helper.notify("Transaction cancelled.", "error");
          // api.delete("/payment/terminate/transaction", {
          //   data: { reference: ref },
          // });
        },
        callback: function (response) {
          console.log("callback");
          axios
            .get(`${response.redirecturl}`)
            .then((resp) => {
              console.log(resp);
            })
            .catch(({ response }) => {
              console.log(response);
            });
          // router.push({
          //   name: "homepage",
          //   // params: {
          //   //   ref: response.reference,
          //   //   reference: response.reference,
          //   // },
          // });
        },
      });
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
  display: grid;
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
  font-weight: 600;
  line-height: 1.1;
}
.item-price {
  font-size: 1.1rem;
  margin-top: 2%;
  text-align: center;
}

.show_on_smallscreen {
  display: none;
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
@media screen and (max-width: 470px) {
  .image_container {
    height: 50px;
    width: 70px;
  }

  .cart_item_input {
    width: 35%;
    display: flex;
    justify-content: center;
  }
  .hide_on_smallscreen {
    display: none;
  }
  .show_on_smallscreen {
    display: flex;
    margin: 7% 0;
  }
  .cart_item {
    grid-template-columns: 25% 1.5fr 20%;
    gap: 5px;
    align-items: flex-start;
  }
  .item-price {
    text-align: left !important;
  }
  .item-name {
    align-content: flex-start;
  }
  .input_container {
    justify-content: flex-start;
  }
  .total_price {
    margin: auto 0 !important;
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
