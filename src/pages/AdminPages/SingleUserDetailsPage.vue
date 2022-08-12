<template>
  <q-page class="q-px-lg q-py-md">
    <div class="row items-center">
      <q-btn
        dense
        icon="chevron_left"
        size="1.25rem"
        class="q-mr-sm non_hover_btn"
        :ripple="false"
        flat
        @click="$router.back()"
        color="primary"
      />

      <div>
        <div class="text-h6">{{ $route.name }}</div>
        <div class="text-weight-thin">Lorem Store Name</div>
      </div>
    </div>

    <div class="main q-my-lg q-pr-md">
      <div class="column q-gutter-y-md">
        <GeneralInfo />

        <StoreInfo />

        <div class="border-radius timeline bg-white q-pa-md">
          <div class="text-h6 text-bold q-mb-md">User Activities</div>

          <q-scroll-area style="height: 50vh; width: 100%">
            <UserTimeline />
          </q-scroll-area>
        </div>
      </div>

      <div class="column q-gutter-y-md">
        <div class="row border-radius bg-white q-pa-md">
          <q-input
            v-model="description"
            type="textarea"
            class="q-mt-xs full-width"
            placeholder="Send a message to this user..."
            outlined
          />
          <q-btn
            label="Save Changes "
            class="bordered-btn full-width q-mt-sm"
            color="primary"
            no-caps
            size="1.1rem"
          />
        </div>

        <div class="row border-radius bg-white q-pa-md">
          <q-toggle size="55px" v-model="shape" val="55px" label="Flag User" />
          <q-banner
            rounded
            inline-actions
            class="text-white bg-orange text-bold q-my-sm"
          >
            <q-icon color="white" name="info" size="1.1rem" />
            Flagging a user would limit the user to certain functinalities on
            the website until they meet the requirement to be unflaged
          </q-banner>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import BackButton from "src/components/Vendor/BackButton.vue";
import UserTimeline from "../../components/Admin/Users/UserTimeline.vue";
import GeneralInfo from "../../components/Admin/Users/GeneralInfo.vue";
import StoreInfo from "../../components/Admin/Users/StoreInfo.vue";

export default {
  components: {
    BackButton,
    UserTimeline,
    GeneralInfo,
    StoreInfo,
  },
  data() {
    return {
      shape: ref(false),
    };
  },
  methods: {
    show() {
      console.log(this.content);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="css">
.previewBlock {
  display: block;
  cursor: pointer;
  width: 350px;
  height: 200px;
  margin: 0 auto 20px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.main {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 25px;
}
.border-radius {
  border-radius: 10px;
}

.images {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.input,
.image {
  /* width: 150px; */
  height: 150px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.input {
  border: 2px dashed #d56c33;
  cursor: pointer;
}
.input:hover {
  background: rgb(128, 128, 128, 0.1) !important;
}
.image {
  border: 2px solid rgb(128, 128, 128, 0.5);
  color: rgb(128, 128, 128, 0.5);
}
.timeline {
  height: 60vh;
}
</style>
