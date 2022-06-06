<template>
  <div class="c-chart__container">
    <v-chart ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",

  components: {
    VChart,
  },
  props: ["chartData", "startDate", "endDate"],
  data() {
    return {};
  },

  computed: {
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },

    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          show: "true",
          showContent: "true",
          trigger: "axis",
          transitionDuration: 0,
          confine: true,
          hideDelay: 0,
          backgroundColor: "#11203b",
          textStyle: {
            color: "white",
            fontSize: 14,
          },
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "25px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          name: "Home page",
          nameLocation: "center",
          nameTextStyle: {
            padding: 10,
            fontSize: "16px",
            color: "black",
          },
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: 'red'
            },
            {
              gt: 50,
              lte: 80,
              color: 'yellow'
            },
            {
              gt: 80,
              lte: 100,
              color: 'green'
            }
          ]
        },
        series: [
          {
            name: 'Team Performance Index:',
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
          },
        ],
      };
    },

    xAxisData() {
      return this.filteredData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.filteredData.map((item) => +item.performance * 100);
    },

    filteredData() {
      return this.filterData(this.startDate, this.endDate);
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },

    /**
     * Function that filters chart data based on start date and end date
     * by default, the function shows chart data between the start and end date of the entire performance data
     * when the user chooses a start and end date, it filters the performance data based on that 
     */

    filterData(startDate, endDate) {
      return this.chartData.filter((item) =>
        new Date(item.date_ms) >= new Date(startDate)
        && new Date(item.date_ms) <= new Date(endDate)
      );
    },
  },
};
</script>
