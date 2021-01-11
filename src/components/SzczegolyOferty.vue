<template>
    <div class="details">
        <div class="details__carousel">
            <flickity class="flickity" ref="flickity" :options="flickityOptions">
                <div class="carousel-cell"></div>
                <div class="carousel-cell"></div>
                <div class="carousel-cell"></div>
                <div class="carousel-cell"></div>
                <div class="carousel-cell"></div>
            </flickity>
        </div>

        <div class="details__container">
            <div class="details__content">
                <div class="details__header">
                    <div>{{details.auctiontitle}}</div>
                    <i @click="addToFavorites" class="far fa-heart fa-lg"></i>
                </div>
                
                <h2>Opis</h2>
                <p style="line-height: 1.5">{{details.description}}</p>
                <h2>Szczegóły</h2>
                <div class="details__param">
                    <div class="details__item">
                        <div>Kategoria</div>
                        <div>{{details.category}}</div>
                    </div>
                    <div class="details__item">
                        <div>Stan</div>
                        <div>{{details.condition}}</div>
                    </div>
                    <div class="details__item">
                        <div>Początek aukcji</div>
                        <div>{{details.startDate}}</div>
                    </div>
                    <div class="details__item">
                        <div>Koniec aukcji</div>
                        <div>{{details.endDate}}</div>
                    </div>
                    <div class="details__item">
                        <div>ID Aukcji</div>
                        <div>{{details.auctionId}}</div>
                    </div>
                </div>
            </div>

            <div class="details__auction">
                <div class="details__bid">
                    <h2>Licytacja</h2>
                    <div>Cena Aktualna</div>
                    <div class="details__price" :class="{'animation':animate}">{{details.maxBidPrice}} zł</div>
                    <div v-if="details.auctionState===2" class="details__left">{{left}}</div>
                    <div v-if="details.auctionState===1 || details.auctionState===3" class="details__left">Aukcja została zakończona</div>
                    <form class="details__form__actualPrice">
                        <label class="details__form__actualPrice__label" for="actualPrice"></label>
                        <input v-model="offer" class="details__form__actualPrice__input" :min="details.maxBidPrice+1" 
                        :max="details.buyNowPrice-1" name="actualPrice" type="number" placeholder="Twoja oferta">
                    </form>
                    <button @click="bid" class="details__btn" :class="{'outdated': details.auctionState == 1 || details.auctionState == 3}">
                        <i v-if="bidLoading" class="fas fa-spinner fa-spin fa-lg"></i>
                        <span v-if="!bidLoading">Licytuj</span>
                    </button>

                </div>

                <div class="details__buyNow">
                    <h2>Kup Teraz</h2>
                    <div>Cena Kup Teraz</div>
                    <div class="details__price">{{details.buyNowPrice}} zł</div>
                    <button @click="buyNow" class="details__btn" :class="{'outdated': details.auctionState == 1 || details.auctionState == 3}">
                        <i v-if="buyNowLoading" class="fas fa-spinner fa-spin fa-lg"></i>
                        <span v-if="!buyNowLoading">Kup Teraz</span>
                    </button>
                </div>
            </div>

        </div>

        <div class="details__map" v-if="mapIsVisible">
            <div class="details__title">Lokalizacja</div>
            <div class="details__location"><i class="fas fa-map-marker-alt"></i> {{details.location}} ({{details.province}})</div>
            <iframe
                id="map"
                height="280" frameborder="0" 
                scrolling="no"
                src=""
                >
            </iframe>
        </div>

        <!-- <div class="details__user" v-if="mapIsVisible">
            <div class="details__title">Sprzedający</div>
            <div class="details__author">{{details.authorName}}</div>
            <div class="details__phone">{{details.authorTel}}</div>
            <a href="tel:123-456-7890">123-456-7890</a>
        </div> -->
    </div>
</template>

<script>
import { createStore } from 'vuex';
//import carousel component
import Flickity from 'vue-flickity';

