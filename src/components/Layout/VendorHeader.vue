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
          placeholder="search forcustomers, orders and  products"
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
          icon="fas fa-bell "
        />
        <q-separator class="q-ma-xs" vertical />
        <q-btn-dropdown flat color="primary" no-caps class="non_hover_btn">
          <template v-slot:label>
            <q-avatar color="grey-3" class="q-mr-md">
              <q-icon color="primary" name="person" />
            </q-avatar>
            <div>Lorem Dude Fullname</div>
          </template>
          <q-list>
            <q-item clickable v-close-popup to="/vendor/settings">
              <q-item-section>
                <q-item-label>
                  <q-icon name="person" size="0.8rem" />
                  Profile
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>
                  <q-icon name="logout" size="0.8rem" />
                  Logout
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
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
