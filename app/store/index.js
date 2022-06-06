import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const store = new Vuex.Store({
  state: {
    teamPerformance: [],
  },
  getters: {
    getPerformanceData: (state) => state.teamPerformance,
  },
  actions: {
    loadPerformanceData({ commit }) {
      axios
        .get('https://fe-task.getsandbox.com/performance')
        .then(response => response.data)
        .then(teamPerformance => {
          commit('SET_PERF_DATA', teamPerformance);
        });
    },
  },
  mutations: {
    SET_PERF_DATA(state, teamPerformance) {
      state.teamPerformance = teamPerformance;
    },
  },
});
export default store;
