<template>
  <q-page class="landing_page">
    <div class="section_one big_screen_padding q-my-xl">
      <div>
        <p class="sub_text q-my-sm text-primary text-bold text-h6">
          Create a store
        </p>
        <h3 class="text-bold">
          Build your online store on <span class="text-primary">5Pays</span>
        </h3>
        <q-img class="small_screen" src="Images/first_image.jpg" />
        <p class="q-my-md one_long_text">
          If you're looking to build an online store, you've come to the right
          place! 5Pays is the perfect platform for entrepreneurs, small
          businesses, and anyone looking to sell their products or services
          online. With 5Pays, you can easily create a professional-looking
          online store that's tailored to your unique brand.
        </p>
        <q-btn class="q-my-md" @click="alert = true" outline label="Register" />
      </div>
      <q-img class="large_screen" src="Images/first_image.jpg" />
    </div>

    <q-dialog v-model="alert">
      <q-card style="width: 500px; max-width: 80vw">
        <q-card-section class="row justify-between items-center">
          <div class="text-h6 text-primary">Create Shop</div>
          <q-btn
            icon="close"
            class="close_btn"
            flat
            round
            dense
            v-close-popup
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-my-sm">
            <label class="text-grey">Name*</label>
            <q-input outlined v-model="form.name" />
          </div>

          <div class="q-my-sm">
            <label class="text-grey"> Phone*</label>
            <q-input class="full-width" outlined v-model="form.phone" />
          </div>

          <div class="q-my-sm">
            <label class="text-grey"> Address*</label>
            <q-input class="full-width" outlined v-model="form.address" />
          </div>

          <!-- <div class="q-my-sm">
            <label class="text-grey"> User ID*</label>
            <q-input class="full-width" outlined v-model="form.user_id" />
          </div> -->

          <div class="q-my-sm row items-center">
            <q-checkbox
              v-model="form.terms"
              color="secondary"
              class="text-grey"
              :true-value="true"
              :false-value="false"
            />
            <div class="text-grey-7">
              You agree with our
              <router-link to="/" class="text-primary"
                >terms and condition</router-link
              >
            </div>
          </div>

          <q-btn
            class="q-my-md full-width"
            label="Create Shop"
            color="primary"
            @click="register()"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="section_two big_screen_padding bg-grey-3">
      <q-img class="large_screen" src="Images/second_image.jpg" />
      <div>
        <p class="sub_text q-my-sm text-primary text-bold text-h6">
          How to Trade
        </p>
        <h3 class="text-bold">Easy 4 steps to manage your products selling</h3>
        <q-img class="small_screen" src="Images/second_image.jpg" />
        <p class="q-my-md one_long_text">
          With 5Pays, managing your online store has never been easier. Our
          platform streamlines the process of selling your products or services
          online, giving you more time to focus on growing your business. Say
          goodbye to complicated setups and hello to an easy, hassle-free
          experience.
        </p>
        <div class="four_items">
          <div class="row icon_container q-my-md">
            <q-icon
              class="q-mr-sm single_icon"
              name="computer"
              size="4rem"
              color="primary"
            />
            <p>
              Register and List Your <br />
              Products
            </p>
          </div>
          <div class="row icon_container q-my-md">
            <q-icon
              class="q-mr-sm single_icon"
              name="list"
              size="4rem"
              color="primary"
            />
            <p>Start Selling Your Products</p>
          </div>
          <div class="row icon_container q-my-md">
            <q-icon
              class="q-mr-sm single_icon"
              name="delivery_dining"
              size="4rem"
              color="primary"
            />
            <p>
              Deliver your Products <br />
              Everywhere
            </p>
          </div>
          <div class="row icon_container q-my-md">
            <q-icon
              class="q-mr-sm single_icon"
              name="store"
              size="4rem"
              color="primary"
            />
            <p>
              Get Payments and Increase <br />
              your Income
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="section_three">
      <p>ONly Few Fees</p>
      <h3 class="text-bold">All is secured and Transparent</h3>
      <p>Nunc id cursus metus aliquam. Libero id faucibus nisl tincidunt eget.</p>

    </div> -->

    <div class="section_four text-center big_screen_padding">
      <h6 class="text-primary text-bold sub_text">What they say</h6>
      <h4 class="text-bold q-my-sm">Success stories from 5Pays</h4>
      <div class="testimonies_cont">
        <div
          class="bg-grey-3 column q-pa-md testimony_card"
          v-for="n in 3"
          :key="n"
        >
          <q-avatar size="7rem" class="q-mx-auto avatar_pix">
            <img src="Images/smiling_man.jpg" />
          </q-avatar>

          <!-- <q-rating
            v-model="ratingModel"
            size="1.1rem"
            color="grey"
            readonly
            color-selected="secondary"
            class="stars q-mx-auto q-my-md"
          /> -->

          <p class="review text-grey-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad
            dicta dignissimos quibusdam rem voluptates omnis eum quis aliquid.
            Commodi delectus, .
          </p>

          <p class="text-bold text-subtitle1 q-my-xs user_title">Lorem Dude</p>

          <p class="text-grey-7 user_title">Investor</p>
        </div>
      </div>
    </div>

    <div class="section_five big_screen_padding bg-primary text-white">
      <h6 class="text-center text-bold sub_text">Frequently Asked Questions</h6>
      <h4 class="text-bold text-center q-my-sm">
        Find an answer to your Question
      </h4>

      <div class="faqs">
        <div class="q-mb-lg">
          <h6 class="sub_text text-bold q-mb-md">
            How can I add new products?
          </h6>
          <p class="text-white answers">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            quibusdam enim numquam, saepe cum dicta incidunt repellendus iure
            eum voluptatibus eligendi facilis id hic voluptas possimus dolor
            obcaecati perspiciatis velit.
          </p>
        </div>

        <div class="q-mb-lg">
          <h6 class="sub_text text-bold q-mb-md">How do I get paid?</h6>
          <p class="text-white answers">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            quibusdam enim numquam, saepe cum dicta incidunt repellendus iure
            eum voluptatibus eligendi facilis id hic voluptas possimus dolor
            obcaecati perspiciatis velit.
          </p>
        </div>

        <div class="q-mb-lg">
          <h6 class="sub_text text-bold q-mb-md">How can I know stock?</h6>
          <p class="text-white answers">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            quibusdam enim numquam, saepe cum dicta incidunt repellendus iure
            eum voluptatibus eligendi facilis id hic voluptas possimus dolor
            obcaecati perspiciatis velit.
          </p>
        </div>

        <div class="q-mb-lg">
          <h6 class="sub_text text-bold q-mb-md">
            Do I need a credit answersor debit card to create a shop?
          </h6>
          <p class="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            quibusdam enim numquam, saepe cum dicta incidunt repellendus iure
            eum voluptatibus eligendi facilis id hic voluptas possimus dolor
            obcaecati perspiciatis velit.
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      // ratingModel: ref(4),
      // ratingColors: ["green"],
      alert: false,
      // customModel: "no",
      form: {
        name: "",
        address: "",
        phone: "",
        terms: false,
      },
    };
  },
  methods: {
    register() {
      this.loading = true;
      const name = this.form.name;
      const address = this.form.address;
      const phone = this.form.phone;
      const terms = this.form.terms;
      let data = {
        name,
        address,
        phone,
        user_id: JSON.parse(localStorage.getItem("userdet")).id,
        terms,
      };

      if (terms === false) {
        this.$q.notify({
          message: "You must agree to our terms and conditions",
          color: "red",
        });

        this.loading = false;
        return;
      } else {
        this.$api
          .post("/onboarding", data)
          .then((response) => {
            console.log(response);
            this.$q.notify({
              message: `Vendor ${response.statusText}`,
              color: "Green",
            });
            this.loading = false;
            this.$store.auth.setVendorDetails(response.data);
            this.alert = false;
            this.$router.replace({ name: "Home" });
          })
          .catch(({ response }) => {
            console.log(response);
            this.loading = false;
            this.$q.notify({
              message: response.data.message,
              color: "red",
              position: "top",
            });
            this.errors = response.data.errors || response.message;
            setTimeout(() => {
              this.errors = [];
            }, 7000);
          });
      }
    },
  },
};
</script>

