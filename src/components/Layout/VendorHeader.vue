<template>
  <q-toolbar class="q-my-sm layout_header">
    <!-- <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="toggleLeftDrawer"
      class="hamburger_btn"
      color="primary"
    /> -->

    <div class="row justify-between items-center full-width">
      <div class="text-subtitle1 page_title text-bold text-black q-ml-sm">
        {{ $route.name }}
      </div>
      <q-space />
      <div class="row text-black items-center">
        <!-- <q-separator class="q-my-xs q-mx-sm header_sep" vertical />
        <q-btn
          color="grey "
          size="0.8rem"
          round
          outline
          class="notification"
          icon="fas fa-bell "
        /> -->
        <q-separator class="q-my-xs q-ml-sm header_sep" vertical />
        <q-btn-dropdown
          flat
          color="primary"
          no-caps
          class="non_hover_btn header_dropdown"
        >
          <template v-slot:label>
            <q-avatar color="grey-3" class="q-mr-md header_avatar">
              <q-icon color="primary" name="person" />
            </q-avatar>
            <div class="username">{{ username }}</div>
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
      </div>
    </div>
  </q-toolbar>
</template>

<script>
export default {
  props: ["toggleLeftDrawer"],
  methods: {},
  computed: {
    username() {
      return JSON.parse(localStorage.getItem("vendorDetails")).store_name;
    },
  },
};
</script>

<style scoped>
.layout_header {
  /* height: 70px !important; */
}
.search_input {
  width: 350px;
}
@media screen and (max-width: 950px) {
  .search_input {
    width: 250px !important;
    text-overflow: ellipsis;
  }
  .header_dropdown {
    font-size: 0.8rem !important;
  }
  .header_avatar {
    font-size: 1.8rem !important;
  }
  .notification {
    font-size: 0.6rem !important;
  }
}

@media screen and (max-width: 820px) {
  .search_input {
    width: 210px !important;
    text-overflow: ellipsis;
    font-size: 0.8rem;
  }
  .header_dropdown {
    font-size: 0.8rem !important;
  }
  .header_avatar {
    font-size: 1.6rem !important;
  }
  .notification {
    font-size: 0.5rem !important;
  }
}

@media screen and (max-width: 770px) {
  .search_input,
  .username {
    display: none;
  }
  .header_avatar {
    margin: 0;
  }

  .layout_header {
    margin: 0;
  }
}

@media screen and (min-width: 770px) {
  .hamburger_btn,
  .page_title {
    display: none;
  }
}
</style>
