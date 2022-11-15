<template>
  <div class="reviews">
    <div class="row justify-between q-my-sm">
      <h6>Reviews</h6>
      <q-btn
        flat
        icon-right="chevron_right"
        class="non_hover_btn q-pr-none"
        no-caps
        size="0.8rem"
        label="View all"
        :ripple="false"
      />
    </div>
  </div>

  <div class="">
    <div class="">
      <q-list separator class="rounded-borders" style="">
        <q-item v-for="n in 5" :key="n" class="q-my-sm q-px-none comments">
          <!-- <q-item-section avatar top>
            <q-avatar size="4rem">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section> -->

          <q-item-section>
            <q-item-label lines="1">
              <span class="text-bold text-subtitle1">John Does'</span>
              <span class="text-caption text-grey-8">
                March 22,2021 at 1:54pm
              </span>
            </q-item-label>

            <!-- <q-item-label>
              <q-rating
                class="q-mb-sm"
                v-model="ratingModel"
                size="1rem"
                color="grey"
                readonly
                :color-selected="ratingColors"
              />
            </q-item-label> -->

            <q-item-label class="text-grey-8">
              <div class="review_text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia laudantium perferendis asperiores obcaecati, labore
                iure eos iusto, dolor, assumenda architecto facilis magni
                aliquid quam quisquam rem eveniet eum. Mollitia, inventore?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      // ratingModel: ref(3),
      // ratingColors: ["green"],
    };
  },
};
</script>

<style scoped>
.review_text {
  line-height: 1.5;
}
@media screen and (max-width: 400px) {
  .comments {
    display: block !important;
  }
}
</style>
