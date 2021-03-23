import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import actions from './actions'
import mutations from './mutations'

const store = createStore({
  state: {
    todos: [], 
    user: {},
    user_token: ''
  },
  mutations: mutations,
  actions: actions,
  getters: {
    getTodos: (state) => state.todos, 
    getUser: (state) => state.user,
    getToken: (state) => state.user_token,
    checkUserStatus: (state) => {
      if(state.todos == [] ) return true
      else return false
    }

  }, 
  plugins: [createPersistedState()]
})
export default store;
