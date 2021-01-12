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
      if(this.$store.state.role !== "ROLE_ADMIN"){
        alert("Aby korzystać z panelu admina, najpierw musisz nim być");
        this.$router.push('/');
      }
  }
}
</script>

<style lang="scss" scoped>
.dashboard{
  display: flex;
}
</style>
