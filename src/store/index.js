import { createStore } from 'vuex'

export default createStore({
  state: {
    logged: true,
    userId: '',
  },
  mutations: {
    logged(state, item){
      state.logged = item;
    },
    userId(state, item){
      state.userId = item;
    }
  },
  actions: {
    showInConsole(){
      console.log('tu twoj store');
    },
    
  },
  modules: {
  }
})
