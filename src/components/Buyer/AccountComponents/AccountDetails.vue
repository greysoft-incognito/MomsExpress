<template>
  <div class="text-h6 row items-center q-mb-md">
    <q-icon name="person" color="grey" class="q-mr-sm" />
    <span>Account Details</span>
  </div>

  <form @submit.prevent="updateUserDetails">
    <div class="fullname">
      <div class="q-my-sm">
        <label class="text-grey">First name</label>
        <q-input outlined v-model="fname" placeholder="First name" />
      </div>

      <div class="q-my-sm">
        <label class="text-grey"> Last name</label>
        <q-input
          class="full-width"
          v-model="lname"
          placeholder="Last name"
          outlined
        />
      </div>
    </div>

    <div class="q-my-sm">
      <label class="text-grey"> Display name</label>
      <q-input
        class="full-width"
        v-model="userInfo.name"
        placeholder="User's display name"
        outlined
        disable
      />
    </div>

    <div class="q-my-sm">
      <label class="text-grey"> Email address</label>
      <q-input
        class="full-width"
        v-model="userInfo.email"
        placeholder="User's email address"
        outlined
        disable
      />
    </div>

    <div class="q-my-sm">
      <label class="text-grey"> Phone Number</label>
      <q-input
        class="full-width"
        v-model="userInfo.phone"
        placeholder="User's phone number"
        outlined
      />
    </div>

    <div class="q-my-sm">
      <label class="text-grey"> Address</label>
      <q-input
        class="full-width"
        v-model="userInfo.address"
        placeholder="User's address"
        outlined
      />
    </div>

    <q-btn class="q-my-lg" type="submit" label="Save changes" color="primary" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      fname: "",
      lname: "",
      userInfo: this.$store.auth.userDetails,
      nameArr: [],
    };
  },
  created() {
    console.log(this.userInfo);
  },
  methods: {
    updateUserDetails() {
      let form;
      if (
        this.userInfo.phone === "" ||
        (this.userInfo.phone === null && this.userInfo.address === "") ||
        this.userInfo.address === null
      ) {
        form = {
          fname: this.fname,
          lname: this.lname,
        };
      } else if (this.userInfo.phone !== "" && this.userInfo.phone !== null) {
        form = {
          fname: this.fname,
          lname: this.lname,
          phone: this.userInfo.phone,
        };
      } else if (
        this.userInfo.address !== "" &&
        this.userInfo.address !== null
      ) {
        form = {
          fname: this.fname,
          lname: this.lname,
          address: this.userInfo.address,
        };
      } else {
        form = {
          fname: this.fname,
          lname: this.lname,
          phone: this.userInfo.phone,
          address: this.userInfo.address,
        };
      }

      console.log(form);

      this.$api
        .patch(`user/update`, form)
        .then((resp) => {
          console.log(resp);
          this.fname = "";
          this.lname = "";
          this.phone = "";
          this.$q.notify({
            message: resp.data.message,
            color: "green",
            position: "top",
          });
          this.userInfo = resp.data.data;
          this.splitFullname();
          this.$store.auth.userDetails = resp.data.data;
        })
        .catch(({ response }) => {
          this.$q.notify({
            message: response.data.message,
            color: "red",
            position: "top",
          });
          this.errors = response.data.errors;
        });
    },
    async splitFullname() {
      if (this.userInfo.name !== null) {
        this.nameArr = await this.userInfo.name.split(" ");
        this.fname = this.nameArr[0];
        this.lname = this.nameArr[1];
      }
    },
  },
  created() {
    this.splitFullname();
  },
};
</script>
<style scoped></style>
