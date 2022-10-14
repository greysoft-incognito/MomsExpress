<template>
  <div class="card bg-white q-pt-md" v-for="item in cards" :key="item.title">
    <div class="text-caption text-weight-light q-px-md text-uppercase">
      {{ item.title }}
    </div>

    <div class="row justify-between q-px-md text-h6 text-bold items-center">
      <div>
        <!-- <span class="text-subtitle1 text-bold q-my-auto">{{
          item.symbol
        }}</span> -->
        <span class="">{{ item.number }}</span>
      </div>
      <div class="row items-center">
        <q-icon
          size="0.9rem"
          :name="`fa-solid ${item.icon}`"
          :color="item.icon_color"
        />
        <div :class="`text-${item.icon_color} text-subtitle2`">0%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cards"],
};
</script>

<style scoped></style>
