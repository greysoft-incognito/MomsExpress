import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    plate: [],
    total: "",
    singleProducts:[],
    singleCategory:[],
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
        console.log(state.plate[id])
        return acc + state.plate[id].price * state.plate[id].stock;
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
      console.log(id);
      // console.log(this.meals[id].id);

      // console.log("lets fly");
      let findMeal = this.plate.find((mealItme) => mealItme.id === meal.id);
      if (findMeal) {
        findMeal.stock += 1;
        meal.stock = findMeal.stock;
        return;
      }

      this.plate.push(meal);
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

      let findMeal = this.plate.find((mealItme) => mealItme.id === id);
      if (findMeal) {
        findMeal.stock += 1;
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
      findMeal.stock -= 1;
      // findMeal.stock -= 1;
      // console.log(this.plate[id]);

      if (findMeal.stock <= 0) {
        alert("Cannot Subtract");
        findMeal.stock = 1;
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
      this.plate = this.plate.filter((items) => items.id !== id);
      console.log(this.plate);
      window.location.reload()
    },
  },
});
