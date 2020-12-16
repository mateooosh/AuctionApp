<template>
    <div class="settings">
        <h1>Ustawienia</h1>
            
    </div>
</template>

<script>
import { createStore } from 'vuex'

export default {
  name: 'Settings',
  store: createStore,
  methods:{
    getLogged(){
      return this.$store.state.logged;
    }
  }
}
</script>

<style scoped lang="scss">

</style>
