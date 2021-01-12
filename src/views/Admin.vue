<template>
  <div class="dashboard">
      <DashboardNav style="flex: 350px;" active="klienci"/>
      <KlienciAdmin/>
    <Footer/>
  </div>
</template>

<script>
import { createStore } from 'vuex'

import DashboardNav from '@/components/DashboardNav.vue'
import KlienciAdmin from '@/components/KlienciAdmin.vue'
// import FormularzDodawania from '@/components/FormularzDodawania.vue'

export default {
  name: 'DodajOgloszenie',
  store: createStore,
  components: {
    DashboardNav,
    KlienciAdmin
  },
  mounted(){
    if(this.$store.state.role !== "ROLE_ADMIN"){
      alert("Aby korzystać z panelu admina, najpierw musisz nim być");
      this.$router.push("/");
    }
    else{
      document.title = "Panel Administratora - wdmj.pl";
      window.scrollTo(0,0);
    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard{
  display: flex;
}
</style>