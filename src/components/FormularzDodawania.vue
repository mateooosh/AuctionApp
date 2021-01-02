<template>
    <div class="form">
         <!-- loading animation -->
         <!-- <div v-if="loading" class="form__loading">
             <div class="lds-dual-ring"></div>
         </div> -->
        


        <h1>Dodaj ogłoszenie</h1>
        <form class="form__title">
            <label class="form__title__label" for="title">Tytuł<span style="color: red;">*</span></label>
            <input @change="isCorrectTitle = validateMin3Char(title)" v-model="title" class="form__title__input" name="title" type="text" placeholder="Tytuł">
        </form>

        <form class="form__state">
            <label class="register__state__label" for="state">Stan<span style="color: red;">*</span></label>
            <select @change="isCorrectState=true" v-model="state" class="register__state__select" name="state">
                <option value="" disabled selected>Wybierz...</option>
                <option value="Nowy">Nowy</option>
                <option value="Używany">Używany</option>
            </select>
        </form>

        <form class="form__category">
            <label class="register__category__label" for="category">Kategoria<span style="color: red;">*</span></label>
            <select @change="isCorrectCategory=true" v-model="category" class="register__category__select" name="category">
                <option value="" disabled selected>Wybierz...</option>
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

        <form class="form__startingPrice">
            <label class="form__startingPrice__label" for="startingPrice">Cena początkowa<span style="color: red;">*</span></label>
            <input v-model="startingPrice" class="form__startingPrice__input" min="0" name="startingPrice" type="number" placeholder="Cena początkowa">
        </form>

        <form class="form__instantPrice">
            <label  class="form__instantPrice__label" for="instantPrice">Cena błyskawiczna<span style="color: red;">*</span></label>
            <input v-model="instantPrice" class="form__instantPrice__input" min="0" name="instantPrice" type="number" placeholder="Cena błyskawiczna">
        </form>

        <form class="form__description">
            <label  class="form__description__label" for="description" :data-after-content="remainingCharacters">Opis przedmiotu<span style="color: red;">*</span></label>
            <!-- <input v-model="description" class="form__description__input" name="description" type="textarea" placeholder="Tytuł"> -->
            <textarea @change="isCorrectDescription = validateMin3Char(description)" @keyup="calcChar" v-model="description" name="description" class="form__description__input" placeholder="Opis..." maxlength="500"></textarea>
        </form>

        <form class="form__photos">
            <label class="form__description__label">Dodaj zdjęcia</label>
            <label class="form__photos__label" for="photo">Dodaj zdjęcia</label>
            <input @change="displayPhotos" class="form__photos__input" accept="image/*" id="photo" type="file" name="uploadFile" multiple="multiple" />
        </form>
        <div class="form__display">
            <div :class="{'display-none': photosLength<1}" >
                <img class="photo" src="#">
            </div>
            <div :class="{'display-none': photosLength<2}">
                <img class="photo" src="#">
            </div>
            <div :class="{'display-none': photosLength<3}">
                <img class="photo" src="#">
            </div>
            <div :class="{'display-none': photosLength<4}">
                <img class="photo" src="#">
            </div>
            <div :class="{'display-none': photosLength<5}">
                <img class="photo" src="#">
            </div>
        </div>
        <button @click="addAuction" class="form__button">
            Dodaj ogłoszenie
        </button>
    </div>
</template>

<script>

import { createStore } from 'vuex'


export default {
    name: 'FormularzDodawania',
    data(){
        return{
            title: '',
            state: '',
            category: '',
            startingPrice: '',
            instantPrice: '',
            description: '',
            photos: {},
            photosBlob: [], //not blob, base64
            photosLength: 0,
            // loading: false,
            remainingCharacters: "Pozostało znaków: 500/500",
            isCorrectTitle: false,
            isCorrectState: false,
            isCorrectCategory: false,
            isCorrectDescription: false,

        }
    },
    
    methods:{
        //min 3 char
        validateMin3Char: function (v) {
            let re = /^.{3,}$/;
            return re.test(v);
        },

        displayPhotos(){
            this.photos = document.getElementById('photo').files;
            //too many photos
            if(this.photos.length > 5){
                alert("Wybrano zbyt dużo zdjęć! (Max: 5 zdjęć)");
            }
            else{
                this.photosLength = this.photos.length;
                let out = document.getElementsByClassName('photo');

                //display photos
                for(let i=0; i<this.photos.length; i++){
                    out[i].src = URL.createObjectURL(this.photos[i]);
                    out[i].onload = function() {
                        URL.revokeObjectURL(out[i].src); 
                    }
                }

                // convert images to blob
                let counter = 0;
                let promise = new Promise((resolve) => {
                    for(let i=0; i<this.photosLength; i++){
                        fetch(out[i].src)
                        .then( response => {
                            return response.blob();
                        })
                        .then( blob => {
                            var reader = new FileReader();
                            reader.onloadend = () => {
                                this.photosBlob.push(reader.result);
                            }
                            reader.readAsDataURL(blob);

                        }).then(() => {
                            counter++;
                            //resolve promise
                            if(counter === this.photosLength)
                                resolve();
                        });
                    } 
                }); 

                promise.then(() => {
                    // console.log(this.photosBlob);
                })
            }
        },

        addAuction(){
            if(this.$store.state.logged){
                if(this.isCorrectTitle && 
                    this.isCorrectState && 
                    this.isCorrectCategory && 
                    this.isCorrectDescription && 
                    (this.photosLength>0) && 
                    (this.startingPrice<this.instantPrice)){

                    let obj = {
                        title: this.title,
                        state: this.state,
                        category: this.category,
                        startingPrice: this.startingPrice,
                        instantPrice: this.instantPrice,
                        description: this.description,
                        photosBlob: this.photosBlob,
                        photosLength: this.photosLength,
                        userId: this.$store.state.userId,
                    }
                    
                    // this.loading = true;




                    console.log('Przesłany obiekt:',obj);


                    let url = 'http://localhost:8080/api/auctions/create';
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
                        // display response from server
                        console.log('Sukces. Odebrane dane ', response);
                        alert("Utworzono aukcję");
                        this.$router.push("/");
                    })
                    .catch((error) => {
                        console.log('Błąd', error);
                        alert("Nie udało się dodać przedmiotu!");
                    }) 
                }
                else{
                    alert("Sprawdź raz jeszcze wprowadzone przez Ciebie wartości!");
                }

            }
        },

        calcChar(){
            this.remainingCharacters = "Pozostało znaków: " + (500-this.description.length) + "/500";
        }
    },
    store: createStore,
  
}
</script>

