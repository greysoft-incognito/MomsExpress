<template>
  <div class="bottom_card bg-white">
    <div class="q-pa-md text-bold">Top Selling Items</div>
    <q-separator class="q-mt-xs q-mb-md" />

    <q-scroll-area style="height: 40vh; width: 100%">
      <div class="q-px-md">
        <div
          v-for="n in recentOrders"
          :key="n"
          class="user_item q-my-sm q-px-lg q-py-md row justify-between"
        >
          <div>{{ n.key }}</div>
          <!-- <div>2mins ago</div> -->
        </div>
      </div>
    </q-scroll-area>
  </div>

  <!-- <div class="bottom_card bg-white">
    <div class="q-pa-md text-bold">Latest Orders</div>
    <q-separator class="q-mt-xs q-mb-md" />

    <q-scroll-area style="height: 40vh; width: 100%">
      <UserTimeline />
    </q-scroll-area>
  </div> -->

  <div class="bottom_card bg-white">
    <div class="q-pa-md text-bold">Recent Customers</div>
    <q-separator class="q-mt-xs q-mb-md" />

    <q-scroll-area style="height: 40vh; width: 100%">
      <div class="q-px-md">
        <div
          v-for="n in customersList"
          :key="n"
          class="user_item q-my-sm q-px-sm q-py-md row justify-between"
        >
          <div>{{ n }}</div>
          <!-- <div class="text-caption">{{ n.date }}</div> -->
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import UserTimeline from "src/components/Admin/Users/UserTimeline.vue";
export default {
  components: { UserTimeline },
  props: ["recentOrders", "customersList"],
  data() {
    return {
      people: [],
      orders: [],
    };
  },
  methods: {
    // getOrders() {
    //   this.$api
    //     .get(`orders/all`)
    //     .then((resp) => {
    //       let arr = resp.data.data;
    //       let bro = arr.map((item) => {
    //         return item.customers_name;
    //       });
    //       // console.log(bro);
    //       let newArr = [];
    //       bro.forEach((item) => {
    //         if (item !== null) {
    //           if (newArr.length) {
    //             let hi = newArr.find((stuff) => item === stuff);
    //             if (!hi) newArr.push(item);
    //           } else {
    //             newArr.push(item);
    //           }
    //         }
    //         // return newArr;
    //       });
    //       const userData = this.$store.auth.userDetails.name;
    //       newArr = newArr.filter((item) => item !== userData);
    //       this.people = newArr;
    //       console.log(newArr);
    //       this.orders = resp.data.data;
    //     })
    //     .catch((response) => {
    //       this.$q.notify({
    //         message: response.data.message,
    //         color: "red",
    //         position: "top",
    //       });
    //       this.errors = response.data.errors;
    //     });
    // },
  },
  created() {
    // this.getOrders();
  },
};
</script>

<style scoped></style>
