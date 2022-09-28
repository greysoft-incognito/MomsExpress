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
      const token = data.data[0];
      const user = data.data[1];

      localStorage.setItem("token", token);
      localStorage.setItem("userdet", JSON.stringify(user));
      this.userDetails = data;
      this.token = token;
    },
    setVendorDetails(data) {
      console.log(data);
      const vendorDetails = data.data;
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
        .catch(({response}) => {
          console.log({ response });
          this.token = null;
          this.userDetails = null;
          userDetails = null;
          localStorage.setItem("token", "");
          localStorage.setItem("userdet", "");
        });
    },
  },
});
