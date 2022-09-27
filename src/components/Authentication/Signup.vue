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
    <div class="error" v-if="errors.password">
      {{ errors.password[0] }}
    </div>
  </div>

  <!-- <div class="q-my-sm">
    <label class="text-grey">Retype Password*</label>
    <q-input class="full-width" outlined />
  </div> -->

  <div class="q-my-sm text-grey">
    Your personal data will be used to support your experience throughout this
    website, to manage access to your account, and for other purposes described
    in our
    <span>
      <router-link class="text-primary" to="/">privacy policy.</router-link>
    </span>
  </div>

  <div class="q-my-sm row items-center justify-between">
    <q-checkbox
      v-model="form.terms"
      color="secondary"
      class="text-grey"
      label="I agree to the privacy policy"
      :true-value="true"
      :false-value="false"
    />
  </div>

  <q-btn
    class="q-my-md full-width"
    @click="register()"
    label="Sign Up"
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
  props: ["toggleShit"],
  data() {
    return {
      errors: [],
      loading: false,
      form: {
        email: "",
        password: "",
        terms: false,
      },
    };
  },
  methods: {
    register() {
      this.loading = true;
      const email = this.form.email;
      const password = this.form.password;
      const terms = this.form.terms;
      terms;
      let data = {
        email,
        password,
        terms,
      };

      if (terms === false) {
        this.$q.notify({
          message: "You must agree to our terms and conditions",
          color: "Green",
        });
        this.loading = false;
      } else {
        this.$api
          .post("/register", data)
          .then((response) => {
            console.log(response);
            this.$q.notify({
              message: response.data.message,
              color: "Green",
            });
            this.loading = false;
            this.$store.auth.setUserDetails(response.data);
            this.toggleShit();
            this.$router.replace({ name: "Homepage" });
          })
          .catch(({ response }) => {
            console.log(response);
            this.loading = false;
            this.$q.notify({
              message: response.data.message,
              color: "red",
              position: "top",
            });
            this.errors = response.data.errors || response.message;
            setTimeout(() => {
              this.errors = [];
            }, 7000);
          });
      }
    },
  },
};
</script>

<style scoped></style>
