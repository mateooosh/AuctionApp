<template>
  <div class="home">
    <Navbar/>
    <Search class="search"/>
    <Categories/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/Search.vue'
import Categories from '@/components/Categories.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Search,
    Categories,
    Footer
  }
}
</script>


<style lang="scss" scoped>
.search{
  margin: 80px auto;
}
</style>