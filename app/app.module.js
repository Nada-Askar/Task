import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import store from './store';
import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import SalesTeamFilterComponent from './components/vue-components/sales-team-filter.vue';
import NotFoundPageComponent from './pages/not-found-page.vue';
import NotFoundComponent from './components/vue-components/not-found.vue';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]).config(($ngVueProvider) => {
  $ngVueProvider.setRootVueInstanceProps({
    store: store,
  });
});

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vSalesTeamFilter', (createVueComponent) => {
  return createVueComponent(Vue.component('salesTeamFilterComponent', SalesTeamFilterComponent));
});

angular.module('appModule').directive('vNotFoundPage', (createVueComponent) => {
  return createVueComponent(Vue.component('notFoundPageComponent', NotFoundPageComponent));
});

angular.module('appModule').directive('vNotFound', (createVueComponent) => {
  return createVueComponent(Vue.component('notFoundComponent', NotFoundComponent));
});
