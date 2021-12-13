<template>
  <div class="dashboard">
    <DashboardNav style="flex: 350px;" active="aukcje"/>
    <AuctionsAdmin/>
  </div>
</template>

<script>
import {createStore} from 'vuex'

import DashboardNav from '@/components/DashboardNav.vue'
import AuctionsAdmin from '@/components/AuctionsAdmin.vue'

export default {
  name: 'AdminAuctions',
  store: createStore,
  components: {
    DashboardNav,
    AuctionsAdmin
  },
  mounted() {
    if (this.$store.state.role !== "ROLE_ADMIN") {
      alert("Aby korzystać z panelu admina, najpierw musisz nim być");
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
}
</style>
