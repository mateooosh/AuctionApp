<template>
  <div class="form">
    <input @keyup.enter="search" v-model="query" class="form__input" type="text" :placeholder="placeholder">
    <button @click="search" class="form__btn">Szukaj</button>
  </div>
</template>

<script>
import {createStore} from 'vuex'

export default {
  name: 'Navbar',
  store: createStore,
  data() {
    return {
      query: '',
      interval: '',
      string: 'Czego szukasz?',
      placeholder: '',
      i: 0,
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.i >= this.string.length)
        this.i = 0;
      this.i++;
      this.placeholder = this.string.slice(0, this.i);

    }, 120);
  },
  methods: {
    getLogged() {
      return this.$store.state.logged;
    },

    search() {
      if (this.query.length !== 0) {
        this.$router.push(`/oferty/${this.query}`);
      }
    }
  }
}
</script>

<style scoped lang="scss">


.form {

  margin: auto;
  width: 600px;
  display: flex;
  justify-content: center;

  &__input {
    display: block;
    flex: 4;
    font-size: 16px;
    padding: 12px 15px;
    background-color: #F3F3F3;
    outline: none;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &__btn {
    flex: 1;
    // min-width: 80px;
    background-color: #007E33;
    color: white;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 400;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #006428;
      transition: background-color .5s;
    }
  }

  i {
    margin-left: 10px;
  }
}

@media(max-width: 620px) {
  .form {
    width: 90%;
  }
}
</style>
