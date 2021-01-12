import { createStore } from 'vuex'

export default createStore({
    state: {
        logged: false,
        userId: '',
        userEmail: '',
        role: '',
    },
    mutations: {
        logged(state, item){
            state.logged = item;
        },
        userId(state, item){
            state.userId = item;
        },
        userEmail(state, item){
            state.userEmail = item;
        },
        role(state, item){
            state.role = item;
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
