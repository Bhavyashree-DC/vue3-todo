import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    list: [],
    data: null,
    pagination: null,
  },
  mutations: {
    setList(state, todos) {
      state.list = todos;
    },
    setData(state, value) {
      state.data = value;
    },
    setPagination(state, { total, todos }) {
      state.pagination = { total, todos };
    },
  },
  getters: {
    getList: (state) => state.list,
    getData: (state) => state.data,
    getPagination: (state) => state.pagination,
  },
  actions: {
    async fetchList({ commit }) {
      try {
        const response = await axios.get('https://dummyjson.com/todos');
        const { total, todos } = response.data;
        console.log('Result from array:', response.data);
        commit('setPagination', { total, todos });
        commit('setList', todos);
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
  },
});

export default store;
