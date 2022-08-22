import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    plate: [],
    total: "",
    meals: [
      {
        id: 0,
        img: "/images/swallow1.jpeg",
        name: "Jollof Rice",
        price: 700,
        quantity: 1,
      },
      {
        id: 1,
        img: "/images/greyeats1.jpeg",
        name: "Jollof Rice",
        price: 700,
        quantity: 1,
      },
      {
        id: 2,
        img: "/images/greyeats2.jpeg",
        name: "Jollof Rice",
        price: 700,
        quantity: 1,
      },
      {
        id: 3,
        img: "/images/greyeats3.jpeg",
        name: "Jollof Rice",
        price: 700,
        quantity: 1,
      },
      {
        id: 4,
        img: "/images/greyeats4.jpeg",
        name: "Jollof Rice",
        price: 700,
        quantity: 1,
      },
      {
        id: 5,
        img: "/images/greyeats5.jpeg",
        name: "Jollof Rice",
        price: 700,
        quantity: 1,
      },
    ],
  }),
  getters: {
    cart: (state) => state.meals,
    total: (state) => {
      return Object.keys(state.plate).reduce((acc, id) => {
        return acc + state.meals[id].price * state.plate[id].quantity;
      }, 0);
    },
  },
  actions: {
    addToplate(meal, id) {
      console.log(id);
      console.log(this.meals[id].id);

      // console.log("lets fly");
      let findMeal = this.plate.find((mealItme) => mealItme.id === meal.id);
      if (findMeal) {
        findMeal.quantity += 1;
        meal.quantity = findMeal.quantity;
        return;
      }

      this.plate.push(meal);
    },
    add(id) {
      console.log("add", id);
      console.log(this.meals[id]);
      if (this.meals[id]) {
        this.meals[id].quantity += 1;
        console.log(this.plate[id])

      } else {
        this.meals[id] = {
          id,
          quantity: 1,
        };
      }
    },
    remove(id) {
      if (!this.meals[id]) {
        return;
      }

      this.meals[id].quantity -= 1;
      console.log(this.plate[id])

      if (this.meals[id].quantity <= 0) {
        alert("Cannot Subtract");
        this.meals[id].quantity = 1;
        return;
      }
    },

    removeFromCart(id){
        console.log(id)
        console.log(this.plate)

        this.plate = this.plate.filter(items=> items.id !== id)
        console.log(this.plate)
    }
  },
});
