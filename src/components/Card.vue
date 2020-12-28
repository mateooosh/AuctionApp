<template>
    <div class="card__frame">
        <div class="card__photo"></div>
        <!-- <p class="card__title">Fiat Multipla Rodzinna Ropucha silnik nie stuka, nic nie puka </p> -->
        <p class="card__title">{{title}} </p>
        <p class="card__location">{{location}} ({{province}})</p>

        <div style="display: flex; justify-content: space-between; align-items: center">
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
      auctionId: Number,
      title: String,
      location: String,
      province: String,
      actualPrice: Number,
      instantPrice: Number,
      url: String,
      i: Number
  },
  methods:{
      addToFavorites(){
          alert("dodaj do ulubionych");
      },
  },
  mounted(){
    //   console.log(this.url);
      let element = document.getElementsByClassName("card__photo")[this.i];
      element.style.backgroundImage = `url(${this.url}`;
  }
}
</script>

<style scoped lang="scss">
.card{
    &__frame{
        width: 322px;
        height: 350px;
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
        background-image: url("../assets/multipla.jpg");
        background-repeat: no-repeat;
        background-position:50% 50%;
        background-size: 100%;
        margin-bottom: 25px;
        cursor: pointer;

    }

    &__title, &__location, &__startingPrice, &__instantPrice, &__price{
        margin: 0;
        padding: 0;
    }

    &__title{
        font-weight: 500;
        height: 36px;
        overflow: hidden;
        cursor: pointer;
    }

    &__location{
        margin: 5px 0 20px;
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