<style scoped lang="scss">

.display-none{
    display: none !important;
}

.photo{
    display: block;
    max-width: 100%;
    max-height: 100%;
}
.form{
    box-shadow: 0px 0px 9px -5px rgba(0,0,0,0.75);
    width: 700px;
    padding: 70px 40px 40px;
    margin: 50px auto;
    h1{
        padding: 0;
        margin: 0;
        margin-bottom: 40px;
        text-align: left;
        font-weight: 400;
    }

    &__category, &__state{
        label{
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
        }
    }

    &__startingPrice, &__instantPrice{
        position: relative;
        label::after{
            content: 'PLN';
            position: absolute;
            opacity: 0.5;
            right: 30px;
            top: 37px;
        }
    }

    &__title, &__startingPrice, &__instantPrice, &__description {
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

    &__description{
        label{
            &::after{
                content: attr(data-after-content);
                position: absolute;
                top: 2px;
                right: 0;
                font-size: 14px;
                font-weight: 400;
                color: rgb(93, 93, 93);

                @media(max-width: 370px){
                    content: '';
                }
            }
        }
    }

    textarea{
        background-color: #F3F3F3;
        width:100%;
        height: 160px;
        min-height: 100px;
        max-width: 100%;
        min-width: 100px;
        font-size: 16px;
        padding: 10px 10px;
        outline: none;
        border: none;
        border-radius: 4px;

        &:focus{
            outline: 1px solid #007E33;
        }
    }

    &__photos{
        label:nth-child(1){
            display: block;
            font-weight: 500;
            font-size: 16px;
            margin-top: 30px;
            margin-bottom:22px;
        }
        label:nth-child(2){
            position: relative;
            width:200px;
            text-align: center;
            margin-top: 30px;
            margin-bottom:8px;

            background-color: #007E33;
            color: white;
            font-size: 14px;
            border-radius: 7px;
            padding: 10px 30px;
            font-weight: 400;

            &:hover{
                cursor: pointer;
                background-color: #006428;
                transition: background-color .5s;
            }
        }

        input{
            display: none;
            outline: none;
            border: none;
        }
    }
    &__display{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top:20px;
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            width: 48%;
            height: 180px;
        }
    }

    &__button{
        display: block;
        width:200px;
        background-color: #007E33;
        color: white;
        font-size: 14px;
        border-radius: 7px;
        padding: 10px 30px;
        margin: 70px 0 0 auto;
        outline: none;
        border: none;
        cursor: pointer;

        &:hover{
            background-color: #006428;
            transition: background-color .5s;
        }
    }
}

@media(max-width: 720px){
   .form{
        width: 98%;

        &__display{
            div{
                width: 100%;
                height: auto;
            }
        }
   }
}

@media(max-width: 400px){
    .form{
        padding: 70px 20px 40px;
    }
}

//loading animation
// .lds-dual-ring {
//   display: inline-block;
//   width: 160px;
//   height: 160px;
// }
// .lds-dual-ring:after {
//   content: " ";
//   display: block;
//   width: 128px;
//   height: 128px;
//   margin: 16px auto;
//   border-radius: 50%;
//   border: 12px solid rgb(0, 0, 0);
//   border-color: rgb(0, 0, 0) transparent rgb(0, 0, 0) transparent;
//   animation: lds-dual-ring 1.6s linear infinite;
// }
// @keyframes lds-dual-ring {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }

// .form__loading{
//     z-index: 20;
//     position: fixed;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100vh;
//     background-color: rgba(56, 56, 56, 0.233) ;
//     display: flex;
//     justify-content: center;
// }
</style>
