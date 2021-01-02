<template>
  <div class="konto">
    <Navbar/>
    <h1>Wygrane Licytacje</h1>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'WygraneLicytacje',
  components: {
    Navbar,
    Footer
  },
  mounted(){
    if(!this.$store.state.logged){
      this.$router.push("/");
    }
    else{
      document.title = "Wygrane Licytacje - wdmj.pl";
      window.scrollTo(0,0);
    }
  }
}
</script>
