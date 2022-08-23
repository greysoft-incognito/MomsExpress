import { useAuthStore } from "stores/auth";
import { useCartStore } from "stores/cart";


export default {
  auth: useAuthStore(),
  cart:useCartStore(),

}