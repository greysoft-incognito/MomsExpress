<template>
  <div class="q-px-md q-py-lg">
    <div>
      <div class="text-h6">General Information</div>

      <div class="q-mt-md">
        <div class="q-my-xs text-subtitle2 text-bold">Full name</div>
        <q-input
          class="input_field"
          placeholder="Store owner's full name"
          v-model="fullname"
          outlined
          dense
        />
      </div>

      <div class="q-mt-lg">
        <div class="q-my-xs text-subtitle2 text-bold">Email address</div>
        <q-input
          class="input_field"
          placeholder="Email address"
          v-model="email"
          outlined
          dense
        />
      </div>

      <div class="q-mt-lg">
        <div class="q-my-xs text-subtitle2 text-bold">Phone</div>
        <q-input
          class="input_field"
          placeholder="Phone number"
          v-model="phone"
          outlined
          dense
        />
      </div>

      <div class="q-mt-lg row">
        <q-btn
          label="Save changes "
          class="bordered-btn"
          color="primary"
          no-caps
          size="1.1rem"
        />
        <q-space />
      </div>
    </div>

    <q-separator class="q-my-xl" />

    <div>
      <div class="text-h6">Change of Password</div>

      <div class="q-mt-md">
        <div class="q-my-xs text-subtitle2 text-bold">Old Password</div>
        <q-input
          class="input_field"
          placeholder="Old password"
          outlined
          dense
        />
      </div>

      <div class="q-mt-lg">
        <div class="q-my-xs text-subtitle2 text-bold">New Password</div>
        <q-input
          class="input_field"
          placeholder="New password"
          outlined
          dense
        />
      </div>

      <div class="q-mt-lg">
        <div class="q-my-xs text-subtitle2 text-bold">Re-type New Password</div>
        <q-input
          class="input_field"
          placeholder="Password confirmation"
          outlined
          dense
        />
      </div>
    </div>

    <div class="q-mt-lg row">
      <q-btn
        label="Save changes "
        class="bordered-btn"
        color="primary"
        no-caps
        size="1.1rem"
      />
      <q-space />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: "",
      fullname: "",
      email: "",
      phone: "",
      oldPassword: "",
      newPassword: "",
      newPassword2: "",
    };
  },
  created() {
    this.userData = JSON.parse(localStorage.getItem("userdet"));
    this.fullname = this.userData.fullname;
    this.email = this.userData.email;
    this.phone = this.userData.phone;
  },
};
</script>

<style scoped>
.input_field {
  width: 50%;
}
@media screen and (max-width: 1200px) {
  .input_field {
    width: 100%;
  }
}
</style>
