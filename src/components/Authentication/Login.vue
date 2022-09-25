<template>
  <div class="q-my-sm">
    <label class="text-grey">Email address*</label>
    <q-input outlined v-model="form.email" />
    <div class="error" v-if="errors.email">
      {{ errors.email[0] }}
    </div>
  </div>

  <div class="q-my-sm">
    <label class="text-grey"> Password*</label>
    <q-input class="full-width" outlined v-model="form.password" />
    <div class="error" v-if="errors.email">
      {{ errors.email[0] }}
    </div>
  </div>

  <div class="q-my-sm row items-center justify-between">
    <q-checkbox
      v-model="customModel"
      color="secondary"
      class="text-grey"
      label="Remember me"
      true-value="yes"
      false-value="no"
    />
    <router-link to="/" class="text-primary">Forgot Password</router-link>
  </div>

  <q-btn
    class="q-my-md full-width"
    label="Sign In"
    @click="login()"
    color="primary"
  />

  <div class="social text-center q-mt-md">
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
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      customModel: ref("no"),
    };
  },
  data() {
    return {
      errors: [],
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
      this.$q.loading.show();
      this.$api
        .post("/login", this.form)
        .then((response) => {
          this.$q.loading.hide();
          this.$router.replace({ name: "Homepage" });
          console.log(response);
          this.$q.notify({
            message: "Successful",
            color: "green",
            position: "top",
          });
          this.$store.auth.setUserDetails(response.data);
          // this.$router.replace({ name: "dashboard" });
          this.loading = false;
        })
        .catch(({ response }) => {
          console.log(response);
          this.$q.loading.hide();

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

<style scoped></style>
