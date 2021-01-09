<template>
    <div class="my">
        <h1>Twoje aktywne aukcje</h1>
        <p class="my__p" v-if="auctions.length == 0 && gotData">Brak aukcji</p>
        <router-link v-if="auctions.length == 0 && gotData" to="/dodaj-ogloszenie">
          <button class="my__btn">
            Dodaj ogłoszenie 
          </button>
        </router-link>
        <!-- loading animation -->
        <div v-if="!gotData" class="lds-dual-ring"></div>

        <div v-if="gotData" class="my__list" >
            <Card v-for="(auction, i) in active" :key="i"
            :auctionId="auction.auctionId"
            :title="auction.auctiontitle" 
            :location="auction.location"
            :category="auction.category" 
            :province="auction.province" 
            :actualPrice="auction.maxBidPrice"
            :instantPrice="auction.buyNowPrice"
            :url="auction.photo"
            :i="i"
            :favorite=false
            :auctionState="auction.auctionState"
            />  
        </div>

        <h1 style="margin-top:100px">Twoje sprzedane aukcje</h1>
        <!-- loading animation -->
        <div v-if="!gotData" class="lds-dual-ring"></div>
        <div v-if="gotData" class="my__list" >
            <Card v-for="(auction, i) in sold" :key="i"
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
            />  
        </div>

        <h1 style="margin-top:100px">Twoje zakończone aukcje</h1>
        <!-- loading animation -->
        <div v-if="!gotData" class="lds-dual-ring"></div>
        <div v-if="gotData" class="my__list" >
            <Card v-for="(auction, i) in old" :key="i"
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
            />  
        </div>
    </div>
</template>

<script>
import { createStore } from 'vuex';
import Card from './Card.vue';

export default {
    name: 'MyAuctions',
    store: createStore,
    components:{
        Card
    },
    data(){
        return{
            auctions: [],
            active: [],
            old: [],
            sold: [],
            gotData: false,
        }
    },

    mounted(){
        //request
        let url = `http://localhost:8080/api/auctions/${this.$store.state.userId}/own`;
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
            console.log('Sukces. Moje aukcje ', response);
            this.auctions = response;
            for(let i=0; i<response.length; i++){
                if(response[i].auctionState == 1){
                    this.old = this.old.concat(response[i]);
                }
                else if(response[i].auctionState == 2){
                    this.active = this.active.concat(response[i]);
                }
                else if(response[i].auctionState == 3){
                    this.sold = this.sold.concat(response[i]);
                }
                
            }
            console.log(this.sold);
            this.gotData = true;
        })
        .catch(() => {
            console.log('Coś poszło nie tak z requestem:', url);


            alert("Nie udało się pobrać Twoich aukcji!");
        })
        
    },
        
}
</script>

<style scoped lang="scss">
.my{
    width: 1400px;
    margin: 100px auto;

    &__list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    h1{
        padding:0;
        margin: 0;
        margin-bottom:50px;
        text-align: center;
        font-weight: 400;
    }

    &__p{
        padding: 0;
        width: 500px;
        margin: 230px auto 40px;
        text-align: center;
        font-size: 17px;
        line-height: 1.5;
        letter-spacing: 1px;
    }

    &__btn{
        background-color: #007E33;
        color: white;
        font-size: 14px;
        border-radius: 7px;
        padding: 10px 30px;
        margin: auto;
        display: block;
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
    .my{
        width: 1050px;
    }
}

@media(max-width: 1080px){
    .my{
        width: 700px;
    }
}

@media(max-width: 730px){
    .my{
        width: 350px;
    }
}

@media(max-width: 355px){
    .my{
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
