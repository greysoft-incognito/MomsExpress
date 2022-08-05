<template>
  <q-page class="q-px-lg q-py-xl">
    <div class="text-h6">{{ $route.name }}</div>
    <div class="text-weight-thin">Lorem Store Name</div>

    <div class="top_cards q-mt-lg">
      <TopCards :cards="cards" />
    </div>

    <div class="middle_cards q-mt-xl">
      <div class="graph_container middle_card q-pa-md bg-white">
        <div id="chart">
          <apexchart
            type="area"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>

      <div class="middle_card bg-white">
        <div class="q-pa-md text-bold">Newly Registered</div>
        <q-separator class="q-mt-xs q-mb-md" />

        <div class="q-px-md">
          <div
            @click="this.$router.push('/user_detail')"
            v-for="n in 9"
            :key="n"
            class="user_item q-my-sm q-px-sm q-py-md row justify-between"
          >
            <div>tobiikupolati@gmail.com</div>
            <div>Buyer</div>
            <div>2mins ago</div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";
import TopCards from "../../components/Admin/Dashboard/TopCards.vue";

const cards = [
  {
    title: "Total Users",
    symbol: "$",
    icon: "fa-caret-up",
    icon_color: "green",
  },
  {
    title: "Total No. of Buyers",
    symbol: "$",
    icon: "fa-caret-down",
    icon_color: "red",
  },
  {
    title: "Total No. of Sellers ",
    symbol: "",
    icon: "fa-caret-up",
    icon_color: "green",
  },
  {
    title: "No. of visitors",
    symbol: "",
    icon: "fa-caret-down",
    icon_color: "red",
  },
];

export default defineComponent({
  name: "DashboardPage",
  components: {
    apexchart: VueApexCharts,
    TopCards,
  },
  data() {
    return {
      cards,
      series: [
        {
          name: "Buyers",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: "Vendors",
          data: [33, 26, 21, 20, 6, 45, 52, 38, 24, 8, 15, 10],
        },
      ],
      chartOptions: {
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
          text: "Users Report",
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
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan",
            "08 Jan",
            "09 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
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
    };
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
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

.bottom_cards {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}
.bottom_card {
  height: 50vh;
}
.vue-apexcharts {
  min-height: 50vh !important;
}

.user_item {
  background-color: rgb(173, 215, 230, 0.3);
  border-radius: 10px;
}

.user_item:hover {
  cursor: pointer;
  background-color: rgb(128, 128, 128, 0.2);
}
</style>
