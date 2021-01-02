<template>
  <div class="dodaj-ogloszenie">
    <Navbar/>
    <FormularzDodawania/>
    <Footer/>
  </div>
</template>

<script>
import { createStore } from 'vuex'

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import FormularzDodawania from '@/components/FormularzDodawania.vue'

export default {
  name: 'DodajOgloszenie',
  store: createStore,
  components: {
    Navbar,
    Footer,
    FormularzDodawania,
  },
  mounted(){
    if(!this.$store.state.logged){
      alert("Aby dodać aukcję, najpierw musisz się zalogować");
      this.$router.push("/logowanie");
    }
    else{
      document.title = "Dodaj Ogłoszenie - wdmj.pl";
      window.scrollTo(0,0);
    }
  }
}
</script>