<style scoped>
.section_one,
.section_two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  place-items: center;
}
.section_one {
  margin: 4% 0;
}
.section_two {
  margin: 5% 0 5%;
  padding-top: 5%;
  padding-bottom: 5%;
  gap: 30px;
}
.one_long_text {
  line-height: 2;
}
.four_items,
.faqs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25x;
  /* place-items: center; */
  /* align-items: center; */
}
.four_items p {
  margin: auto 0;
}
.section_four {
  padding-top: 3%;
  padding-bottom: 3%;
}
.testimonies_cont {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  margin: 5% 0 2%;
}
.testimony_card {
  border-radius: 10px;
}

.review {
  width: 80%;
  margin: 0 auto;
}
.section_five {
  padding-top: 4%;
  padding-bottom: 4%;
}
.faqs {
  gap: 30px;
  margin: 5% 0 2%;
}

.small_screen {
  display: none;
}

@media screen and (max-width: 1250px) {
  h3 {
    font-size: 2.5rem;
  }
  .icon_container {
    align-items: center;
    margin: 2% 0;
  }
  .icon_container p,
  .one_long_text {
    font-size: 0.95rem;
  }
  .single_icon {
    font-size: 2.5rem !important;
  }
}
@media screen and (max-width: 1110px) {
  h3 {
    font-size: 2rem;
  }
  .icon_container p,
  .one_long_text {
    font-size: 0.85rem;
  }
  .single_icon {
    font-size: 2.1rem !important;
  }
  .review {
    width: 100%;
  }
}

