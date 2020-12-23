<template>
    <div class="newest">
        <h1>Najnowsze ogłoszenia</h1>
        <div class="newest__list">
            <Card url="../assets/multipla.jpg"/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

        <button class="newest__btn">Zobacz wszystkie</button>
    </div>
</template>

<script>
import { createStore } from 'vuex';
import Card from './Card.vue';

export default {
  name: 'Najnowsze',
  store: createStore,
  components:{
      Card,
  },
  data(){
      return{

      }
  },
  methods:{
    getLogged(){
      return this.$store.state.logged;
    }
  }
}
</script>

<style scoped lang="scss">
.newest{
    width: 1400px;
    margin: auto;
    &__list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    
    

    h1{
        padding:0;
        margin: 0;
        margin-bottom:20px;
        text-align: center;
        font-weight: 400;
    }

    

    &__btn{
    background-color: #007E33;
    color: white;
    margin: 10px auto 80px;
    display: block;
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
@media(max-width: 1420px){
    .newest{
        width: 1050px;
    }
}

@media(max-width: 1080px){
    .newest{
        width: 700px;
    }
}

@media(max-width: 730px){
    .newest{
        width: 350px;
    }
}

</style>
