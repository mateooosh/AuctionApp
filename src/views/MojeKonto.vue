<template>
  <div class="konto">
    <Navbar/>
    <h1>Moje konto</h1>
    <Zaloguj/>
    <Zarejestruj/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Zaloguj from '@/components/Zaloguj.vue'
import Zarejestruj from '@/components/Zarejestruj.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'MojeKonto',
  components: {
    Navbar,
    Zaloguj,
    Zarejestruj,
    Footer
  }
}
</script>
