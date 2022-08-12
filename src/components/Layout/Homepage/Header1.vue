<template>
  <div class="header1 row q-px-md items-align bg-grey-2 big_screen_padding">
    <div class="header1_container">
      <div class="left text-black text-bold">WELCOME TO MOMS EXPRESS</div>
      <div class="right">
        <router-link class="q-mx-sm" to="/">Blog</router-link>
        <router-link class="q-mx-sm" to="/">Contact Us</router-link>
        <router-link class="q-mx-sm" to="/">My Account</router-link>
        <q-btn label="why" color="primary" @click="alert = !alert" />
        <div class="auth text-black">
          <div @click="!alert">
            <q-icon name="person" size="1.2rem" class="q-mr-xs" />
            <span>Sign in</span>
          </div>
          <span class="q-mx-sm">/</span>
          <router-link to="/">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["alert"],
  methods: {},
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

.right a:hover {
  color: #1976d2;
}

.auth {
  display: flex;
  align-items: center;
}
</style>
