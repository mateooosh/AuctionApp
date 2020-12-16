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
  }
}
</script>
