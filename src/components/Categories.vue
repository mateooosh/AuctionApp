<template>
    <div class="categories">
        <h1>Kategorie</h1>
        <div class="categories__list">
            <div>
                <img src="../assets/icons/nieruchomosci.svg" alt="Nieruchomosci" height="45">
                <div>Nieruchomości</div>
            </div>
            <div>
                <img src="../assets/icons/motoryzacja.svg" alt="Motoryzacja" height="45">
                <div>Motoryzacja</div>
            </div>
            <div>
                <img src="../assets/icons/rolnictwo.svg" alt="Rolnictwo" height="45">
                <div>Rolnictwo</div>
            </div>
            <div>
                <img src="../assets/icons/elektronika.svg" alt="Elektronika" height="45">
                <div>Elektronika</div>
            </div>
            <div>
                <img src="../assets/icons/sport.svg" alt="Sport" height="45">
                <div>Sport</div>
            </div>
            <div>
                <img src="../assets/icons/zwierzeta.svg" alt="Zwierzęta" height="45">
                <div>Zwierzęta</div>
            </div>
            <div>
                <img src="../assets/icons/praca.svg" alt="Praca" height="45">
                <div>Praca</div>
            </div>
            <div>
                <img src="../assets/icons/dla_dzieci.svg" alt="Dla_dzieci" height="45">
                <div>Dla dzieci</div>
            </div>
            <div>
                <img src="../assets/icons/moda.svg" alt="Moda" height="45">
                <div>Moda</div>
            </div>
            <div>
                <img src="../assets/icons/inne.svg" alt="Pozostałe" height="45">
                <div>Pozostałe</div>
            </div>
        </div>
    </div>
</template>

<script>
import { createStore } from 'vuex'

export default {
  name: 'Categories',
  store: createStore,
  methods:{
    getLogged(){
      return this.$store.state.logged;
    }
  }
}
</script>

<style scoped lang="scss">
.categories{
    width: 800px;
    padding: 20px 0;
    margin: 120px auto;
    // background-color: red;

    h1{
        padding:0;
        margin: 0;
        margin-bottom:20px;
        text-align: center;
        font-weight: 400;
    }

    &__list{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        >div{
            border-radius: 6px;
            width: 160px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 90px;
            margin-top: 5px;
            margin-bottom: 5px;
            background-color: rgb(255, 255, 255);
            transition:all .5s;
            &:hover{ 
                background-color: rgb(241, 241, 241);
                cursor: pointer;
            }
        }
    }
}

@media(max-width: 820px){
    .categories{
        width: 100%;
        &__list{
            // flex-direction: column;
            flex-wrap: wrap;
        }
    }
}

// //zmienic!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// .categories__list > div{
//     height: 90px;
//     margin-top: 5px;
//     margin-bottom: 5px;
//     background-color: rgb(255, 255, 255);
//     &:hover{
//         background-color: rgb(241, 241, 241);
//         cursor: pointer;
//         transition: background-color .5s;
//     }
// }
</style>
