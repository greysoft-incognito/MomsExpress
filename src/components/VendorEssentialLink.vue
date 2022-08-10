<template>
  <q-item
    v-if="!title.includes('Product')"
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

  <!-- <q-expansion-item
    v-if="title === 'Users'"
    expand-separator
    icon="perm_identity"
    :label="title"
    class="q-my-sm"
  >
    <q-card flat>
      <q-card-section>
        <q-item clickable to="buyers" exact exact-active-class="primary">
          <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Buyers</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="vendors" exact exact-active-class="primary">
          <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Vendors </q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
    </q-card>
  </q-expansion-item> -->

  <q-expansion-item
    v-if="title === 'Product'"
    expand-separator
    icon="view_module"
    :label="title"
    class="q-my-sm"
  >
    <q-card flat>
      <q-card-section>
        <q-item
          clickable
          to="/vendor/products"
          exact
          exact-active-class="primary"
        >
          <q-item-section v-if="icon" avatar>
            <q-icon name="view_module" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Products</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          to="/vendor/new_product"
          exact
          exact-active-class="primary"
        >
          <q-item-section v-if="icon" avatar>
            <q-icon name="add" />
          </q-item-section>

          <q-item-section>
            <q-item-label>New Product</q-item-label>
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
