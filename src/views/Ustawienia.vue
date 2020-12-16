<template>
  <div class="konto">
    <Navbar/>
    <Settings/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Settings from '@/components/Settings.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Ustawienia',
  components: {
    Navbar,
    Settings,
    Footer
  }
}
</script>
