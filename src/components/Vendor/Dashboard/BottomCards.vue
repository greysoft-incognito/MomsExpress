<template>
  <div class="bottom_card bg-white">
    <div class="q-pa-md text-bold">Top Selling Items</div>
    <q-separator class="q-mt-xs q-mb-md" />

    <q-scroll-area style="height: 40vh; width: 100%">
      <div class="q-px-md">
        <div
          v-for="n in orders"
          :key="n"
          class="user_item q-my-sm q-px-lg q-py-md row justify-between"
        >
          <div>{{ n.product_name }}</div>
          <!-- <div>2mins ago</div> -->
        </div>
      </div>
    </q-scroll-area>
  </div>
  <div class="bottom_card bg-white">
    <div class="q-pa-md text-bold">Latest Orders</div>
    <q-separator class="q-mt-xs q-mb-md" />

    <q-scroll-area style="height: 40vh; width: 100%">
      <UserTimeline />
    </q-scroll-area>
  </div>

  <div class="bottom_card bg-white">
    <div class="q-pa-md text-bold">Recent Customers</div>
    <q-separator class="q-mt-xs q-mb-md" />

    <q-scroll-area style="height: 40vh; width: 100%">
      <div class="q-px-md">
        <div
          v-for="n in people"
          :key="n"
          class="user_item q-my-sm q-px-sm q-py-md row justify-between"
        >
          <div>{{ n.email }}</div>
          <div class="text-caption">{{ n.date }}</div>
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import UserTimeline from "src/components/Admin/Users/UserTimeline.vue";
export default {
  components: { UserTimeline },
  data() {
    return {
      people: [
        {
          email: "joshchief169@gmail.com",
          date: "3 weeks Ago ",
        },
        {
          email: "tobiikupolati@gmail.com",
          date: "2weeks Ago",
        },
        {
          email: "moms@gmail.com",
          date: "2weeks Ago",
        },
        {
          email: "emma@gmail.com",
          date: "1 week Ago ",
        },
      ],
      orders: [],
    };
  },
  methods: {
    getOrders() {
      this.$api
        .get(`orders/all`)
        .then((resp) => {
          console.log(resp.data);
          this.orders = resp.data.data;
        })
        .catch((response) => {
          this.$q.notify({
            message: response.data.message,
            color: "red",
            position: "top",
          });
          this.errors = response.data.errors;
        });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style scoped></style>
