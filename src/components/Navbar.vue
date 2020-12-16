<template>
  <nav class="nav">
      <router-link to="/">
        <div class="nav__title">
          <img src="../assets/icons/store.svg" alt="store" width="40">
          <div>wdmj.pl</div>
        </div>
      </router-link>
      
      <div class="nav__header">
        <router-link to="/ulubione">
          <div class="nav__favorite">
            <img src="../assets/icons/star.svg" alt="star" width="30">
            <div>Ulubione</div>
          </div>
        </router-link>

        <div v-if="!this.$store.state.logged" class="nav__account ml-70">
          <div @click="toggleMyAccountIsVisible" style="display: flex; align-items: center;">
            <img src="../assets/icons/person.svg" alt="person" width="30">
            <div>Moje konto</div>
          </div>

          <div class="nav__account__menu" v-if="myAccountIsVisible" >
            <router-link to="/logowanie">
              <div class="nav__account__menu__item">
                Logowanie
              </div>
            </router-link>

            <router-link to="/rejestracja">
              <div class="nav__account__menu__item">
                Rejestracja
              </div>
            </router-link>
          </div>
          
        </div>
      
        <div v-if="this.$store.state.logged" class="nav__account ml-70" >
          <div @click="toggleMyAccountIsVisible" style="display: flex; align-items: center;">
            <img src="../assets/icons/person.svg" alt="person" width="30">
            <div>Moje konto</div>
          </div>
          
          <div class="nav__account__menu" v-if="myAccountIsVisible" >
            <router-link to="/moje-przedmioty">
              <div class="nav__account__menu__item">
                Moje przedmioty
              </div>
            </router-link>

            <router-link to="/moje-licytacje">
              <div class="nav__account__menu__item">
                Moje licytacje
              </div>
            </router-link>

            <router-link to="/wygrane-licytacje">
              <div class="nav__account__menu__item">
                Wygrane licytacje
              </div>
            </router-link>

            <router-link to="/ustawienia">
              <div class="nav__account__menu__item">
                Ustawienia
              </div>
            </router-link>

            <div @click="logOut" class="nav__account__menu__item">
              Wyloguj
            </div>
          </div>
        </div>

        <router-link to="/dodaj-ogloszenie" class="ml-70">
          <button class="nav__btn">
            Dodaj ogłoszenie
          </button>
        </router-link>
      </div>
  </nav>
</template>

<script>
import { createStore } from 'vuex'
export default {
  name: 'Navbar',
  store: createStore,
  data(){
    return{
      myAccountIsVisible: false,
    }
  },
  methods:{
    // return statement
    getLogged(){
      return this.$store.state.logged;
    },
    
    //toggle account menu
    toggleMyAccountIsVisible(){
      this.myAccountIsVisible = !this.myAccountIsVisible;
    },

    logOut(){
      this.myAccountIsVisible = false;
      this.$store.commit('logged', false);
      alert("Wylogowano!")
      this.$router.push("/");
    }
  },
}
</script>

<style scoped lang="scss">
.nav{
  width: 100%;
  height: 70px;
  background-color:  #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &__title{
    font-weight: 500;
    font-size: 24px;
  }

  &__header{
    // min-width: 540px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
  }

  &__favorite, &__account, &__title{
    display: flex;
    align-items: center;

    img{
      margin-right: 7px;
    }
  }

  &__account{
    position: relative;
    cursor: pointer;

    &__menu{
      box-shadow: 0px 2px 9px 1px rgba(0,0,0,0.75);
      // padding: 20px 40px;
      // background-color: red;
      background-color: white;
      position: absolute;
      top: 40px;
      left: -30px;
      font-size: 14px;
      border-radius: 3px;

      &__item{
        padding: 12px 20px;
        width: 200px;
        &:hover{
          background-color: #007E33;
          color: white;
        }

        &:nth-child(1):hover{
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
        }

        &:nth-child(4):hover{
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
        }
      }
    }
  }

 


  &__btn{
    background-color: #007E33;
    color: white;
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

.ml-70{
  margin-left: 70px;
}
</style>
