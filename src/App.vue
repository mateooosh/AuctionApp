<template>
  <router-view/>
</template>

<script>
import {createStore} from "vuex";

export default {
  name: 'App',
  store: createStore,
  mounted() {
    console.log('start')
    const token = localStorage.getItem('token')
    if (token) {
      this.$store.commit('logged', true);
      this.$store.commit('userId', localStorage.getItem('userId'));
      this.$store.commit('userEmail', localStorage.getItem('userEmail'));
      this.$store.commit('role', localStorage.getItem('role'));
      this.$store.commit('token', token);
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
  margin: 0;
}

a, a:link, a:visited {
  text-decoration: none;
  color: black;
}


</style>
