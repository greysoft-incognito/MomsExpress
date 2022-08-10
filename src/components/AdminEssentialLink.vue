<template>
  <q-item
    v-if="!title.includes('ers')"
    clickable
    :to="link"
    exact
    exact-active-class="primary"
    class="q-my-sm"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-expansion-item
    v-if="title === 'Users'"
    expand-separator
    icon="perm_identity"
    :label="title"
    class="q-my-sm"
  >
    <q-card flat>
      <q-card-section>
        <q-item clickable to="/admin/buyers" exact exact-active-class="primary">
          <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Buyers</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          to="/admin/vendors"
          exact
          exact-active-class="primary"
        >
          <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Vendors </q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
