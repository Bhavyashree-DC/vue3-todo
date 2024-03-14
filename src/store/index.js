import { createStore } from 'vuex';
import axios from 'axios';
import { statisticProps } from 'element-plus';

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
    completedTodos: (state) => state.list.filter(todo => todo.completed),
    pendingTodos: (state) => state.list.filter(todo=> !todo.completed),
    totalTodos: (state) => state.list.length,
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
    async postTask({ commit },todo){
      try{
           const userId = 5;
           const completed = false;

           const dataToSend = {
              todo,
              completed,
              userId
           }
           const response = await fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const resData = await response.json();
          commit('setData', resData);
        } catch (error) {
          console.error('Error posting task:', error);
          throw error;
        }
      }
    }
});

export default store;
