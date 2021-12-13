<template>
  <div class="register">
    <h1>Zarejestruj się</h1>
    <form v-on:submit.prevent class="register__email">
      <label :class="{'wrong-email': !isCorrectEmail}" class="register__email__label" for="email">Adres e-mail<span
          style="color: red;">*</span></label>
      <input @keyup.enter="register" @change="validateEmail" v-model="email" class="register__email__input" name="email"
             type="text" placeholder="Adres e-mail">
    </form>

    <form v-on:submit.prevent class="register__password">
      <label :class="{'wrong-password': !isCorrectPassword}" class="register__password__label" for="password">Hasło<span
          style="color: red;">*</span></label>
      <input @keyup.enter="register" @change="validatePassword" v-model="password" class="register__password__input"
             name="password" type="password" placeholder="Hasło" autocomplete="on">
    </form>

    <form v-on:submit.prevent class="register__firstname">
      <label :class="{'wrong-firstname': !isCorrectFirstname}" class="register__firstname__label"
             for="firstname">Imię<span style="color: red;">*</span></label>
      <input @keyup.enter="register" v-model="firstname" @change="isCorrectFirstname = validateMin3Char(firstname)"
             class="register__firstname__input" name="firstname" type="text" placeholder="Imię">
    </form>

    <form v-on:submit.prevent class="register__lastname">
      <label :class="{'wrong-lastname': !isCorrectLastname}" class="register__lastname__label"
             for="lastname">Nazwisko<span style="color: red;">*</span></label>
      <input @keyup.enter="register" v-model="lastname" @change="isCorrectLastname = validateMin3Char(lastname)"
             class="register__lastname__input" name="lastname" type="text" placeholder="Nazwisko">
    </form>

    <form v-on:submit.prevent class="register__location">
      <label :class="{'wrong-location': !isCorrectLocation}" class="register__location__label" for="location">Lokalizacja<span
          style="color: red;">*</span></label>
      <input @keyup.enter="register" v-model="location" @change="isCorrectLocation = validateMin3Char(location)"
             class="register__location__input" name="location" type="text" placeholder="Miejscowość">
    </form>

    <form v-on:submit.prevent class="register__province">
      <label class="register__province__label" for="province">Województwo<span style="color: red;">*</span></label>
      <select @change="isCorrectProvince = true" v-model="province" class="register__province__select" name="province">
        <option value="" disabled selected>Wybierz...</option>
        <option value="dolnośląskie">dolnośląskie</option>
        <option value="kujawsko-pomorskie">kujawsko-pomorskie</option>
        <option value="lubelskie">lubelskie</option>
        <option value="lubuskie">lubuskie</option>
        <option value="łódzkie">łódzkie</option>
        <option value="małopolskie">małopolskie</option>
        <option value="mazowieckie">mazowieckie</option>
        <option value="opolskie">opolskie</option>
        <option value="podkarpackie">podkarpackie</option>
        <option value="podlaskie">podlaskie</option>
        <option value="pomorskie">pomorskie</option>
        <option value="śląskie">śląskie</option>
        <option value="świętokrzyskie">świętokrzyskie</option>
        <option value="warmińsko-mazurskie">warmińsko-mazurskie</option>
        <option value="wielkopolskie">wielkopolskie</option>
        <option value="zachodniopomorskie">zachodniopomorskie</option>
      </select>
    </form>

    <form v-on:submit.prevent class="register__phone">
      <label :class="{'wrong-phone': !isCorrectPhone}" class="register__phone__label" for="phone">Numer telefonu<span
          style="color: red;">*</span></label>
      <input @keyup.enter="register" v-model="phone" @change="validatePhone" class="register__phone__input" name="phone"
             type="text" placeholder="Numer Telefonu">
    </form>

    <button @click="register" class="register__btn">
      <i v-if="loading" class="fas fa-spinner fa-spin fa-lg"></i>
      <span v-if="!loading">Zarejestruj się</span>
    </button>

    <p class="register__footer">Masz już konto na wdmj.pl?
      <router-link to="/logowanie">
        <span style="font-weight:600">Zaloguj się</span>
      </router-link>
    </p>

  </div>
</template>

<script>
import {createStore} from 'vuex'