export default {
  name: 'SzczegolyOferty',
  store: createStore,
  components: {
    Flickity
  },
  data(){
    return{
      offer: 0,
      details: {},
      coordinates:{},
      mapUrl: '',
      mapIsVisible: false,
      auctionId: '',
      photosLength: 0,
      animate: false,
      bidLoading: false,
      buyNowLoading: false,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: '',
      getPriceInterval: '',
      left: 'Do końca zostało',
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: false,
        freeScroll: true
        // any options from Flickity can be used
      }
    }
  },
  props:{

  },

  unmounted(){
      clearInterval(this.interval);
      clearInterval(this.getPriceInterval);
  },

  mounted(){
        // window.scrollTo(0,0);
        
        this.auctionId = this.$route.params.auctionId;

        const url = `http://localhost:8080/api/auction/${this.auctionId}`;

        fetch(url)
        .then( response => response.json())
        .then( response =>{
            document.title = response.auctiontitle + " - wdmj.pl";

            console.log(response);

            response.startDate = response.startDate.slice(0, 10);
            response.endDate = response.endDate.slice(0, 10);

            let end = new Date(response.endDate);
            end = end.getTime() - new Date().getTime(); 

            this.days = Math.floor(end/60/60/24/1000);
            end -= this.days*60*60*24*1000;
            this.hours = Math.floor(end/60/60/1000);
            end -= this.hours*60*60*1000;
            this.minutes = Math.floor(end/60/1000);
            end -= this.minutes*60*1000;
            this.seconds = Math.floor(end/1000);

            
            //days
            // console.log(end/60/60/24/1000);
            
            this.interval = setInterval(() => {
                let end = new Date(response.endDate);
                end = end.getTime() - new Date().getTime(); 

                this.days = Math.floor(end/60/60/24/1000);
                end -= this.days*60*60*24*1000;
                this.hours = Math.floor(end/60/60/1000);
                end -= this.hours*60*60*1000;
                this.minutes = Math.floor(end/60/1000);
                end -= this.minutes*60*1000;
                this.seconds = Math.floor(end/1000);
                
                // console.log(this.days, this.hours, this.minutes, this.seconds);
                if(this.days>0){
                    this.left = `Do końca zostało ${this.days} dni`;
                }
                else{
                    this.left = `Do końca zostało: ${this.hours}:${this.minutes}:${this.seconds}`;
                }
                
                // console.log(this.left);

            }, 1000);

            

            
            
            this.offer = response.maxBidPrice+1;
            this.details = response;
            this.photosLength = response.photos.length;

            for(let i=0; i<this.photosLength; i++){
                document.getElementsByClassName("carousel-cell")[i].style.backgroundImage = `url(${response.photos[i]})`;
            }

            for(let i=4; i>=this.photosLength; i--){
                this.removeCell(document.getElementsByClassName("carousel-cell")[i]);
            }
 
            

            //get coordinates by location
            let location = response.location;
            this.mapIsVisible = true;

            this.getPriceInterval = setInterval(() => {
                fetch(`http://localhost:8080/api/auction/current/price/${this.auctionId}`)
                    .then((response) => response.json())
                    .then((response) => {
                        
                        console.log(response);
                        
                        if(response.price != this.details.maxBidPrice){
                            
                            this.details.maxBidPrice = response.price;
                            // animate price
                            this.animate = true;
                            setTimeout(() => {
                                this.animate = false;
                            }, 1000);
                        }
                    })
            }, 2000);

            return fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json`);
        })
        .then( response => response.json())
        .then( response => {
            // console.log(response);
            this.coordinates ={
                lat: response[0].lat,
                lon: response[0].lon
            };
            let width = document.getElementsByClassName("details__map")[0].getBoundingClientRect().width-40;

            this.mapUrl = `https://www.bing.com/maps/embed?h=280&w=${width}&cp=${this.coordinates.lat}~${this.coordinates.lon}&lvl=10&typ=s&sty=r&src=SHELL&FORM=MBEDV8`;

            document.getElementById("map").setAttribute("width", width);
            document.getElementById("map").src = this.mapUrl;
        })
        .catch(error => {
            console.log(error);
        })

  },


  methods:{
    //append cell to carousel
    removeCell(element){
        this.$refs.flickity.remove(element);
    },

    addToFavorites(){
        if(this.$store.state.logged){
            let obj = {
                userId: this.$store.state.userId,
                auctionId: this.details.auctionId,
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
                console.log('Sukces. Odebrane dane ', response);
                alert('Dodano aukcję do ulubionych!');
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

    bid(){
        if(this.details.auctionState === 2){
            if(this.$store.state.logged){
                if(this.details.authorEmail === this.$store.state.userEmail){
                    alert("Nie możesz licytować własnych aukcji!");
                }
                else{
                    
                    
                    if(this.offer >= this.details.buyNowPrice || this.offer <= this.details.maxBidPrice){
                        alert("Wprowadzono błędną wartość!");
                        this.offer = this.details.maxBidPrice;
                    }

                    else{
                        this.bidLoading = true;
                        let obj = {
                            userId: this.$store.state.userId,
                            auctionId: this.details.auctionId,
                            offer: this.offer
                        }

                        console.log('Przesłany obiekt:',obj);

                        //request
                        let url = `http://localhost:8080/api/auction/${this.details.auctionId}/bid`;
                        fetch(url, {
                            method: 'POST',
                            body: JSON.stringify(obj)
                        })
                        .then(response => {
                            if(!response.ok) {
                                throw new Error(response.status);
                            }
                            else 
                                return response.json();
                        })
                        .then(response => {
                            this.bidLoading = false;
                            // display response from server
                            console.log('Sukces. Odebrane dane ', response);
                            this.details.maxBidPrice = this.offer;
                            this.offer = parseInt(this.details.maxBidPrice) + parseInt(1);

                            // alert("Złożono ofertę!");
                            // animate price
                            this.animate = true;
                            setTimeout(() => {
                                this.animate = false;
                            }, 1000);
                        })
                        .catch((error) => {
                            this.bidLoading = false;
                            console.log('Błąd', error);
                            alert("Nie udało się złożyć oferty!");
                        }) 
                    }
                }
                
            }

            else{
                alert("Musisz być zalogowany aby móc licytować przedmioty! Zaloguj się");
                this.$router.push("/logowanie");
            }
        }

        else{
            alert("Aukcja została zakończona!");
        }
        

        
    },
    buyNow(){
        if(this.details.auctionState === 2){
            if(this.$store.state.logged){
                if(this.details.authorEmail === this.$store.state.userEmail){
                    alert("Nie możesz kupować własnych przedmiotów!");
                }
                else{
                    this.buyNowLoading = true;
                    let obj = {
                        userId: this.$store.state.userId,
                        auctionId: this.details.auctionId
                    }

                    console.log('Przesłany obiekt:',obj);

                    let url = `http://localhost:8080/api/auction/${this.details.auctionId}/buy`;
                    //request
                    fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(obj)
                    })
                    .then(response => {
                        if(!response.ok) {
                            throw new Error(response.status);
                        }
                        else 
                            return response.json();
                    })
                    .then(response => {
                        this.buyNowLoading = false;
                        // display response from server
                        console.log('Sukces. Odebrane dane ', response);
                        alert("Przedmiot został kupiony!");
                        this.details.auctionState = 3;
                    })
                    .catch((error) => {
                        this.buyNowLoading = false;
                        console.log('Błąd', error);
                        alert("Nie udało się kupić przedmiotu!");
                    }) 
                }
                
            }

            else{
                alert("Musisz być zalogowany aby móc kupować przedmioty! Zaloguj się");
                this.$router.push("/logowanie");
            }
        }

        else{
            alert("Aukcja została zakończona!");
        }
    } 
  }, 
}
</script>

