import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    plate: [],
    total: "",
    singleProducts: [],
    singleCategory: [],
    meals: [
      {
        id: 0,
        img: "Images/2-1.jpg",
        name: "Jollof Rice",
        price: 700,
        quantity: 1,
      },
      {
        id: 1,
        img: "Images/2-1.jpg",
        name: "Jollof Rice",
        price: 700,
        quantity: 1,
      },
      {
        id: 2,
        img: "Images/2-1.jpg",
        name: "Jollof Rice",
        price: 700,
        quantity: 1,
      },
    ],
  }),
  getters: {
    cart: (state) => state.meals,
    totalPrice: (state) => {
      // let findMeal = state.plate.find((mealItme) => mealItme.id === id);
      return Object.keys(state.plate).reduce((acc, id) => {
        return acc + state.plate[id].product.price * state.plate[id].quantity;
      }, 0);
    },
    // totalPrice: (state) => {
    //   return Object.keys(state.plate).reduce((acc, id) => {
    //     return acc + state.meals[id].price * state.plate[id].quantity;
    //   }, 0);
    // },
  },
  actions: {
    addToplate(meal, id) {
      console.log(id, meal);
      console.log(this.plate);
      // console.log(this.meals[id].id);
      let quantity = 1;
      // // console.log("lets fly");mealItme.product.id === meal.id
      let item = {
        product: meal,
        quantity,
      };
      let findMeal = this.plate.find(
        (mealItme) => mealItme.product.id === meal.id
        // console.log(mealItme.product.id, meal.id);
      );

      console.log(findMeal);
      if (findMeal) {
        findMeal.quantity++;
        quantity = findMeal.quantity;
        console.log(quantity);
        // meal.stock = findMeal.stock;
        return;
      }
      this.plate.push(item);
      console.log(this.plate);
    },
    add(id) {
      console.log("add", id);
      // console.log(this.meals[id]);
      // if (this.meals[id] && this.plate[id]) {
      //   this.meals[id].stock += 1;
      //   this.plate[id].stock += 1;
      //   console.log(this.plate[id]);
      // } else {
      //   this.meals[id] = {
      //     id,
      //     stock: 1,
      //   };
      //   this.plate[id] = {
      //     id,
      //     stock: 1,
      //   };
      // }

      let findMeal = this.plate.find((mealItme) => mealItme.product.id === id);
      console.log(findMeal);
      if (findMeal) {
        findMeal.quantity += 1;
        // meal.stock = findMeal.stock;
        return;
      }

      // let cart_items = JSON.parse(localStorage.getItem('pinia_cart'))
      // console.log(cart_items.meals)
    },
    remove(id) {
      let findMeal = this.plate.find((mealItme) => mealItme.id === id);

      if (!findMeal) {
        return;
      }
      // if (!this.meals[id] && !this.meals[id]) {
      //   return;
      // }

      // this.meals[id].stock -= 1;
      // this.plate[id].stock -= 1;
      // console.log(this.plate[id]);
      findMeal.quantity -= 1;
      // findMeal.stock -= 1;
      // console.log(this.plate[id]);

      if (findMeal.quantity <= 0) {
        alert("Cannot Subtract");
        findMeal.quantity = 1;
        // this.plate[id].stock = 1;
        return;
      }
      // if (this.meals[id].stock <= 0 && this.plate[id].stock) {
      //   alert("Cannot Subtract");
      //   this.meals[id].stock = 1;
      //   this.plate[id].stock = 1;
      //   return;
      // }
    },

    removeFromCart(id) {
      console.log(id);
      console.log(this.plate);
      this.plate = this.plate.filter((items) => items.product.id !== id);
      console.log(this.plate);
      window.location.reload();
    },
  },
});
