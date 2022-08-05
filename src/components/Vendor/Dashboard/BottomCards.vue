<template>
  <div class="bottom_card bg-white">
    <div class="q-pa-md text-bold">Top Selling Items</div>
    <q-separator class="q-mt-xs q-mb-md" />

    <q-scroll-area style="height: 40vh; width: 100%">
      <div class="q-px-md">
        <div
          v-for="n in 9"
          :key="n"
          class="user_item q-my-sm q-px-lg q-py-md row justify-between"
        >
          <div>Lorem Item and goods</div>
          <div>2mins ago</div>
        </div>
      </div>
    </q-scroll-area>
  </div>
  <div class="bottom_card bg-white">
    <div class="q-pa-md text-bold">Latest Orders</div>
    <q-separator class="q-mt-xs q-mb-md" />

    <q-scroll-area style="height: 40vh; width: 100%">
      <UserTimeline />
    </q-scroll-area>
  </div>

  <div class="bottom_card bg-white">
    <div class="q-pa-md text-bold">Some other stuff</div>
    <q-separator class="q-mt-xs q-mb-md" />

    <q-scroll-area style="height: 40vh; width: 100%">
      <UserTimeline />
    </q-scroll-area>
  </div>
</template>

<script>
import UserTimeline from "src/components/Admin/Users/UserTimeline.vue";
export default { components: { UserTimeline } };
</script>

<style scoped></style>
