import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    DATA(state) {
      return state.data;
    }
  },
  mutations: {
    CHANGE_DATA(state, data) {
      state.data = data;
    }
  },
  actions: {
    async GET_DATA(state, paydata) {
      const {data} = await Axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
      state.commit('CHANGE_DATA', data);
    }
  },
  modules: {
  }
})
