import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      title: '',
      estado: false,
    }
  },
  mutations: {
    showLoading(state, payload) {
      state.loading.title = payload.title;
      state.loading.estado = true;
    },
    hideLoading(state) {
      state.loading.title = '';
      state.loading.estado = false;
    }
  },
  actions: {
    activeLoading({commit}, payload) {
      commit('showLoading', payload);
    },
    deactiveLoading({commit}) {
      commit('hideLoading');
    },
  },
  modules: {
  }
})
