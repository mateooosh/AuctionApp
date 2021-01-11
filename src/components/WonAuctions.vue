<template>
    <div class="won">
        <h1>Twoje wygrane aukcje</h1>
        <p class="won__p" v-if="auctions.length == 0">Brak wygranych aukcji</p>
        <!-- loading animation -->
        <div v-if="!gotData" class="lds-dual-ring"></div>

        <div v-if="gotData" class="won__list" >
            
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
                :firstname="auction.firstname"
                :phone="auction.phoneNumber"
                :email="auction.email"
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
            gotData: false,
        }
    },

    mounted(){
        //request
        let url = `http://localhost:8080/api/auctions/${this.$store.state.userId}/win`;
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
            this.auctions = response;
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
.won{
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
    .won{
        width: 1050px;
    }
}

@media(max-width: 1080px){
    .won{
        width: 700px;
    }
}

@media(max-width: 730px){
    .won{
        width: 350px;
        &__p{
            width: 100%;
        }
    }
}

@media(max-width: 355px){
    .won{
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
