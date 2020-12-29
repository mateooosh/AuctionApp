<template>
  <div class="">
    <Navbar/>
    <Search class="search"/>
    <!-- <h1>OFERTY</h1> -->
    <SzczegolyOferty :idAukcji="idAukcji"/>
    idAukcji: {{idAukcji}}
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Search from '@/components/Search.vue'
import SzczegolyOferty from '../components/SzczegolyOferty.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Oferta',
  data(){
    return{
    //   idAukcji: '',
    }
  },
  components: {
    Navbar,
    Search,
    SzczegolyOferty,
    Footer
  },
  computed:{
    idAukcji: function() {
        return this.$route.params.idAukcji;
    }
  },
  mounted(){
      console.log(this.$route.params.idAukcji);
  },
  methods:{
    
  }
}
</script>


<style lang="scss" scoped>
.search{
  margin: 80px auto 30px;
}
</style>