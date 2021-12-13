<template>
  <div class="home">
    <Navbar/>
    <Search class="search"/>
    <Categories/>
    <LatestAuctions/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/Search.vue'
import Categories from '@/components/Categories.vue'
import LatestAuctions from '@/components/LatestAuctions.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Search,
    Categories,
    LatestAuctions,
    Footer
  },
  mounted() {
    document.title = "wdmj.pl";
    window.scrollTo(0, 0);
  }
}
</script>


<style lang="scss" scoped>
.search {
  margin: 80px auto;
}
</style>