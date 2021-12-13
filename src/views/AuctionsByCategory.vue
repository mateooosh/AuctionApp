<template>
  <div class="">
    <Navbar/>
    <Search class="search"/>
    <!-- <h1>OFERTY</h1> -->
    <!-- {{kategoria}} -->
    <SearchResults :kategoria="kategoria" :key="$route.params.kategoria"/>
    <!-- <SearchResults v-if="query.length!=0" :query="query"/> -->
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/Search.vue'
import SearchResults from '@/components/SearchResults.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'AuctionsByCategory',
  data() {
    return {
      // query: '',
    }
  },
  components: {
    Navbar,
    Search,
    SearchResults,
    Footer
  },
  computed: {
    kategoria: function () {
      return this.$route.params.kategoria;
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    getKategoria(v) {
      console.log("ta", v);
    }
  }
}
</script>


<style lang="scss" scoped>
.search {
  margin: 80px auto 30px;
}
</style>