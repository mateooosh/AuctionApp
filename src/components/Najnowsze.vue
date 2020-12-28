<template>
    <div class="newest">
        <h1>Najnowsze ogłoszenia</h1>
        <div class="newest__list" v-if="gotData">
            
            <Card v-for="i in 12" :key="i" 
                :title="auctions[0].title" 
                :location="auctions[0].location" 
                :province="auctions[0].province" 
                :actualPrice="auctions[0].actualPrice"
                :instantPrice="auctions[0].instantPrice"
                :url="auctions[0].photo"
                :i="i-1"
            />
            <!-- <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> -->
        </div>

        <button @click="getLatest()" class="newest__btn">Zobacz więcej</button>
    </div>
</template>

<script>
import { createStore } from 'vuex';
import Card from './Card.vue';

export default {
  name: 'Najnowsze',
  store: createStore,
  components:{
      Card,
  },
  data(){
      return{
        gotData: false,
        page: 1,
        auctions: [],
      }
  },
  mounted(){
    this.getLatest();
    let obj = {
        title: "Fiat Multipla Rodzinna Ropucha silnik nie stuka, nic nie puka",
        location: "Kraków",
        province: "małopolskie",
        actualPrice: 8000,
        instantPrice: 12000,
        auctionId: 1,
        state: "Używany",
        category: "Motoryzacja",
        photo: "data:image/png;base64,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"
    }
    this.auctions.push(obj);
    this.gotData = true;
    // console.log(this.auctions[0].title)
  },
  methods:{
    // get status of user
    getLogged(){
      return this.$store.state.logged;
    },

    getLatest(){
      let url = `http://localhost:8080/api/auctions/latest?page=${this.page}`;
      //request
      fetch(url)
      .then(response => {
          if(!response.ok) {
              throw new Error(response.status);
          }
          else 
              return response.json();
      })
      .then(response => {
          // display response from server
          console.log('Sukces. Odebrane dane ', response);
          this.page++;
      })
      .catch(() => {
          console.log('Coś poszło nie tak z requestem:', url);


          alert("Nie udało się pobrać najnowszych aukcji!");
      }) 
    }
  }
}
</script>

<style scoped lang="scss">
.newest{
    width: 1400px;
    margin: auto;
    &__list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    
    

    h1{
        padding:0;
        margin: 0;
        margin-bottom:20px;
        text-align: center;
        font-weight: 400;
    }

    

    &__btn{
    background-color: #007E33;
    color: white;
    margin: 10px auto 80px;
    display: block;
    font-size: 14px;
    border-radius: 7px;
    padding: 10px 30px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover{
      background-color: #006428;
      transition: background-color .5s;
    }
  }
}
@media(max-width: 1420px){
    .newest{
        width: 1050px;
    }
}

@media(max-width: 1080px){
    .newest{
        width: 700px;
    }
}

@media(max-width: 730px){
    .newest{
        width: 350px;
    }
}

</style>
