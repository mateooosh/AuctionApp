<template>
  <div class="dodaj-ogloszenie">
    <Navbar/>
    <FormularzDodawania/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import FormularzDodawania from '@/components/FormularzDodawania.vue'

export default {
  name: 'DodajOgloszenie',
  components: {
    Navbar,
    Footer,
    FormularzDodawania,
  }
}
</script>
