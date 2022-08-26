<template>
  <q-page>
    <div class="section_one big_screen_padding q-my-xl">
      <div>
        <p class="q-my-sm text-primary text-bold text-h6">Create a store</p>
        <h3 class="text-bold">Build your online store on MOMS</h3>
        <p class="q-my-md one_long_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          veritatis, officiis voluptatem voluptate natus sint dicta praesentium
          illum mollitia nostrum, veniam repellendus velit quidem libero unde
          sapiente! Inventore, aperiam odio.
        </p>
        <q-btn class="q-my-md" @click="alert = true" outline label="Register" />
      </div>
      <q-img src="Images/1.jpg" />
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
            <q-input outlined />
          </div>

          <div class="q-my-sm">
            <label class="text-grey"> Phone*</label>
            <q-input class="full-width" outlined />
          </div>

          <div class="q-my-sm">
            <label class="text-grey"> Address*</label>
            <q-input class="full-width" outlined />
          </div>

          <div class="q-my-sm">
            <label class="text-grey"> User ID*</label>
            <q-input class="full-width" outlined />
          </div>

          <div class="q-my-sm row items-center">
            <q-checkbox
              v-model="customModel"
              color="secondary"
              class="text-grey"
              true-value="yes"
              false-value="no"
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
          />
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="section_two big_screen_padding bg-grey-3">
      <q-img src="Images/2.jpg" />
      <div>
        <p class="q-my-sm text-primary text-bold text-h6">How to Trade</p>
        <h3 class="text-bold">Easy 4 steps to manage your products selling</h3>
        <p class="q-my-md one_long_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          veritatis, officiis voluptatem voluptate natus sint dicta praesentium
          illum mollitia nostrum, veniam repellendus velit quidem libero unde
          sapiente! Inventore, aperiam odio.
        </p>
        <div class="four_items">
          <div class="row q-my-md">
            <q-icon
              class="q-mr-sm"
              name="computer"
              size="4rem"
              color="primary"
            />
            <p>
              Register and List Your <br />
              Products
            </p>
          </div>
          <div class="row q-my-md">
            <q-icon class="q-mr-sm" name="list" size="4rem" color="primary" />
            <p>Start Selling Your Products</p>
          </div>
          <div class="row q-my-md">
            <q-icon
              class="q-mr-sm"
              name="delivery_dining"
              size="4rem"
              color="primary"
            />
            <p>
              Deliver your Products <br />
              Everywhere
            </p>
          </div>
          <div class="row q-my-md">
            <q-icon class="q-mr-sm" name="store" size="4rem" color="primary" />
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

    <div class="section_four text-center big_screen_padding bg-grey-3">
      <h6 class="text-primary text-bold">What they say</h6>
      <h4 class="text-bold q-my-sm">Success stories from MOMS Express</h4>
      <div class="testimonies_cont">
        <div
          class="bg-white column q-pa-md testimony_card"
          v-for="n in 3"
          :key="n"
        >
          <q-avatar size="7rem" class="q-mx-auto">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>

          <q-rating
            v-model="ratingModel"
            size="1.1rem"
            color="grey"
            readonly
            :color-selected="ratingColors"
            class="stars q-mx-auto q-my-md"
          />

          <p class="review text-grey-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad
            dicta dignissimos quibusdam rem voluptates omnis eum quis aliquid.
            Commodi delectus, .
          </p>

          <p class="text-bold text-subtitle1 q-my-sm">Lorem Dude</p>

          <p class="text-grey-7">Investor</p>
        </div>
      </div>
    </div>

    <div class="section_five big_screen_padding">
      <h6 class="text-primary text-center text-bold">
        Frequently Asked Questions
      </h6>
      <h4 class="text-bold text-center q-my-sm">
        Find an answer to your Question
      </h4>

      <div class="faqs">
        <div class="q-mb-lg">
          <h6 class="text-bold q-mb-md">How can I add new products?</h6>
          <p class="text-grey-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            quibusdam enim numquam, saepe cum dicta incidunt repellendus iure
            eum voluptatibus eligendi facilis id hic voluptas possimus dolor
            obcaecati perspiciatis velit.
          </p>
        </div>

        <div class="q-mb-lg">
          <h6 class="text-bold q-mb-md">How do I get paid?</h6>
          <p class="text-grey-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            quibusdam enim numquam, saepe cum dicta incidunt repellendus iure
            eum voluptatibus eligendi facilis id hic voluptas possimus dolor
            obcaecati perspiciatis velit.
          </p>
        </div>

        <div class="q-mb-lg">
          <h6 class="text-bold q-mb-md">How can I know stock?</h6>
          <p class="text-grey-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            quibusdam enim numquam, saepe cum dicta incidunt repellendus iure
            eum voluptatibus eligendi facilis id hic voluptas possimus dolor
            obcaecati perspiciatis velit.
          </p>
        </div>

        <div class="q-mb-lg">
          <h6 class="text-bold q-mb-md">
            Do I need a credit or debit card to create a shop?
          </h6>
          <p class="text-grey-7">
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
      ratingModel: ref(4),
      ratingColors: ["green"],
      alert: false,
      customModel: "no",
    };
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
</style>
