<template>
  <div class="dashboard">
      <DashboardNav style="flex: 350px;" active="aukcje"/>
      <AukcjeAdmin/>
  </div>
</template>

<script>
import { createStore } from 'vuex'

import DashboardNav from '@/components/DashboardNav.vue'
import AukcjeAdmin from '@/components/AukcjeAdmin.vue'

export default {
  name: 'AdminAukcje',
  store: createStore,
  components: {
    DashboardNav,
    AukcjeAdmin
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

<style lang="scss" scoped>
.dashboard{
  display: flex;
}
</style>
