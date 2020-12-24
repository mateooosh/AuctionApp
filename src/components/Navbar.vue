<template>
  <nav class="nav">
      <router-link to="/">
        <div class="nav__title">
          <!-- <img src="../assets/icons/store.svg" alt="store" width="40"> -->
          <img src="../assets/hammers.png" height="50" alt="">
          <div>WDMJ.PL</div>
        </div>
      </router-link>
      
      <div class="nav__header">

        <div v-if="!this.$store.state.logged" class="nav__account ml-70">
          <div @click="toggleMyAccountIsVisible" style="display: flex; align-items: center;">
            <!-- <img src="../assets/icons/person.svg" alt="person" width="30"> -->
            <i class="fas fa-user fa-lg"></i>
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
            <!-- <img src="../assets/icons/person.svg" alt="person" width="30"> -->
            <i class="fas fa-user fa-lg"></i>
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

            <router-link to="/ulubione">
              <div class="nav__account__menu__item">
                <i class="fas fa-heart"></i> Ulubione
              </div>
            </router-link>

            <router-link to="/ustawienia">
              <div class="nav__account__menu__item">
                <i class="fas fa-cog"></i> Ustawienia
              </div>
            </router-link>

            <div @click="logOut" class="nav__account__menu__item">
              <i class="fas fa-sign-out-alt"></i> Wyloguj
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
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 70px;
  background-color:  #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0px 1px 7px -2px rgba(0,0,0,0.75);


  &__title{
    font-weight: 500;
    font-size: 22px;
    div{
      margin-left:10px;
    }
  }

  &__header{
    // min-width: 540px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    
    i{
      margin-right: 6px;
    }
  }

  &__account, &__title{
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
      box-shadow: 0px 0px 9px -2px rgba(0,0,0,0.75);
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

@media(max-width: 620px){
  .nav{
    padding: 0 10px;
    position: static;
    &__title{
      div{
        display: none;
      }
    }

    &__btn{
      padding: 10px 10px;
    }
  }

  .ml-70{
    margin-left: 20px !important;
  }
}

.ml-70{
  margin-left: 70px;
}
</style>
