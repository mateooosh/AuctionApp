<template>
    <div class="card">
        <div @click="pushToAuction()" class="card__photo"></div>
        <div class="card__details">
            <p @click="pushToAuction()" class="card__title">{{title}}</p>
            <div>
                <p class="card__category">{{category}}</p>
                <p class="card__location">{{location}} ({{province}})</p>
            </div>
        </div>

        <div class="card__prices">
            <div>
                <p class="card__startingPrice">Cena aktualna</p>
                <p class="card__price">{{actualPrice}} zł</p>
            </div>
            
            <div>
                <p class="card__instantPrice">Cena błyskawiczna</p>
                <p class="card__price">{{instantPrice}} zł</p>
            </div>

            <i @click="addToFavorites" class="far fa-heart fa-lg"></i>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Card',
  props:{
        actualPrice: Number,
        auctionId: Number,
        category: String,
        i: Number,
        instantPrice: Number,
        location: String,
        province: String,
        title: String,
        url: String,
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
        let element = document.getElementsByClassName("card__photo")[this.i];
        element.style.backgroundImage = `url(${this.url}`;
  }
}
</script>

<style scoped lang="scss">
.card{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 190px;
    margin-bottom:20px;
    padding: 14px;
    box-shadow: 0 2px 9px 0 rgba(0,0,0,0.25);
    transition: all .3s;
    &:hover{
        transform:scale(1.01, 1.01);
    }

    i{
        cursor: pointer;
    }

    &__photo{
        width: 260px;
        min-width: 200px;
        height: 162px;
        background-repeat: no-repeat;
        background-position:50% 50%;
        background-size: cover;
        // margin-bottom: 25px;
        // margin-right: 20px;
        cursor: pointer;

    }

    &__details{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 450px;
    }

    &__title, &__location, &__startingPrice, &__instantPrice, &__price{
        margin: 0;
        padding: 0;
    }

    &__title{
        font-weight: 400;
        font-size: 18px;
        // height: 40px;
        overflow: hidden;
        cursor: pointer;
    }

    &__category{
        margin-bottom: 8px;
    }

    &__location{
        margin: 5px 0 0;
        color: rgb(105, 105, 105); 
        font-size: 12px;
        font-weight: 400;
    }

    &__prices{
        display: flex; 
        justify-content: space-between; 
        align-items: flex-end; 
        flex-direction: column; 
        width:140px
    }

    &__startingPrice, &__instantPrice{
        color: rgb(56, 56, 56);
        text-align: right;
    }

    &__price{
        font-weight: 700;
        font-size: 16px;
        margin-top: 4px;
        text-align: right;
        min-width: 130px;
    }

    &__title{
        font-weight: 500;
        height: 36px;
        overflow: hidden;
        font-size: 15px;
    }

    
}

@media(max-width: 700px){
    .card{
        height: 150px;

        &__photo{
            height: 120px; 
        }
    }
}

@media(max-width: 620px){
    .card{
        flex-direction: column;
        height: 350px;
        width: 322px;
        margin: 0 auto 30px;

        &__details{
            width: 100%;
        }

        &__category{
            display: none;
        }

        &__photo{
            height:  180px;
            width: 100%;
            margin: 0 0 25px;
        }
            

        &__prices{
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        &__price{
            font-weight: 700;
            font-size: 16px;
            margin-top: 4px;
            text-align: left;
            min-width: 0;
        }

        &__location{
            margin: 5px 0 20px;
        }
    }
}
</style>
