<template>
  <div class="top_categories_container big_screen_padding bg-white">
    <div class="text-center text-bold text-h6 q-mb-md">
      Top Categories of The Month
    </div>
    <div v-if="skeleton">
      <div style="height: 100%; gap: 1rem" class="row no-wrap lar items-start">
        <q-card
          v-for="type in skele"
          :key="type"
          flat
          style="max-width: 300px; height: 100%; width: 300px"
        >
          <q-skeleton height="150px" square />

          <q-card-section>
            <q-skeleton type="text" class="text-subtitle1" />
            <q-skeleton type="text" width="50%" class="text-subtitle1" />
            <q-skeleton type="text" class="text-caption" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="cards_container">
      <router-link
        :to="{
          name: 'category',
          params: { categoryname: category.slug, id: category.id },
        }"
        v-for="category in categories"
        :key="category.id"
        class="column bg-grey-2 border_card card"
      >
        <!-- <div class="image_container"> -->
        <q-img
          v-if="category.name === 'Jewelry & Watches'"
          class="border_card image"
          src="/Images/watch.jpeg"
        />
        <q-img
          v-if="category.name === 'Babies and Kids'"
          class="border_card image"
          src="/Images/baby.jpeg"
        />
        <q-img
          v-if="category.name === 'Bags & Shoes'"
          class="border_card image"
          src="/Images/bag.jpeg"
        />
        <q-img
          v-if="category.name === 'Automobiles'"
          class="border_card image"
          src="/Images/auto.jpeg"
        />
        <q-img
          v-if="category.name === `Men's Fashion`"
          class="border_card image"
          src="/Images/men.jpeg"
        />
        <!-- </div> -->
        <div class="text-center text-subtitle1 text-bold q-my-xs">
          {{ category.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      errors: [],
      categories: [],
      skeleton: true,
      skele: ["ske", "ske", "ske", "ske", "ske", "ske", "ske"],
    };
  },

  created() {
    this.getCategories();
  },

  methods: {
    getCategories() {
      this.loading = true;
      this.$api
        .get("category/all")
        .then((resp) => {
          console.log(resp);
          this.categories = resp.data.data;
          this.categories.splice(5, resp.data.data.length - 1);
          this.skeleton = false;
        })
        .catch(({ response }) => {
          this.loading = false;
          this.errors = response.data.errors;
        });
    },
  },
};
</script>

<style scoped>
.top_categories_container {
  padding-top: 4%;
  padding-bottom: 4%;
}
.cards_container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
}
.image {
  height: 200px;
}

.border_card {
  border-radius: 15px;
}
.card {
  cursor: pointer;
  transition: 0.3s;
}

.card:hover {
  transform: translate(0, -10px);
}

@media screen and (max-width: 1200px) {
  .image {
    height: 180px;
  }
}

@media screen and (max-width: 870px) {
  .image {
    height: 150px;
  }
}
@media screen and (max-width: 770px) {
  .cards_container {
    display: flex;
    width: 100%;
    /* height: 120px; */
    white-space: nowrap;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none; /* hiding the scrollbar for Internet Explorer, Edge */
    scrollbar-width: none; /* hiding the scrollbar for Firefox */
  }

  .cards_container::-webkit-scrollbar {
    display: none; /* hiding the scrollbar for Chrome, Safari, and Opera */
  }
  .card {
    width: 20%;
    flex: 1 0 25%;
  }
}

@media screen and (max-width: 620px) {
  .cards_container {
    gap: 8px;
  }
  .card {
    width: 25%;
    flex: 1 0 30%;
  }
  .image {
    height: 130px;
  }
}

@media screen and (max-width: 470px) {
  .card {
    flex: 1 0 40%;
  }
}

@media screen and (max-width: 350px) {
  .card {
    flex: 1 0 45%;
  }
}
</style>
