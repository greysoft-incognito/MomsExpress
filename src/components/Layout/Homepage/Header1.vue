<template>
  <div class="header1 row q-px-md items-align bg-grey-2 big_screen_padding">
    <div class="header1_container">
      <div class="left text-black text-bold welcome_text">
        WELCOME TO MOMS EXPRESS
      </div>
      <Marquee
        class="left text-black text-bold row marquee_text"
        behavior=""
        direction="right"
      >
        <span class="q-mr-xl">WELCOME TO MOMS EXPRESS</span>
        <!-- <span class="q-mr-xl">WELCOME TO MOMS EXPRESS</span> -->
        <!-- <span class="q-mr-xl">WELCOME TO MOMS EXPRESS</span>
        <span class="q-mr-xl">WELCOME TO MOMS EXPRESS</span> -->
      </Marquee>

      <div class="right">
        <router-link class="q-mx-sm" to="/">Blog</router-link>
        <router-link class="q-mx-sm" to="/">Contact Us</router-link>
        <router-link class="q-mx-sm" to="/account">My Account</router-link>
        <div
          v-if="(this.$store.auth.userDetails = null)"
          class="auth text-black"
        >
          <div @click="login">
            <q-icon name="person" size="1.2rem" class="q-mr-xs" />
            <span>Sign in</span>
          </div>
          <span class="q-mx-sm">/</span>
          <div @click="register">
            <span>Register</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["toggleAuthForm"],
  methods: {
    login() {
      this.$emit("clicked", "login");
      this.toggleAuthForm();
    },
    register() {
      this.$emit("clicked", "register");
      this.toggleAuthForm();
    },
  },
};
</script>

<style scoped>
.header1 {
  height: 35px !important;
}
@media screen and (min-width: 770px) {
  .hamburger_btn {
    display: none;
  }
}
.header1_container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.right {
  display: flex;
}

.right a {
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
}

.right a:hover,
.auth div:hover {
  color: #1976d2;
  cursor: pointer;
}

.auth {
  display: flex;
  align-items: center;
}
.marquee_text {
  display: none;
}
@media screen and (max-width: 770px) {
  .right,
  .welcome_text {
    display: none;
  }
  .marquee_text {
    display: block;
  }
}
</style>
