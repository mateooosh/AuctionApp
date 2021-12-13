import {createStore} from 'vuex'

export default createStore({
  state: {
    logged: false,
    userId: '',
    userEmail: '',
    role: '',
    token: null
  },
  mutations: {
    logged(state, item) {
      state.logged = item;
    },
    userId(state, item) {
      state.userId = item;
    },
    userEmail(state, item) {
      state.userEmail = item;
    },
    role(state, item) {
      state.role = item;
    },
    token(state, item) {
      state.token = item;
    }
  },
  actions: {
    showInConsole() {
      console.log('tu twoj store');
    },
    logOut() {
      this.logged = false;
      this.userId = '';
      this.userEmail = '';
      this.role = '';
      this.token = null;
    }
  },
  modules: {}
})
