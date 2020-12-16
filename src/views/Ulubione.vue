<template>
  <div class="ulubione">
    <Navbar/>
    <h1>Ulubione</h1>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Ulubione',
  components: {
    Navbar,
    Footer,
  }
}
</script>