export default {
  name: 'RegisterForm',
  data() {
    return {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      location: '',
      province: '',
      phone: '',
      isCorrectEmail: true,
      isCorrectPassword: true,
      isCorrectFirstname: true,
      isCorrectLastname: true,
      isCorrectLocation: true,
      isCorrectProvince: false,
      isCorrectPhone: true,
      didInputChanged: false,
      loading: false,
    }
  },
  store: createStore,
  methods: {

    register() {
      //sprawdzic czy prawidłowe dane

      if (this.isCorrectEmail &&
          this.isCorrectPassword &&
          this.isCorrectFirstname &&
          this.isCorrectLastname &&
          this.isCorrectLocation &&
          this.isCorrectProvince &&
          this.isCorrectPhone &&
          this.didInputChanged
      ) {

        this.loading = true;
        let obj = {
          email: this.email,
          password: this.password,
          firstname: this.firstname,
          lastname: this.lastname,
          location: this.location,
          province: this.province,
          phone: this.phone,
        }

        let url = 'http://localhost:8080/api/auth/register';

        //request
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(obj),
        })
            .then(response => {
              if (!response.ok) {
                throw new Error(response.status);
              } else
                return response.json();
            })
            .then(response => {
              this.loading = false;
              console.log('Sukces. Odebrane dane ', response);
              alert('Zarejestrowano. Teraz możesz się zalogować');
              //przekieruj na strone logowania
              this.$router.push("/logowanie");
            })
            .catch((error) => {
              this.loading = false;
              console.log('Błąd', error);
              alert("Nie udało się zarejestrować!");
            })
      } else {
        alert("Dane nie przeszły walidacji!");
      }
    },

    getLogged() {
      return this.$store.state.logged;
    },

    validateEmail: function () {
      this.didInputChanged = true;
      //eslint-disable-next-line
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.isCorrectEmail = re.test(this.email);
    },

    validatePassword: function () {
      this.didInputChanged = true;
      let re = /^.{6,}$/;
      this.isCorrectPassword = re.test(this.password);
    },

    validateMin3Char: function (v) {
      this.didInputChanged = true;
      let re = /^.{3,}$/;
      return re.test(v);
    },

    validatePhone: function () {
      this.didInputChanged = true;
      let re = /^[0-9]{9}$/;
      this.isCorrectPhone = re.test(this.phone);
    },
  }
}
</script>

<style scoped lang="scss">

.wrong-username, .wrong-email, .wrong-password, .wrong-firstname, .wrong-lastname, .wrong-location, .wrong-phone {
  &::before {
    position: absolute;
    top: 72px;
    font-size: 12px;
    font-weight: 400;
    color: #df0000;
  }
}

.wrong-username::before {
  content: 'Nazwa użytkownika musi mieć minimum 6 znaków';
}

.wrong-email::before {
  content: 'Podano błędny adres e-mail';
}

.wrong-password::before {
  content: 'Hasło musi mieć minimum 6 znaków';
}

.wrong-firstname::before {
  content: 'Imię musi mieć minimum 3 znaki';
}

.wrong-lastname::before {
  content: 'Nazwisko musi mieć minimum 3 znaki';
}

.wrong-location::before {
  content: 'Lokalizacja musi mieć minimum 3 znaki';
}

.wrong-phone::before {
  content: 'Numer musi składać się z 9 cyfr';
}

.register {
  // box-shadow: 0px 2px 9px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 9px -5px rgba(0, 0, 0, 0.75);
  width: 500px;
  padding: 70px 40px 40px;
  margin: 50px auto;

  h1 {
    padding: 0;
    margin: 0;
    margin-bottom: 40px;
    text-align: left;
    font-weight: 400;
  }

  &__username, &__email, &__password, &__firstname, &__lastname, &__location, &__phone {
    label {
      position: relative;
      display: block;
      font-weight: 500;
      font-size: 16px;
      margin-top: 30px;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      outline: none;
      border: none;
      border-radius: 4px;
      padding: 10px 10px;
      font-size: 16px;
      background-color: #F3F3F3;

      &:focus {
        outline: 1px solid #007E33;
      }
    }
  }

  &__province {
    label {
      position: relative;
      display: block;
      font-weight: 500;
      font-size: 16px;
      margin-top: 30px;
      margin-bottom: 8px;
    }

    select {
      width: 100%;
      outline: none;
      border: none;
      border-radius: 4px;
      padding: 10px 10px;
      font-size: 16px;
      background-color: #F3F3F3;
      cursor: pointer;

      &:focus {
        outline: 1px solid #007E33;
      }
    }
  }

  &__btn {
    width: 100%;
    background-color: #007E33;
    color: white;
    font-size: 14px;
    border-radius: 7px;
    padding: 10px 30px;
    margin-top: 60px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #006428;
      transition: background-color .5s;
    }
  }

  &__footer {
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    margin-top: 30px;
  }
}

@media(max-width: 510px) {
  .register {
    box-shadow: none;
    width: 100%;
    // padding: 70px 20px 40px;
  }
}

@media(max-width: 360px) {
  .register {
    padding: 70px 20px 40px;
  }
}
</style>
