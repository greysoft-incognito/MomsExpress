<template>
  <q-page class="q-px-lg q-py-xl">
    <div class="q-px-md">
      <div class="text-h6">{{ $route.name }}</div>
    </div>
    <div class="q-gutter-y-md full-width q-pa-md">
      <q-card style="border-radius: 15px" flat class="q-px-sm q-py-md">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="left"
          no-caps
        >
          <q-tab name="pending" label="Pending " />
          <q-tab name="resolved" label="Resolved " />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="pending">
            <PendingIssues />
          </q-tab-panel>

          <q-tab-panel name="resolved">
            <ResolvedIssues />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import PendingIssues from "src/components/Admin/Issues/PendingIssues.vue";
import ResolvedIssues from "src/components/Admin/Issues/ResolvedIssues.vue";

export default {
  setup() {
    return {
      tab: ref("pending"),
    };
  },
  components: {
    PendingIssues,
    ResolvedIssues,
  },
};
</script>
