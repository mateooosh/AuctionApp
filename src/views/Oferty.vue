<template>
  <div class="">
    <Navbar/>
    <Search class="search"/>
    <!-- <h1>OFERTY</h1> -->
    <Wyszukane :query="query"/>
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
  name: 'Oferty',
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
    query: function(){
      return this.$route.params.query;
    }
  },
  mounted(){
      console.log(this.$route.params.query);
  },
  methods:{
    getQuery(v){
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