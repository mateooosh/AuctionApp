<template>
    <div class="card">
        <div class="card__photo"></div>
        <div class="card__details">
            <p class="card__title">Fiat Multipla Rodzinna Ropucha silnik nie stuka, nic nie puka </p>
            <p class="card__location">Kielce (świętokrzyskie)</p>
        </div>

        <div class="card__prices">
            <div>
                <p class="card__startingPrice">Cena aktualna</p>
                <p class="card__price">9999 zł</p>
            </div>
            
            <div>
                <p class="card__instantPrice">Cena błyskawiczna</p>
                <p class="card__price">19999 zł</p>
            </div>

            <i @click="addToFavorites" class="far fa-heart fa-lg"></i>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Card',
  props:{
      auctionId: Number,
      title: String,
      location: String,
      province: String,
      startingPrice: Number,
      instantPrice: Number,
      url: String,
  },
  methods:{
      addToFavorites(){
          alert("dodaj do ulubionych");
      },
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
        transform:scale(1.02, 1.02);
    }

    i{
        cursor: pointer;
    }

    &__photo{
        width: 260px;
        min-width: 200px;
        height: 160px;
        background-image: url("../assets/multipla.jpg");
        background-repeat: no-repeat;
        background-position:50% 50%;
        background-size: 100%;
        margin-bottom: 25px;
        margin-right: 20px;
        cursor: pointer;

    }

    &__details{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
