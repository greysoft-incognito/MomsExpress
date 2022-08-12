<template>
  <div class="q-my-sm">
    <label class="text-grey">Email address*</label>
    <q-input outlined />
  </div>

  <div class="q-my-sm">
    <label class="text-grey"> Password*</label>
    <q-input class="full-width" outlined />
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

  <q-btn class="q-my-md full-width" label="Sign In" color="primary" />

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
};
</script>

<style scoped></style>
