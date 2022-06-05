<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      [Place filter component here]
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :chartData="performanceData" />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
  },
  computed: {
    performanceData() {
      return this.$store.getters.getPerformanceData;
    },
  },
  mounted() {
    this.$store.dispatch("loadPerformanceData")
  },
};
</script>
