<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__categories">
        <h3>KATEGORIE</h3>
        <ul>

          <router-link to="/kategoria/nieruchomości">
            <li>Nieruchomości</li>
          </router-link>

          <router-link to="/kategoria/motoryzacja">
            <li>Motoryzacja</li>
          </router-link>

          <router-link to="/kategoria/rolnictwo">
            <li>Rolnictwo</li>
          </router-link>

          <router-link to="/kategoria/elektronika">
            <li>Elektronika</li>
          </router-link>

          <router-link to="/kategoria/sport">
            <li>Sport</li>
          </router-link>

          <router-link to="/kategoria/zwierzęta">
            <li>Zwierzęta</li>
          </router-link>

          <router-link to="/kategoria/ogród">
            <li>Ogród</li>
          </router-link>

          <router-link to="/kategoria/dzieci">
            <li>Dzieci</li>
          </router-link>


          <router-link to="/kategoria/moda">
            <li>Moda</li>
          </router-link>


          <router-link to="/kategoria/pozostałe">
            <li>Pozostałe</li>
          </router-link>

        </ul>
      </div>
      <div class="footer__about-us">
        <h3>O NAS</h3>
        wdmj.pl - jest to serwis z darmowymi ogłoszeniami lokalnymi podzielonymi na kategorie: Nieruchomości,
        Motoryzacja, Rolnictwo, Elektronika, Sport, Zwierzęta, Ogród, Dzieci, Moda, Pozostałe. Duży wybór przedmiotów
        używanych i nie tylko, sprzedawaj i kupuj w sposób, który nawet fizjologom się nie śnił. Zobacz jakie to proste!
      </div>

      <div class="footer__contact">
        <h3>KONTAKT</h3>
        <div><i class="fas fa-home"></i> Kraków, PL</div>
        <div><i class="fas fa-envelope"></i> email@example.com</div>
        <div><i class="fas fa-phone"></i> 123-456-789</div>
      </div>
    </div>
    <div class="footer__copyright">
      All Rights Reserved © 2020 Copyright: wdmj.pl Sp. z o.o. Korzystanie z serwisu oznacza akceptację regulaminu.
    </div>
  </footer>
</template>

<script>
import {createStore} from 'vuex'

export default {
  name: 'Footer',
  store: createStore,
  methods: {
    getLogged() {
      return this.$store.state.logged;
    }
  }
}
</script>

<style scoped lang="scss">
i {
  width: 20px;
}

h3 {
  color: white;
  font-weight: 500;
}

ul {
  display: flex;
  flex-wrap: wrap;
  padding-inline-start: 20px;

  a {
    width: 50%;
    cursor: pointer;
    color: #bdbdbd;

    &:hover {
      color: rgb(224, 224, 224);
    }
  }
}

.footer {
  width: 100%;
  background-color: #2F2F2F;
  color: rgb(189, 189, 189);

  &__content {
    display: flex;
    text-align: left;
    line-height: 1.5;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 30px;
    font-weight: 400;

    div {
      flex: 1;
    }
  }

  &__about-us, &__categories, &__contact {
    padding: 0 30px;

    div {
      margin-top: 10px;
    }
  }


  &__copyright {
    // border-top:1px solid black;
    background-color: rgb(36, 36, 36);
    color: rgb(206, 206, 206);
    text-align: center;
    padding: 12px 0;
    font-weight: 300;
    font-size: 13px;
  }
}

@media(max-width: 1500px) {
  a {
    width: 100% !important;
  }
}

@media(max-width: 900px) {
  h3 {
    text-align: center;
  }
  a {
    width: 50% !important;
    text-align: left;
  }
  .footer__content {
    flex-direction: column;
    text-align: center;

    div {
      margin-bottom: 20px;
    }
  }
}

@media(max-width: 550px) {
  .footer__content {
    width: 100%;
  }
}
</style>
