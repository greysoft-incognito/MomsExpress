<template>
  <div class="review_input text-grey-8">
    <h6>Submit Your Review</h6>
    <p>* Your email address will not be published.</p>
    <p>Your Rating of This Product:</p>
    <q-input
      outlined
      class="q-my-md"
      placeholder="Write your review here..."
      type="textarea"
    />
    <div class="fullname">
      <div class="q-my-sm">
        <q-input outlined placeholder="Your name" dense />
      </div>

      <div class="q-my-sm">
        <q-input class="full-width" placeholder="Email" dense outlined />
      </div>
    </div>

    <q-btn class="q-my-md" label="SUbmit Review" color="primary" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const customModel = ref("no");

    return {
      customModel,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 1448px) {
  .checkbox_container p {
    width: 85%;
  }
}

@media screen and (max-width: 640px) {
  .checkbox_container p {
    font-size: 0.9rem;
  }
}
</style>
