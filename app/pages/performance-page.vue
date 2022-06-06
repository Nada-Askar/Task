<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <date-range-picker-component @updateDates="updateDates" />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :chartData="performanceData" :startDate="startDate" :endDate="endDate" />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import DateRangePickerComponent from "../components/vue-components/date-range-picker.vue";

export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    DateRangePickerComponent,
  },
  data() {
    return { startDate: "01/10/2022", endDate: "01/16/2022" };
  },
  computed: {
    performanceData() {
      return this.$store.getters.getPerformanceData;
    },
  },
  mounted() {
    this.$store.dispatch("loadPerformanceData");
  },
  methods: {
    updateDates(startDate, endDate) {
      this.startDate = startDate;
      this.endDate = endDate;
    },
  },
};
</script>
