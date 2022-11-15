<template>
  <q-page class="q-px-lg q-py-lg">
    <div class="route_name">
      <div class="text-h6">{{ $route.name }}</div>
    </div>

    <div class="top_cards q-mt-lg">
      <div class="card bg-white q-pt-md">
        <div class="text-caption text-weight-light q-px-md text-uppercase">
          Total Sales
        </div>

        <div class="row justify-between q-px-md text-h6 text-bold items-center">
          <div>
            <span class="text-subtitle1 text-bold q-my-auto"> ₦ </span>
            <span class="">{{ total }}</span>
          </div>
          <div class="row items-center">
            <q-icon
              size="0.9rem"
              :name="`fa-solid fa-caret-up`"
              color="green"
            />
            <div :class="`text-green text-subtitle2`">10%</div>
          </div>
        </div>
      </div>

      <div class="card bg-white q-pt-md">
        <div class="text-caption text-weight-light q-px-md text-uppercase">
          Total Orders
        </div>

        <div class="row justify-between q-px-md text-h6 text-bold items-center">
          <div>
            <span class="">{{ orders }}</span>
          </div>
          <div class="row items-center">
            <q-icon
              size="0.9rem"
              :name="`fa-solid fa-caret-up`"
              color="green"
            />
            <div :class="`text-green text-subtitle2`">10%</div>
          </div>
        </div>
      </div>

      <div class="card bg-white q-pt-md">
        <div class="text-caption text-weight-light q-px-md text-uppercase">
          Total Customers
        </div>

        <div class="row justify-between q-px-md text-h6 text-bold items-center">
          <div>
            <span class="">{{ customers }}</span>
          </div>
          <div class="row items-center">
            <q-icon
              size="0.9rem"
              :name="`fa-solid fa-caret-up`"
              color="green"
            />
            <div :class="`text-green text-subtitle2`">10%</div>
          </div>
        </div>
      </div>
    </div>

    <div class="middle_cards q-mt-xl">
      <!-- <div id="chart" class="middle_card q-pa-md bg-white">
        <apexchart
          type="line"
          :options="chartOptionsA"
          :series="seriesA"
        ></apexchart>
      </div> -->

      <!-- <div id="chart" class="middle_card q-pa-md bg-white">
        <apexchart
          type="pie"
          :options="chartOptionsB"
          :series="seriesB"
          width="500"
        ></apexchart>
      </div> -->
    </div>

    <div class="bottom_cards q-mt-xl">
      <BottomCards
        :recentOrders="recentOrders"
        :customersList="customersList"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";
import BottomCards from "../../components/Vendor/Dashboard/BottomCards.vue";

export default defineComponent({
  name: "DashboardPage",
  components: {
    apexchart: VueApexCharts,
    BottomCards,
  },
  data() {
    return {
      seriesA: [
        {
          name: "Session Duration",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
      ],
      chartOptionsA: {
        chart: {
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [5, 7, 5],
          curve: "straight",
          dashArray: [0, 8, 5],
        },
        title: {
          text: "Sales Report",
          align: "left",
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - " +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ""
            );
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            " Jan",
            " Feb",
            " Mar",
            " Apr",
            " May",
            " Jun",
            " Jul",
            " Aug",
            " Sep",
            " Oct",
            " Nov",
            " Dec",
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (mins)";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val + " per session";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          ],
        },
        grid: {
          borderColor: "#f1f1f1",
        },
      },
      seriesB: [44, 55, 41, 17, 15],
      chartOptionsB: {
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 565,
            options: {
              chart: {
                width: 400,
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 500,
            options: {
              chart: {
                width: 350,
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 425,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      total: null,
      orders: null,
      customers: null,
      recentOrders: [],
      customersList: null,
    };
  },

  methods: {
    getOrders() {
      this.$api
        .get(`orders/all`)
        .then((resp) => {
          let arr = resp.data.data;
          let bro = arr.map((item) => {
            return item.customers_name;
          });
          let newArr = [];

          bro.forEach((item) => {
            if (item !== null) {
              if (newArr.length) {
                let hi = newArr.find((stuff) => item === stuff);
                if (!hi) newArr.push(item);
              } else {
                newArr.push(item);
              }
            }
          });
          const userData = this.$store.auth.userDetails.name;
          newArr = newArr.filter((item) => item !== userData);
          this.customersList = newArr;
          this.customers = newArr.length;

          //Getting the number of time an item showed in the orders array
          const uniqueArray = [];
          arr.forEach((m) => {
            const obj = { key: m.product_name, count: 1 };
            const index = uniqueArray.findIndex((f) => {
              return f.key === m.product_name;
            });
            index === -1
              ? uniqueArray.push(obj)
              : (uniqueArray[index].count += 1);
          });

          console.log(uniqueArray);
          let recentArr = [];
          uniqueArray.forEach((item) => {
            if (item.count >= 4) {
              console.log(item);
              recentArr.push(item);
            }
          });
          this.recentOrders = recentArr;
        })
        .catch((response) => {
          console.log(response);
          // this.$q.notify({
          //   message: response.data.message,
          //   color: "red",
          //   position: "top",
          // });
          // this.errors = response.data.errors;
        });
    },
    totalSales() {
      let details = this.$store.auth.vendorDetails.slug;
      if (details) {
        this.$api
          .get(`/business/${details}/vendor/sales`)
          .then((resp) => {
            this.total = resp.data.data;
          })
          .catch((response) => {
            console.log(response);
            // this.$q.notify({
            //   message: response.data.message,
            //   color: "red",
            //   position: "top",
            // });
            // this.errors = response.data.errors;
          });
      }
    },
    totalOrders() {
      let details = this.$store.auth.vendorDetails.slug;
      if (details) {
        this.$api
          .get(`/business/${details}/vendor/orders`)
          .then((resp) => {
            this.orders = resp.data.data;
          })
          .catch((response) => {
            console.log(response);
            // this.$q.notify({
            //   message: response.data.message,
            //   color: "red",
            //   position: "top",
            // });
            // this.errors = response.data.errors;
          });
      }
    },
    // totalCustomers() {
    //   let details = this.$store.auth.vendorDetails.slug;
    //   if (details) {
    //     this.$api
    //       .get(`/business/${details}/vendor/customers`)
    //       .then((resp) => {
    //         console.log(resp);
    //         this.customers = resp.data.data;
    //       })
    //       .catch((response) => {
    //         console.log(response);
    //         // this.$q.notify({
    //         //   message: response.data.message,
    //         //   color: "red",
    //         //   position: "top",
    //         // });
    //         // this.errors = response.data.errors;
    //       });
    //   }
    // },
  },
  created() {
    this.getOrders();

    this.totalSales();
    this.totalOrders();
    // this.totalCustomers();
  },
});
</script>

<style>
.top_cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.card,
.middle_card,
.bottom_card {
  border-radius: 15px;
}
.card {
  height: 160px;
}
.middle_cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.bottom_cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.bottom_card {
  height: 50vh;
}
.vue-apexcharts {
  min-height: 100% !important;
}
.apexcharts-svg,
.apexcharts-canvas,
.apexcharts-inner {
  height: 100% !important;
  width: 100% !important;
}
.user_item {
  background-color: rgb(173, 215, 230, 0.3);
  border-radius: 10px;
}

@media screen and (max-width: 1450px) {
  .top_cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 1150px) {
  .top_cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .middle_cards {
    grid-template-columns: 1fr;
  }
  .bottom_cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 930px) {
  .bottom_cards {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 770px) {
  .route_name {
    display: none;
  }
}

@media screen and (max-width: 520px) {
  .top_cards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
