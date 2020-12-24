<template>
  <div class="results">
    <!-- Szukamy: {{query}} -->
    <h1>Filtry</h1>
    <div class="results__filters">
        <form class="results__province" v-on:submit.prevent>
            <label class="results__province__label" for="province">Województwo</label>
            <select v-model="province" class="results__province__select" name="province">
                <option value="" selected>Wybierz...</option>
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

        <form class="results__category" v-on:submit.prevent>
            <label class="results__category__label" for="category">Kategoria</label>
            <select v-model="category" class="results__category__select" name="category">
                <option value="" selected >Wybierz...</option>
                <option value="Nieruchomości">Nieruchomości</option>
                <option value="Motoryzacja">Motoryzacja</option>
                <option value="Rolnictwo">Rolnictwo</option>
                <option value="Elektronika">Elektronika</option>
                <option value="Sport">Sport</option>
                <option value="Zwierzęta">Zwierzęta</option>
                <option value="Praca">Praca</option>
                <option value="Dla dzieci">Dla dzieci</option>
                <option value="Moda">Moda</option>
                <option value="Pozostałe">Pozostałe</option>
            </select>
        </form>

        <form class="results__min" v-on:submit.prevent>
            <label class="results__min__label" for="min">Cena</label>
            <div style="display: flex">
                <input v-model="min" class="results__min__input" name="min" type="number" placeholder="Od" min=0>
                <input v-model="max" class="results__max__input" name="max" type="number" placeholder="Do" min=0>
            </div>
        </form>

        <form class="results__order" v-on:submit.prevent>
            <label class="results__order__label" for="order">Sortuj</label>
            <select v-model="order" class="results__order__select" name="order">
                <option value="Najnowsze" selected >Najnowsze</option>
                <option value="Najtańsze">Najtańsze</option>
                <option value="Najdroższe">Najdroższe</option>
            </select>
        </form>
    </div>
    <h1 style="margin-bottom: 40px;">Wyniki wyszukiwania dla "{{query}}"</h1>
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>

    <div class="results__pagination">
        <div @click="changePage(1)" class="results__page" :class="{'active': page===1}">1</div>
        <div @click="changePage(2)" class="results__page" :class="{'active': page===2}">2</div>
        <div @click="changePage(3)" class="results__page" :class="{'active': page===3}">3</div>
        <div @click="changePage(4)" class="results__page" :class="{'active': page===4}">4</div>
        <span style="margin: 10px 5px 0;">...</span>
        <div class="results__page">40</div>
    </div>
  </div>
</template>

<script>
import Card2 from './Card2.vue';

export default {
  name: 'Wyszukane',
  components:{
      Card2,
  },
  data(){
      return{
          province: 'Wybierz...',
          category: 'Wybierz...',
          min: '',
          max: '',
          order: 'Najnowsze',
          page: 1,
      }
  },
  props:{
      query: String,
  },
  mounted(){
      console.log(this.$route.params.query);
  },
  methods:{
      changePage(p){
          this.page = p;
      }
  }
}
</script>


<style lang="scss" scoped>
.search{
  margin: 80px auto;
}

.results{
    // box-shadow: 0px 0px 9px -5px rgba(0,0,0,0.75);
    width: 1000px;
    padding: 40px;
    margin: 50px auto;
    h1{
        padding: 0;
        margin: 0; 
        text-align: left;
        font-weight: 400;
    }

    &__filters{
        display: flex;
        justify-content: space-between;
        margin-bottom:50px;
        form{
            margin-right: 40px;

            &:last-child{
                margin-right: 0;
            }
        }
    }

    &__max{
        input{
            width:80px;
            outline: none;
            border: none;
            border-radius: 4px;
            padding: 10px 10px;
            margin-left: 20px; 
            font-size: 16px;
            background-color: #F3F3F3;
            
            &:focus{
                outline: 1px solid #007E33;
            }
        }
    }

    &__min{
        label{
            position: relative;
            display: block;
            font-weight: 500;
            font-size: 16px;
            margin-top: 30px;
            margin-bottom:8px;
        }

        input{
            width:80px;
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
        div{
            display: flex;
            justify-content: space-between;
            width: 180px;
        }
    }

    &__province, &__category{
        label{
            position: relative;
            display: block;
            font-weight: 500;
            font-size: 16px;
            margin-top: 30px;
            margin-bottom:8px;
        }

        select{
            width:190px;
            outline: none;
            border: none;
            border-radius: 4px;
            padding: 10px 10px;
            font-size: 16px;
            background-color: #F3F3F3;
            cursor: pointer;
            &:focus{
                outline: 1px solid #007E33;
            }
        }
    }

    &__order{
        label{
            position: relative;
            display: block;
            font-weight: 500;
            font-size: 16px;
            margin-top: 30px;
            margin-bottom:8px;
        }

        select{
            width:160px;
            outline: none;
            border: none;
            border-radius: 4px;
            padding: 10px 10px;
            font-size: 16px;
            background-color: #F3F3F3;
            cursor: pointer;
            &:focus{
                outline: 1px solid #007E33;
            }
        }
    }

    &__pagination{
        display: flex;
        justify-content: center;
    }

    &__page{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        font-size: 16px;
        border: 2px solid #007E33;
        border-radius: 5px;
        text-align: center;
        margin: 5px;
        cursor: pointer;
        transition: background-color .1s;
        &:hover{
            background-color: #007E33;
            color: white;
        }
    }
}

.active{
    background-color: #007E33;
    color: white;
}
</style>