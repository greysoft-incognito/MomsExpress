import { defineStore } from "pinia";
import axios from "axios";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: "",
    userDetails: null,
    token: localStorage.getItem("token") || "",
    vendorDetails:null
  }),
  getters: {
    registrationForm: (state) => state.userDetails,
  },
  actions: {
    setUserDetails(data) {
      console.log(data);
      const token = data.token;
      const user = data.payload;

      localStorage.setItem("token", token);
      localStorage.setItem("userdet", JSON.stringify(user));
      this.userDetails = data;
      this.token = token;
    },
    setVendorDetails(data) {
      console.log(data);
      const vendorDetails = data.payload;
      localStorage.setItem("vendorDetails", JSON.stringify(vendorDetails));
      this.vendorDetails = data.payload;
    },

    async logOut(userDetails) {
      return axios
        .post("/logout")
        .then((e) => {
          this.token = null;
          this.userDetails = null;
          userDetails = null;
        })
        .catch((e) => {
          console.log({ e });
          this.token = null;
          this.userDetails = null;
          userDetails = null;
          localStorage.setItem("token", "");
          localStorage.setItem("userdet", "");
        });
    },
  },
});
