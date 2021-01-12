<template>
    <div class="newest">
        <h1>Najnowsze ogłoszenia</h1>

        <!-- loading animation -->
        <div v-if="!gotData" class="lds-dual-ring"></div>
        

        <div v-if="gotData" class="newest__list" >
            
            <Card v-for="(auction, i) in auctions" :key="i" 
                :auctionId="auction.auctionId"
                :title="auction.auctiontitle" 
                :location="auction.location"
                :category="auction.category" 
                :province="auction.province" 
                :actualPrice="auction.maxBidPrice"
                :instantPrice="auction.buyNowPrice"
                :url="auction.photo"
                :favorite=false
                :auctionState="auction.auctionState"
                own="false"
            />
        </div>

        <button v-if="gotData && auctions.length%12==0" @click="getLatest()" class="newest__btn">Zobacz więcej</button>
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
            this.auctions = this.auctions.concat(response);

            this.gotData = true;
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

@media(max-width: 355px){
    .newest{
        width: 100%;
    }
}


//loading animation
.lds-dual-ring {
    display: block;
    width: 160px;
    height: 160px;
    margin: 60px auto;
}
.lds-dual-ring:after {
    content: " ";
    display: block;
    width: 128px;
    height: 128px;
    //   margin: 16px;
    
    border-radius: 50%;
    border: 12px solid rgb(0, 0, 0);
    border-color: rgb(0, 0, 0) transparent rgb(0, 0, 0) transparent;
    animation: lds-dual-ring 1.6s linear infinite;
}
@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}


</style>
