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
        <router-link to="/">
          <li>Phones & Tablets</li>
        </router-link>
        <router-link to="/">
          <li>Computers and Laptops</li>
        </router-link>
        <router-link to="/">
          <li>Electronics</li>
        </router-link>
        <router-link to="/">
          <li>Jewelry & Watches</li>
        </router-link>
        <router-link to="/">
          <li>Automobiles</li>
        </router-link>
        <router-link to="/">
          <li>Home Equipments</li>
        </router-link>
        <router-link to="/">
          <li>Beauty, health & hair</li>
        </router-link>
        <router-link to="/">
          <li>Babies & Kids</li>
        </router-link>
        <router-link to="/">
          <li>Bags & Shoes</li>
        </router-link>
        <router-link to="/">
          <li>Agriculture & Food</li>
        </router-link>
        <router-link to="/">
          <li>Men's Fashion</li>
        </router-link>
        <router-link to="/">
          <li>Women's Fashion</li>
        </router-link>
      </ul>
    </div>

    <div>
      <div class="row justify-between">
        <div class="customer_care">
          <div class="text-h5 text-bold">Customer Care</div>
          <ul>
            <router-link to="/">
              <li>My Account</li>
            </router-link>
            <router-link to="/">
              <li>Discount</li>
            </router-link>
            <router-link to="/">
              <li>Orders History</li>
            </router-link>
          </ul>
        </div>

        <div>
          <div class="text-h5 text-bold">Social Media</div>
          <div class="q-my-sm social_media_icons row">
            <router-link to="/">
              <q-avatar
                color="green"
                size="2rem"
                class="q-mr-sm"
                text-color="white"
                icon="fa-brands fa-facebook-f"
              />
            </router-link>

            <router-link to="/">
              <q-avatar
                color="green"
                size="2rem"
                class="q-mr-sm"
                text-color="white"
                icon="fa-brands fa-instagram"
              />
            </router-link>

            <router-link to="/">
              <q-avatar
                color="green"
                size="2rem"
                class="q-mr-sm"
                text-color="white"
                icon="fa-brands fa-twitter"
              />
            </router-link>

            <router-link to="/">
              <q-avatar
                color="green"
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
        color="green"
        class="full-width q-mt-xl"
        placeholder="Subscribe to News Letter..."
        dense
        bg-color="white"
      >
        <template v-slot:append>
          <q-separator vertical class="q-mx-sm" />
          <q-btn label="Subscribe" no-caps color="green" dense />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {};
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
