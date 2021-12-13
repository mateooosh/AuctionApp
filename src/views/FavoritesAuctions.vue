<template>
  <div class="ulubione">
    <Navbar/>
    <Favorite/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Favorite from '@/components/Favorite.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'FavoritesAuctions',
  components: {
    Navbar,
    Favorite,
    Footer,
  },
  mounted() {
    if (!this.$store.state.logged) {
      this.$router.push("/");
    } else {
      document.title = "Ulubione - wdmj.pl";
      window.scrollTo(0, 0);
    }
  }
}
</script>
