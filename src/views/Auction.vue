<template>
  <div class="">
    <Navbar/>
    <Search class="search"/>
    <!-- <h1>OFERTY</h1> -->

    <!-- Force component to rerender -->
    <AuctionDetails :key="$route.params.auctionId"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/Search.vue'
import AuctionDetails from '../components/AuctionDetails.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Auction',
  data() {
    return {}
  },
  components: {
    Navbar,
    Search,
    AuctionDetails,
    Footer
  },
  mounted() {
    document.title = "Oferta - wdmj.pl";
    window.scrollTo(0, 0);
  },
  methods: {}
}
</script>


<style lang="scss" scoped>
.search {
  margin: 80px auto 30px;
}
</style>