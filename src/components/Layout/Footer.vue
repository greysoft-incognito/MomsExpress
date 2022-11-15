<template>
  <div class="footer_main bg-primary big_screen_padding">
    <div class="moms">
      <div class="text-h4 text-bold">MOMS</div>
      <div class="q-mt-md">
        A platform that serves as an online marketplace, where parties involved
        in the trading of different products perform trading activities.
      </div>
      <ul>
        <li>
          <q-icon name="location_on" size="1.5rem" />
          <span>
            A platform that serves as an online marketplace, where parties
            involved in the trading of different products perform trading
            activities.
          </span>
        </li>

        <li>
          <q-icon name="location_on" size="1.5rem" />
          <span>
            A platform that serves as an online marketplace, where parties
            involved in the trading of different products perform trading
            activities.
          </span>
        </li>

        <li>
          <q-icon name="call" size="1.5rem" />
          <span> 0908888888, +22897564254 </span>
        </li>
      </ul>
    </div>

    <div class="footer_categories">
      <div class="text-h5 text-bold">Categories:</div>
      <ul>
        <router-link
          v-for="category in categories"
          :key="category.id"
          :to="{
            name: 'category',
            params: { categoryname: category.slug, id: category.id },
          }"
        >
          <li>{{ category.name }}</li>
        </router-link>
      </ul>
    </div>

    <div>
      <div class="row justify-between">
        <div class="customer_care">
          <div class="text-h5 text-bold">Customer Care</div>
          <ul>
            <router-link
              :to="
                this.$store.auth.vendorDetails === null ? `/account` : `/vendor`
              "
            >
              <li>My Account</li>
            </router-link>
            <router-link
              :to="
                this.$store.auth.vendorDetails === null ? `/account` : `/vendor`
              "
            >
              <li>Orders History</li>
            </router-link>
            <router-link
              v-show="$store.auth.vendorDetails === null"
              to="/become_a_vendor"
            >
              <li>Become a seller</li>
            </router-link>
          </ul>
        </div>

        <div>
          <div class="text-h5 text-bold">Social Media</div>
          <div class="q-my-sm social_media_icons row">
            <router-link to="/">
              <q-avatar
                color="secondary"
                size="2rem"
                class="q-mr-sm"
                text-color="white"
                icon="fa-brands fa-facebook-f"
              />
            </router-link>

            <router-link to="/">
              <q-avatar
                color="secondary"
                size="2rem"
                class="q-mr-sm"
                text-color="white"
                icon="fa-brands fa-instagram"
              />
            </router-link>

            <router-link to="/">
              <q-avatar
                color="secondary"
                size="2rem"
                class="q-mr-sm"
                text-color="white"
                icon="fa-brands fa-twitter"
              />
            </router-link>

            <router-link to="/">
              <q-avatar
                color="secondary"
                size="2rem"
                class="q-mr-sm"
                text-color="white"
                icon="fa-brands fa-linkedin"
              />
            </router-link>
          </div>
          <div class="text-subtitle1 text-bold">@moms</div>
        </div>
      </div>

      <q-input
        outlined
        color="secondary"
        class="full-width q-mt-xl"
        placeholder="Subscribe to News Letter..."
        dense
        bg-color="white"
      >
        <template v-slot:append>
          <q-separator vertical class="q-mx-sm" />
          <q-btn label="Subscribe" no-caps color="secondary" dense />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    getCategories() {
      this.$api
        .get("category/all")
        .then((resp) => {
          // console.log(resp);
          this.categories = resp.data.data;
          this.loading = false;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.$q.notify({
            message: response.data.message || response.data.payload,
            color: "red",
            position: "top",
            timeout: 3000,
          });
          this.errors = response.data.errors;
          setTimeout(() => {
            this.errors = [];
          }, 7000);
          console.log(response);
        });
    },
  },
  created() {
    this.getCategories();
  },
};
</script>

<style scoped>
.footer_main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding-top: 2%;
  padding-bottom: 2%;
}
.footer_categories {
  padding: 0 10%;
}

ul {
  list-style: none;
}
li {
  font-size: 0.9rem;
}

.moms li {
  margin: 4% 0;
}

.footer_categories ul,
.customer_care ul {
  padding: 0;
}

.footer_categories li,
.customer_care li {
  margin: 1.5% 0;
  color: white !important;
}
</style>
