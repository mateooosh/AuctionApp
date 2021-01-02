<template>
  <div class="konto">
    <Navbar/>
    <h1>Moje Przedmioty</h1>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'MojePrzedmioty',
  components: {
    Navbar,
    Footer
  },
  mounted(){
    if(!this.$store.state.logged){
      this.$router.push("/logowanie");
    }
    else{
      document.title = "Moje przedmioty - wdmj.pl";
      window.scrollTo(0,0);
    }
  }
}
</script>
