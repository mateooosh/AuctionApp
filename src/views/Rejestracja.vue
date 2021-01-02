<template>
  <div class="zarejestruj">
    <Navbar/>
    <Zarejestruj/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Zarejestruj from '@/components/Zarejestruj.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Rejestracja',
  components: {
    Navbar,
    Zarejestruj,
    Footer
  },
  mounted(){
    document.title = "Rejestracja - wdmj.pl";
    window.scrollTo(0,0);
  }
}
</script>