<style scoped lang="scss">

.outdated{
    background-color: rgb(177, 177, 177) !important;
    cursor: default !important;
}

.animation{
    animation: animation 1s;
}
    

@keyframes animation {
    0%{
        transform: scale(1);
    }

    50%{
        transform: scale(1.5);
    }
    100%{
        transform: scale(1);
    }
}

.carousel-cell {
  width: 700px;
  height: 450px;
  margin-right: 40px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-position:50% 50%;
  background-size: cover;
}

.details{
  width:1000px;
  margin: 100px auto;
    &__carousel{
        width: 100%;
        // height: 500px;
        margin-bottom: 6px;
        // box-shadow: 0 2px 9px 0 rgba(0,0,0,0.25);
        // padding: 20px 20px 40px;
        padding-bottom: 40px;
    }

    &__container{
        display: flex;
        justify-content: space-between;
    }

    &__header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        div{
            font-weight: 400;
            font-size: 30px;
            width: 90%;
            // max-height: 75px;
            overflow: hidden;
        }
    }

    &__content{
        width: 80%;
        // margin: 20px auto;
        margin-right: 6px;
        box-shadow: 0 2px 9px 0 rgba(0,0,0,0.25);
        padding: 40px;

        i{
            cursor: pointer;
            display: block;
        }

        h2{
            // font-weight: 900;
            margin: 40px 0 20px;
        }

        p{
            margin: 0;
        }
    }

    &__param{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    &__item{
        display: flex;
        width: 50%;
        div{
            flex: 1;
            margin: 5px 0;

            &:nth-child(1){
                color: #898989;
            }
            &:nth-child(2){
                font-weight: 500;
            }
        }
    }

    &__auction{
        // display: flex;
        padding: 20px;
        box-shadow: 0 2px 9px 0 rgba(0,0,0,0.25);
        width: 240px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h2{
            margin-bottom: 10px;
            
        }
    }

    &__price{
        font-weight: 600;
        font-size: 26px;
        color: #007E33;
        margin-top: 6px;
    }

    &__bid{
        h2{
            margin: 0 0 10px;
        }
    }


    &__map{
        padding: 20px;
        box-shadow: 0 2px 9px 0 rgba(0,0,0,0.25);
        width: 100%;
        margin-top: 5px;
        // height: 340px;
        // background-color: rgb(230, 230, 230);
    }

     &__form__actualPrice{
        position: relative;
        label::after{
            content: 'zł';
            position: absolute;
            opacity: 0.5;
            right: 28px;
            top: 10px;
        }
    }

    &__form__actualPrice {
        label{
            position: relative;
            display: block;
            font-weight: 500;
            font-size: 16px;
            margin-top: 10px;
            // margin-bottom:8px;
        }

        input{
            width:100%;
            outline: none;
            border: none;
            border-radius: 4px;
            padding: 10px 10px;
            font-size: 16px;
            background-color: #F3F3F3;
            
            &:focus{
                outline: 1px solid #007E33;
            }
        }
    }

    &__left{
        font-weight: 300;
        font-size: 14px;
        color: rgb(65, 65, 65);
        margin-top: 10px;
        // margin-bottom: 0;
    }

    &__title{
        font-weight: 600;
        font-size: 18px;
    }

    &__location{
        font-weight: 300;
        margin: 8px 0 20px;
    }

    &__btn{
        display: block;
        width:100%;
        background-color: #007E33;
        color: white;
        font-size: 14px;
        border-radius: 7px;
        padding: 10px 30px;
        margin: 20px auto 0;
        outline: none;
        border: none;
        cursor: pointer;

        &:hover{
            background-color: #006428;
            transition: background-color .5s;
        }
    }
}

