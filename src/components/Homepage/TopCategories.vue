<template>
  <div class="top_categories_container big_screen_padding bg-white">
    <div class="text-center text-bold text-h6 q-mb-md">
      Top Categories of The Month
    </div>

    <div class="cards_container">
      <div
        v-for="n in 5"
        :key="n"
        class="column bg-grey-2 border_card card"
        @click="$router.push('/category')"
      >
        <!-- <div class="image_container"> -->
        <q-img class="border_card image" src="Images/2-1.jpg" />
        <!-- </div> -->
        <div class="text-center text-subtitle1 text-bold q-my-xs">Fashion</div>
      </div>
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
