<template>
  <div class="">
    <Navbar/>
    <Search class="search"/>
    <h1>OFERTY</h1>
    Szukamy: {{$route.params.query}}
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/Search.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Oferty',
  components: {
    Navbar,
    Search,
    Footer
  },
  mounted(){
      console.log(this.$route.params.query);
      
  }
}
</script>


<style lang="scss" scoped>
.search{
  margin: 80px auto;
}
</style>