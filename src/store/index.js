import { createStore } from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'
import order from './order'




export default createStore({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
 
  modules: {
    auth, info, category, order
  }
})