.carousel {
  background: #EEE;
}






@media(max-width: 1020px){
    .details{
        width: 700px;

        &__item{
            width: 100%;
        }
        
    }
    

    .carousel-cell {
        width: 500px;
        height: 320px;
    }
}

@media(max-width: 720px){
    .details{
        width: 100%;

        &__carousel{
            margin-bottom: 30px;
        }

        &__container{
            flex-direction: column;
            margin-bottom: 30px;
        }

        &__content{
            margin: 0;
            padding: 20px;
            width: 100%;
        }

        &__auction{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 30px;
        }

        &__bid, &__buyNow{
            width: 40%;
        }
    }

    .carousel-cell {
        width: 450px;
        height: 290px;
        margin-right: 20px;
    }

}

@media(max-width: 520px){
    .carousel-cell {
        width: 370px;
        height: 240px;
    }
}

@media(max-width: 420px){
    .carousel-cell {
        width: 320px;
        height: 200px;
    }
}

@media(max-width: 360px){
    .carousel-cell {
        width: 260px;
        height: 170px;
    }
}

@media(max-width: 400px){
    .details{
        &__auction{
            flex-direction: column;
        }

        &__bid, &__buyNow{
            width: 100%;
        }

        &__buyNow{
            margin-top: 20px;
        }
    }
}
</style>
