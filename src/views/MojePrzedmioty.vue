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
  }
}
</script>
