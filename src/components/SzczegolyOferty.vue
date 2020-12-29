<template>
  <div class="details">
      Szczegoly oferty idAukcji: {{idAukcji}}
      <div v-if="mapIsVisible">
        <iframe
          id="map"
          width="325" 
          height="280" frameborder="0" 
          scrolling="yes"
          src="https://www.bing.com/maps/embed?h=280&w=325&cp=52.215933~19.134422&lvl=5&typ=s&sty=r&src=SHELL&FORM=MBEDV8"
          >
        </iframe>
      </div>
  </div>
</template>

<script>
import { createStore } from 'vuex'
export default {
  name: 'SzczegolyOferty',
  store: createStore,
  data(){
    return{
      coordinates:{},
      mapUrl: '',
      mapIsVisible: false,
    }
  },
  props:{
      idAukcji: String
  },



  mounted(){
    let location = "Chrzanów";

    //get coordinates by location
    this.mapIsVisible = true;
    fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json`)
    .then( response => response.json())
    .then( response => {
        console.log(response)
        this.coordinates ={
            lat: response[0].lat,
            lon: response[0].lon
        };
        this.mapUrl = `https://www.bing.com/maps/embed?h=280&w=325&cp=${this.coordinates.lat}~${this.coordinates.lon}&lvl=10&typ=s&sty=r&src=SHELL&FORM=MBEDV8`
        document.getElementById("map").src = this.mapUrl;
    })
    .catch(error => {
        console.log(error);
    })

  },

  methods:{
    
  },
}
</script>

<style scoped lang="scss">
.details{

}
</style>
