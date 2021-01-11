<template>
  <div class="dashboard">
      <DashboardNav active="aukcje"/>
      admin aukcje
  </div>
</template>

<script>
import { createStore } from 'vuex'

import DashboardNav from '@/components/DashboardNav.vue'

export default {
  name: 'DodajOgloszenie',
  store: createStore,
  components: {
    DashboardNav
  },
  mounted(){
    // if(!this.$store.state.logged){
    //   alert("Nie masz takich uprawnień!");
    //   this.$router.push("/logowanie");
    // }
    // else{
    //   document.title = "Panel Administratora - wdmj.pl";
    //   window.scrollTo(0,0);
    // }
  }
}
</script>
