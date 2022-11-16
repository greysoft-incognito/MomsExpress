<template>
  <div class="q-my-sm">
    <label class="text-grey">Email address*</label>
    <q-input outlined v-model="form.email" type="email" />
    <div class="error" v-if="errors.email">
      {{ errors.email[0] }}
    </div>
  </div>

  <div class="q-my-sm">
    <label class="text-grey"> Password*</label>
    <q-input
      class="full-width"
      @keydown.enter="login"
      outlined
      v-model="form.password"
      type="password"
    />
    <div class="error" v-if="errors.password">
      {{ errors.password[0] }}
    </div>
  </div>

  <div class="q-my-sm row items-center justify-end">
    <!-- <q-checkbox
      v-model="customModel"
      color="secondary"
      class="text-grey"
      label="Remember me"
      true-value="yes"
      false-value="no"
    /> -->
    <router-link to="/forgotPassword" class="text-primary"
      >Forgot Password</router-link
    >
  </div>

  <q-btn
    class="q-my-md full-width"
    label="Sign In"
    :loading="loading"
    @click="login"
    color="primary"
  />

  <!-- <div class="social text-center q-mt-md">
    <div class="text-grey">Sign in with social account</div>
    <div class="row justify-center q-my-md">
      <q-btn
        outline
        round
        color="dark blue"
        size="0.75rem"
        icon="fa-brands fa-facebook-f"
        class="q-mr-sm"
      />

      <q-btn
        class="q-mr-sm"
        outline
        round
        color="primary"
        size="0.75rem"
        icon="fa-brands fa-twitter"
      />

      <q-btn
        class="q-mr-sm"
        outline
        round
        color="red"
        size="0.75rem"
        icon="fa-brands fa-google"
      />
    </div>
  </div> -->
</template>

<script>
import { ref } from "vue";
export default {
  props: ["toggleShit"],
  setup() {
    return {
      customModel: ref("no"),
    };
  },
  data() {
    return {
      errors: [],
      loading: false,
      form: {
        email: "",
        password: "",
        terms: 1,
      },
    };
  },
  methods: {
    login() {
      this.loading = true;
      // this.$q.loading.show();
      this.$api
        .post("/login", this.form)
        .then((response) => {
          this.$q.loading.hide();
          this.$router.replace({ name: "homepage" });
          console.log(response);
          this.$q.notify({
            message: "Successful",
            color: "green",
            position: "top",
          });
          this.$store.auth.setUserDetails(response.data);
          this.toggleShit();
          this.$router.replace({ name: "dashboard" });
          this.loading = false;
        })
        .catch(({ response }) => {
          console.log(response);
          // this.$q.loading.hide();

          this.$q.notify({
            message: response.data.message,
            color: "red",
            position: "top",
          });
          this.errors = response.data.errors;
          setTimeout(() => {
            this.errors = [];
          }, 7000);
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.error {
  font-weight: 700;
  color: red;
  font-weight: 10px;
}
</style>
