<template>
    <div class="login">
        <h1>Zaloguj się</h1>
        <form v-on:submit.prevent class="login__email">
            <label :class="{'wrong-email': !isCorrectEmail}" class="login__email__label" for="email">Adres e-mail<span style="color: red;">*</span></label>
            <input @keyup.enter="logIn" @change="validateEmail"  v-model="email" class="login__email__input" name="email" id="email" type="text" placeholder="Adres e-mail">
        </form>

        <form v-on:submit.prevent class="login__password">
            <label :class="{'wrong-password': !isCorrectPassword}" class="login__password__label" for="password">Hasło<span style="color: red;">*</span></label>
            <input @keyup.enter="logIn" @change="validatePassword" v-model="password" class="login__password__input" name="password" id="password" type="password" placeholder="Hasło" autocomplete="on">
        </form>


        <button @click="logIn" class="login__btn">
            <i v-if="loading" class="fas fa-spinner fa-spin fa-lg"></i>
            <span v-if="!loading">Zaloguj się</span>
        </button>

        <p class="login__register">Nie masz konta na wdmj.pl?
            <router-link to="/rejestracja">
                <span style="font-weight:600">Zarejestruj się</span>
            </router-link>
        </p>
    </div>
</template>

<script>
import { createStore } from 'vuex'

export default {
  name: 'Login',
  data(){
      return{
          email: '',
          password: '',
          isCorrectEmail: true,
          isCorrectPassword: true,
          didInputChanged: false,
          loading: false,
      }
  },
  store: createStore,
  methods:{
    logIn(){
        if(this.isCorrectEmail && this.isCorrectPassword && this.didInputChanged){
            this.loading = true;
            let obj = {
                email: this.email,
                password: this.password
            }

            let url = 'http://localhost:8080/api/auth/signin';
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
                this.loading = false;
                //wyswietl zwrocone dane
                console.log('Sukces. Odebrane dane ', response);

                this.$store.commit('logged', true);
                this.$store.commit('userId', response.userId);
                this.$store.commit('userEmail', response.email);
                this.$store.commit('role', response.roles[0]);
                this.$store.commit('token', response.accessToken);

                localStorage.setItem('logged', true);
                localStorage.setItem('userId', response.userId);
                localStorage.setItem('userEmail', response.email);
                localStorage.setItem('role', response.roles[0]);
                localStorage.setItem('token', response.accessToken);

                if(response.roles[0] === "ROLE_USER"){
                    alert("Udało się zalogować!");

                }
                else if(response.roles[0] === "ROLE_ADMIN"){
                    alert("Udało się zalogować jako admin!");
                    // this.$router.push("/admin");
                }
                this.$router.push("/");


            })
            .catch((error) => {
                this.loading = false;
                console.log('Błąd', error);
                alert("Nie udało się zalogować!");
            })
        }

        else{
            alert("Dane nie przeszły walidacji!");
        }


    },

    getLogged(){
      return this.$store.state.logged;
    },

    //walidacja email
    validateEmail: function() {
        this.didInputChanged = true;
        //eslint-disable-next-line
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.isCorrectEmail = re.test(this.email);
    },

    //walidacja password
    validatePassword: function () {
        this.didInputChanged = true;
        let re = /^.{6,}$/;
        this.isCorrectPassword = re.test(this.password);
    },

  }
}
</script>

<style scoped lang="scss">

//komunikat bledny email
.wrong-email::before {
  content: 'Podano błędny adres e-mail';
  position: absolute;
  top: 72px;
  font-size: 12px;
  font-weight: 400;
  color: #df0000;
}

//komunikat bledne password
.wrong-password::before {
  content: 'Hasło musi mieć minimum 6 znaków';
  position: absolute;
  top: 72px;
  font-size: 12px;
  font-weight: 400;
  color: #df0000;
}

.login{
    // box-shadow: 0px 2px 9px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 9px -5px rgba(0,0,0,0.75);
    width: 400px;
    // height: 500px;
    padding: 70px 40px 40px;
    margin: 100px auto;

    h1{
        padding: 0;
        margin: 0 0 40px 0;
        text-align: left;
        font-weight: 400;
    }

    &__email, &__password{
        label{
            position: relative;
            display: block;
            font-weight: 500;
            font-size: 16px;
            margin-top: 30px;
            margin-bottom:8px;
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

    &__btn{
        width:100%;
        background-color: #007E33;
        color: white;
        font-size: 14px;
        border-radius: 7px;
        padding: 10px 30px;
        margin-top: 50px;
        outline: none;
        border: none;
        cursor: pointer;

        &:hover{
        background-color: #006428;
        transition: background-color .5s;
        }
    }

    &__register{
        font-size: 12px;
        font-weight: 500;
        text-align: center;
        margin-top: 30px;
    }
}

@media(max-width: 410px){
    .login{
        box-shadow: none;
        width: 100%;
    }
}

@media(max-width: 360px){
    .login{
        padding: 70px 20px 40px;
    }
}
</style>
