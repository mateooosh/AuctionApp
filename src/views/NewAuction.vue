<template>
  <div class="dodaj-ogloszenie">
    <Navbar/>
    <NewAuctionForm/>
    <Footer/>
  </div>
</template>

<script>
import {createStore} from 'vuex'

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import NewAuctionForm from '@/components/NewAuctionForm.vue'

export default {
  name: 'NewAuction',
  store: createStore,
  components: {
    Navbar,
    Footer,
    NewAuctionForm,
  },
  mounted() {
    if (!this.$store.state.logged) {
      alert("Aby dodać aukcję, najpierw musisz się zalogować");
      this.$router.push("/logowanie");
    } else {
      document.title = "Dodaj Ogłoszenie - wdmj.pl";
      window.scrollTo(0, 0);
    }
  }
}
</script>
