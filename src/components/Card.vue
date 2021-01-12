<template>
    <div class="card__frame">
        <div @click="pushToAuction()" v-bind:id="auctionId" class="card__photo"></div>
        <p @click="pushToAuction()" class="card__title">{{title}} </p>
        <p class="card__category">{{category}}</p>
        <p class="card__location">{{location}} ({{province}})</p>

        <div style="display: flex; justify-content: space-between; align-items: center">
            <div v-if="auctionState==1">
                <p class="card__startingPrice">Cena wywoławcza</p>
                <p class="card__price">{{actualPrice}} zł</p>
            </div>
            
            <div v-if="auctionState==1">
                <p class="card__instantPrice">Cena błyskawiczna</p>
                <p class="card__price">{{instantPrice}} zł</p>
            </div>

            <div v-if="auctionState==2">
                <p class="card__startingPrice">Licytuj</p>
                <p class="card__price">{{actualPrice}} zł</p>
            </div>
            
            <div v-if="auctionState==2">
                <p class="card__instantPrice">Kup Teraz</p>
                <p class="card__price">{{instantPrice}} zł</p>
            </div>

            <div v-if="auctionState==3">
                <p class="card__instantPrice">Cena końcowa</p>
                <p class="card__price">{{actualPrice}} zł</p>
            </div>
            <div style="text-align:right;" v-if="auctionState==3 && own=='false'">
                <p class="card__instantPrice">Sprzedający</p>
                <p class="card__price">{{firstname}}</p>
            </div>

            <i v-if="!fav && auctionState==2" @click="addToFavorites" class="far fa-heart fa-lg"></i>
            <i v-if="fav && auctionState==2" class="fas fa-heart fa-lg"></i>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px">
            <div v-if="auctionState==3 && own=='false'">
                <p class="card__startingPrice">Telefon</p>
                <p class="card__price">{{phone}}</p>
            </div>
            
            <div style="text-align:right;" v-if="auctionState==3 && own=='false'">
                <p class="card__instantPrice">E-mail</p>
                <p class="card__price">{{email}}</p>
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'Card',
    data(){
        return{
            fav: false,
        }
    },
    props:{
        actualPrice: Number,
        auctionId: Number,
        category: String,
        i: Number,
        firstname: String,
        instantPrice: Number,
        location: String,
        province: String,
        title: String,
        url: String,
        favorite: Boolean,
        auctionState: Number,
        phone: String,
        email: String,
        own: String
    },
    methods:{
        addToFavorites(){
            if(this.$store.state.logged){
                let obj = {
                    userId: this.$store.state.userId,
                    auctionId: this.auctionId,
                }

                console.log('Przesłany obiekt', obj);

                let url = 'http://localhost:8080/api/auctions/' + this.$store.state.userId + '/favorite';

                //request
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(obj),
                })
                .then(response => {
                    if(!response.ok) {
                        throw new Error(response.status);
                    }
                    else 
                        return response.json();
                })
                .then(response => {
                    this.fav = true;
                    console.log('Sukces. Odebrane dane ', response);
                    // alert('Dodano aukcję do ulubionych!');
                })
                .catch((error) => {
                    console.log('Błąd', error);
                    alert("Coś poszło nie tak!");
                })
            }
            else{
                alert("Aby dodać aukcję do ulubionych musisz być zalogowany!");
            }

        },
        pushToAuction(){
            //   console.log("push to auction id: "+this.auctionId);
            this.$router.push(`/oferta/${this.auctionId}`);
        }
    },
    mounted(){
        //   console.log(this.url);
        this.fav = this.favorite;
        let element = document.getElementById(this.auctionId);
        element.style.backgroundImage = `url(${this.url}`;
    }
}
</script>

<style scoped lang="scss">
.card{
    &__frame{
        width: 322px;
        // height: 365px;
        margin-bottom:30px;
        padding: 14px;
        box-shadow: 0 2px 9px 0 rgba(0,0,0,0.25);
        transition: all .3s;
        &:hover{
            transform:scale(1.02, 1.02);
        }

        i{
            cursor: pointer;
        }
    }

    &__photo{
        width: 100%;
        height: 180px;
        background-repeat: no-repeat;
        background-position:50% 50%;
        background-size:cover;
        margin-bottom: 25px;
        cursor: pointer;

    }

    &__title, &__location, &__startingPrice, &__instantPrice, &__price, &__category{
        margin: 0;
        padding: 0;
    }

    &__category{
        font-size: 13px;
        font-weight: 400;
        margin-top: 5px;
    }

    &__title{
        font-weight: 500;
        height: 36px;
        overflow: hidden;
        cursor: pointer;
    }

    &__location{
        margin: 10px 0 10px;
        color: rgb(105, 105, 105); 
        font-size: 12px;
        font-weight: 400;
    }

    &__startingPrice, &__instantPrice{
        color: rgb(56, 56, 56);
    }

    &__price{
        font-weight: 700;
        font-size: 16px;
        margin-top: 4px;
    }
}

@media(max-width: 1420px){
    .card{
&__frame{
            width: 322px;
        }
    }
}

@media(max-width: 1080px){
    .card{
        &__frame{
            width: 322px;
        }
    }
}

@media(max-width: 730px){
    .card{
        &__frame{
            width: 322px;
        }
    }
}
</style>
