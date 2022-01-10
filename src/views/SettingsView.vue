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
  name: 'SettingsView',
  components: {
    Navbar,
    Settings,
    Footer
  },
  mounted() {
    if (!this.$store.state.logged) {
      this.$router.push("/logowanie");
    } else {
      document.title = "Ustawienia - wdmj.pl";
      window.scrollTo(0, 0);
    }
  }
}
</script>
