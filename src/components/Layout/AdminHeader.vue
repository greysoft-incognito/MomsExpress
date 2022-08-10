<template>
  <q-toolbar class="q-my-sm">
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="toggleLeftDrawer"
      class="hamburger_btn"
      color="primary"
    />

    <div class="row justify-between full-width">
      <div>
        <q-input
          placeholder="search for users and categories..."
          class="search_input"
          borderless
        >
          <template v-slot:prepend>
            <q-icon name="search" color="primary" />
            <q-separator class="q-ma-sm" vertical />
          </template>
        </q-input>
      </div>

      <div class="row text-black items-center">
        <q-separator class="q-ma-xs" vertical />
        <q-btn
          color="grey"
          size="0.8rem"
          round
          outline
          class="q-mx-md"
          icon="chat "
          to="/admin/issues"
        />
        <q-separator class="q-ma-xs" vertical />

        <q-btn
          color="grey"
          size="0.8rem"
          round
          outline
          class="q-mx-md"
          icon="logout"
        />
        <q-separator class="q-ma-xs" vertical />
      </div>
    </div>
  </q-toolbar>
</template>

<script>
export default {
  props: ["toggleLeftDrawer"],
  methods: {},
};
</script>

<style scoped>
.layout_header {
  height: 70px !important;
}
.search_input {
  width: 400px;
}
@media screen and (min-width: 770px) {
  .hamburger_btn {
    display: none;
  }
}
</style>
