import { createStore } from 'vuex';

export default createStore({
  state: {
    blogs: [],
  },
  getters: {},
  mutations: {
    listarBlogs(state) {
      state.blogs = 'Ave';
    },
  },
  actions: {},
  modules: {},
});
