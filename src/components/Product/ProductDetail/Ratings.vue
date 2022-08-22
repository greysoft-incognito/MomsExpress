<template>
  <div class="q-mt-md q-pt-xs">
    <div class="text-subtitle2">Customer rating</div>
    <div class="text-h3">{{ rating_point }}</div>
    <div>
      <q-rating
        v-model="rating_point"
        max="5"
        size="2em"
        color="orange"
        icon="star_border"
        icon-selected="star"
        icon-half="star_half"
        no-dimming
        readonly
      />
    </div>
    <div class="text-subtitle2 text-grey-8">(300 reviews)</div>
    <div class="text-subtitle2 text-grey-10 q-mt-sm">
      93% of lorem customers would recommend
    </div>

    <q-list dense bordered padding class="no-border q-mt-lg q-pr-xl">
      <q-item style="padding-left: 0 !important" v-ripple>
        <span class="text-subtitle2 q-mr-xs">5</span>
        <q-icon name="star" size="1.5em" color="orange"></q-icon>
        <q-linear-progress
          class="q-ml-sm q-mr-sm"
          style="margin-top: 5px"
          size="13px"
          :value="0.9"
        />
        <span
          style="margin-top: 2px"
          class="text-caption text-weight-bold text-grey-8"
          >216</span
        >
      </q-item>

      <q-item style="padding-left: 0 !important" v-ripple>
        <span class="text-subtitle2 q-mr-xs">4</span>
        <q-icon name="star" size="1.5em" color="orange"></q-icon>
        <q-linear-progress
          class="q-ml-sm q-mr-sm"
          style="margin-top: 5px"
          size="13px"
          :value="0.6"
        />
        <span
          style="margin-top: 2px"
          class="text-caption text-weight-bold text-grey-8"
          >&nbsp;&nbsp;69</span
        >
      </q-item>

      <q-item style="padding-left: 0 !important" v-ripple>
        <span class="text-subtitle2 q-mr-xs">3</span>
        <q-icon name="star" size="1.5em" color="orange"></q-icon>
        <q-linear-progress
          class="q-ml-sm q-mr-sm"
          style="margin-top: 5px"
          size="13px"
          :value="0.1"
        />
        <span
          style="margin-top: 2px"
          class="text-caption text-weight-bold text-grey-8"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6</span
        >
      </q-item>

      <q-item style="padding-left: 0 !important" v-ripple>
        <span class="text-subtitle2 q-mr-xs">2</span>
        <q-icon name="star" size="1.5em" color="orange"></q-icon>
        <q-linear-progress
          class="q-ml-sm q-mr-sm"
          style="margin-top: 5px"
          size="13px"
          :value="0.1"
        />
        <span
          style="margin-top: 2px"
          class="text-caption text-weight-bold text-grey-8"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3</span
        >
      </q-item>

      <q-item style="padding-left: 0 !important" v-ripple>
        <span class="text-subtitle2 q-mr-xs">1</span>
        <q-icon name="star" size="1.5em" color="orange"></q-icon>
        <q-linear-progress
          class="q-ml-sm q-mr-sm"
          style="margin-top: 5px"
          size="13px"
          :value="0.1"
        />
        <span
          style="margin-top: 2px"
          class="text-caption text-weight-bold text-grey-8"
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6</span
        >
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      rating_point: 3.5,
    };
  },
};
</script>
