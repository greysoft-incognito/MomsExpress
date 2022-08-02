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
        <div class="q-pa-md text-bold">Top Customers</div>
        <q-separator class="q-mt-xs q-mb-md" />
      </div>
    </div>

    <div class="bottom_cards q-mt-xl">
      <BottomCards />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import VueApexCharts from "vue3-apexcharts";
import TopCards from "../../components/Vendor/Dashboard/TopCards.vue";
import BottomCards from "../../components/Vendor/Dashboard/BottomCards.vue";

const cards = [
  {
    title: "Total Sales",
    symbol: "$",
    icon: "fa-caret-up",
    icon_color: "green",
  },
  {
    title: "Sales today",
    symbol: "$",
    icon: "fa-caret-down",
    icon_color: "red",
  },
  {
    title: "Total customers",
    symbol: "",
    icon: "fa-caret-up",
    icon_color: "green",
  },
  {
    title: "New customers",
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
    BottomCards,
  },
  data() {
    return {
      cards,
      series: [
        {
          name: "Session Duration",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
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
.middle_card {
  /* height: 60vh; */
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
</style>