@media screen and (max-width: 950px) {
  .large_screen {
    display: none;
  }
  .section_one,
  .section_two {
    grid-template-columns: 1fr;
  }

  .small_screen {
    display: block;
    height: 500px;
    width: 80%;
    margin: 3% 0 2%;
  }
  h3 {
    font-size: 2.7rem;
    width: 70%;
  }
  .icon_container {
    align-items: center;
    margin: 2% 0;
  }
  .icon_container p,
  .one_long_text {
    font-size: 1rem;
  }
  .single_icon {
    font-size: 3rem !important;
  }
  .landing_page .big_screen_padding {
    padding: 3% 7%;
  }
  .testimonies_cont {
    grid-template-columns: 80%;
    justify-content: center;
  }
}

@media screen and (max-width: 850px) {
  h3 {
    font-size: 2.4rem;
    width: 80%;
  }
  .small_screen {
    height: 500px;
    width: 90%;
  }
}

@media screen and (max-width: 760px) {
  h4 {
    width: 85%;
    font-size: 1.85rem;
    margin: 0 auto;
  }
}

@media screen and (max-width: 680px) {
  h3 {
    font-size: 2.1rem;
    width: 80%;
  }
  .small_screen {
    height: 500px;
    width: 100%;
  }
}

@media screen and (max-width: 604px) {
  .landing_page .big_screen_padding {
    padding: 3% 7% 5%;
  }
  .icon_container p,
  .one_long_text,
  .review,
  .answers,
  .user_title {
    font-size: 0.9rem;
  }
  .single_icon {
    font-size: 2.2rem !important;
  }
  h3 {
    font-size: 2.1rem;
    width: 100%;
    line-height: 1.3;
  }
  .small_screen {
    margin: 5% 0 4%;
    height: 450px;
  }
  .four_items {
    grid-template-columns: 1fr;
  }
  .testimonies_cont {
    grid-template-columns: 90%;
  }
  h4 {
    width: 90%;
    font-size: 1.7rem;
    margin: 1% auto 5%;
  }
}

@media screen and (max-width: 550px) {
  .faqs {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 500px) {
  .small_screen {
    height: 400px;
  }
  h3 {
    font-size: 1.9rem;
  }
  .testimonies_cont {
    grid-template-columns: 100%;
  }
  .avatar_pix {
    font-size: 5rem !important;
  }
  h4 {
    width: 100%;
    font-size: 1.4rem;
  }
}

@media screen and (max-width: 415px) {
  .small_screen {
    height: 350px;
  }
  h3 {
    font-size: 1.5rem;
  }
  .sub_text {
    font-size: 1.05rem;
    margin: 0;
  }
}
</style>
