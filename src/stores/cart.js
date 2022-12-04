import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    plate: [],
    total: "",
    singleProducts: [],
    singleCategory: [],
  }),
  getters: {
    cart: (state) => state.meals,
    totalPrice: (state) => {
      // let findMeal = state.plate.find((mealItme) => mealItme.id === id);
      return Object.keys(state.plate).reduce((acc, id) => {
        return acc + state.plate[id].product.price * state.plate[id].quantity;
      }, 0);
    },
  },
  actions: {
    addToplate(meal, id) {
      let quantity = 1;
      let item = {
        product: meal,
        quantity,
      };
      let findMeal = this.plate.find(
        (mealItme) => mealItme.product.id === meal.id
      );

      // console.log(findMeal);
      if (findMeal) {
        findMeal.quantity++;
        quantity = findMeal.quantity;
        // console.log(quantity);
        // meal.stock = findMeal.stock;
        return;
      }
      this.plate.push(item);
    },
    add(id) {
      let findMeal = this.plate.find((mealItme) => mealItme.product.id === id);
      if (findMeal) {
        findMeal.quantity += 1;
        // meal.stock = findMeal.stock;
        return;
      }
    },
    remove(id) {
      let findMeal = this.plate.find((mealItme) => mealItme.product.id === id);
      if (!findMeal) {
        return;
      }

      findMeal.quantity -= 1;

      if (findMeal.quantity <= 0) {
        alert("Cannot Subtract");
        findMeal.quantity = 1;
        // this.plate[id].stock = 1;
        return;
      }
    },

    removeFromCart(id) {
      // console.log(id);
      // console.log(this.plate);
      this.plate = this.plate.filter((items) => items.product.id !== id);
      console.log(this.plate);
      // window.location.reload();
    },
  },
});
