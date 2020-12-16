import { createStore } from 'vuex'

export default createStore({
  state: {
    logged: true,
  },
  mutations: {
    logged(state, item){
      state.logged = item;
    }
  },
  actions: {
    showInConsole(){
      console.log('tu twoj store');
    }
  },
  modules: {
  }
})
