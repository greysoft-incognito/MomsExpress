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
      <!-- {{ $store.auth.userDetails }} -->

      <div class="right items-center">
        <!-- <router-link class="q-mx-sm" to="/">Blog</router-link>
        <router-link class="q-mx-sm" to="/">Contact Us</router-link> -->
        <q-btn-dropdown
          v-if="$store.auth.userDetails !== null"
          color="grey-5"
          :label="$store.auth.userDetails.data[1].email"
        >
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label
                  ><router-link class="q-mx-sm" to="/account"
                    >My Account</router-link
                  ></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <div v-if="$store.auth.userDetails === null" class="auth text-black">
          <div @click="login">
            <q-icon name="person" size="1.2rem" class="q-mr-xs" />
            <span>Sign in</span>
          </div>
          <span class="q-mx-sm">/</span>
          <div @click="register">
            <span>Register</span>
          </div>
        </div>
        <div class="auth" v-else>
          <q-item
            style="min-height: 0"
            :to="{ name: 'logout' }"
            class="text-dark"
            >Sign Out</q-item
          >
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
  color: #e06900;
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
