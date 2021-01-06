<template>
  <div class="results">
    <!-- Szukamy: {{query}} -->
    <h1>Filtry</h1>
    <div class="results__filters">
        <form class="results__province" v-on:submit.prevent>
            <label class="results__province__label" for="province">Województwo</label>
            <select @change="getAuctions" v-model="province" class="results__province__select" name="province">
                <option value="">Wybierz...</option>
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

        <form class="results__category" v-on:submit.prevent v-if="catIsVisible">
            <label class="results__category__label" for="category">Kategoria</label>
            <select @change="getAuctions" v-model="category" class="results__category__select" name="category">
                <option value="" >Wybierz...</option>
                <option value="nieruchomości">Nieruchomości</option>
                <option value="motoryzacja">Motoryzacja</option>
                <option value="rolnictwo">Rolnictwo</option>
                <option value="elektronika">Elektronika</option>
                <option value="sport">Sport</option>
                <option value="zwierzęta">Zwierzęta</option>
                <option value="ogród">Ogród</option>
                <option value="dzieci">Dzieci</option>
                <option value="moda">Moda</option>
                <option value="pozostałe">Pozostałe</option>
            </select>
        </form>

        <form class="results__min" v-on:submit.prevent>
            <label class="results__min__label" for="min">Cena</label>
            <div>
                <input @change="getAuctions" v-model="min" class="results__min__input" name="min" type="number" placeholder="Od" min=0>
                <input @change="getAuctions" v-model="max" class="results__max__input" name="max" type="number" placeholder="Do" min=0>
            </div>
        </form>

        <form class="results__order" v-on:submit.prevent>
            <label class="results__order__label" for="order">Sortuj</label>
            <select @change="getAuctions" v-model="order" class="results__order__select" name="order">
                <option value="latest" >Najnowsze</option>
                <option value="asc">Najtańsze</option>
                <option value="desc">Najdroższe</option>
            </select>
        </form>
    </div>
    <h1 style="margin-bottom: 40px;">Wyniki wyszukiwania <span v-if="query!=null">dla "{{query}}"</span> <span v-if="kategoria!=null">dla kategorii "{{kategoria}}"</span></h1>
    <!-- <h1 v-if="kategoria!=null">{{kategoria}}</h1> -->
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

    <button class="results__btn">Pokaż więcej</button>
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
          province: '',
          category: '',
          min: '',
          max: '',
          order: 'latest',
          cat: '',
          catIsVisible: true,
          gotData: false,
          page: 1,
          auctions: [],
      }
  },
  props:{
      query: String,
      kategoria: String,
  },
  mounted(){
      console.log("query:",this.query);
      console.log("kategoria:",this.kategoria);

      this.getAuctions();
      

      if(this.kategoria !== undefined){
        this.category = this.kategoria;
        this.catIsVisible = false;
        document.title = this.category[0].toUpperCase() + this.category.slice(1) + " - wdmj.pl";
      }
      else{
        document.title = this.query + " - wdmj.pl";
      }
  },
  methods:{
        getAuctions(){
            // replace blank space with '-'
            const title = this.query.replace(/\s/g, '-').toLowerCase();
            let url = `http://localhost:8080/api/auctions/${title}`;

            //sort
            url+=`?sort=${this.order}`;

            //province
            if(this.province !== '')
                url+=`&province=${this.province}`;

            //category
            if(this.category !== '')
                url+=`&category=${this.category}`;
            

            //min price
            if(this.min != '' && this.min !=0)
                url+=`&min=${this.min}`;
            

            //max price
            if(this.max != '' && this.max !=0)
                url+=`&max=${this.max}`;

            //page
            url+=`&page=${this.page}`;

            console.log("Request na adres: ",url);

            fetch(url)
                .then(response => {
                        if(!response.ok) {
                            throw new Error(response.status);
                        }
                        else 
                            return response.json();
                })
                .then(response => {
                    // display response from server
                    console.log('Sukces. Odebrane dane ', response);
                    this.auctions = this.auctions.concat(response);

                    this.gotData = true;
                    this.page++;
                })
                .catch(() => {
                    console.log('Coś poszło nie tak z requestem:', url);
                    alert("Nie udało się pobrać aukcji!");
                }) 
            
        }
      
  },
  computed:{
      
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
    margin: 0 auto 50px;
    h1{
        padding: 0;
        margin: 0; 
        text-align: left;
        font-weight: 400;
    }

    &__filters{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom:50px;
        form{
            width: 23%;
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
            width:40%;
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
            width: 100%;
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
            width:100%;
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
            width:100%;
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

    

    &__btn{
        display: block;
        background-color: #007E33;
        color: white;
        font-size: 14px;
        border-radius: 7px;
        padding: 10px 30px;
        margin: 20px auto 30px ;
        outline: none;
        border: none;
        cursor: pointer;

        &:hover{
            background-color: #006428;
            transition: background-color .5s;
        }
    }
}

.active{
    background-color: #007E33;
    color: white;
}

@media(max-width: 1020px){
    .results{
        width: 100%;
        padding: 40px 10px;
    }
}

@media(max-width: 800px){
    .results{
        &__filters{
            margin-bottom:50px;
            form{
                width: 43%;
            }
        }
    }
}

@media(max-width: 600px){
    .results{
        &__filters{
            margin-bottom:50px;
            form{
                width: 48%;
            }
        }
    }
}

@media(max-width: 400px){
    .results{
        &__filters{
            margin-bottom:50px;
            form{
                width: 100%;
            }
        }
    }
}
</style>