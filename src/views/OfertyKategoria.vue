<template>
  <div class="">
    <Navbar/>
    <Search class="search"/>
    <!-- <h1>OFERTY</h1> -->
    <!-- {{kategoria}} -->
    <Wyszukane :kategoria="kategoria"/>
    <!-- <Wyszukane v-if="query.length!=0" :query="query"/> -->
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/Search.vue'
import Wyszukane from '@/components/Wyszukane.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'OfertyKategoria',
  data(){
    return{
      // query: '',
    }
  },
  components: {
    Navbar,
    Search,
    Wyszukane,
    Footer
  },
  computed:{
    kategoria: function(){
      return this.$route.params.kategoria;
    }
  },
  mounted(){
      // console.log(this.$route.params.kategoria);
      
  },
  methods:{
    getKategoria(v){
      console.log("ta",v);
    }
  }
}
</script>


<style lang="scss" scoped>
.search{
  margin: 80px auto 30px;
}
</style>