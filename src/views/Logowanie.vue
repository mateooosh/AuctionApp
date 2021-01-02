<template>
  <div class="zaloguj">
    <Navbar/>
    <Zaloguj/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Zaloguj from '@/components/Zaloguj.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Logowanie',
  components: {
    Navbar,
    Zaloguj,
    Footer
  },
  mounted(){
    

    if(this.$store.state.logged){
      this.$router.push("/");
    }
    else{
      document.title = "Logowanie - wdmj.pl";
      window.scrollTo(0,0);
    }
  }
}
</script>
