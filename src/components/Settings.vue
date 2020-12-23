<template>
    <div class="settings">
        <h1>Ustawienia konta</h1>
        <div class="settings__option">
            <div @click="toggleContentIsVisible(0)" class="settings__title">
                <div>
                    <i class="fas fa-user-edit fa-lg"></i> Zmień dane kontaktowe
                </div>
                <!-- <img :class="{'rotate-180-deg': contentIsVisible}" class="settings__img" src="../assets/icons/arrow.svg" height=30 alt=""> -->
                <i :class="{'rotate-180-deg': contentIsVisible[0]}"  class="fas fa-chevron-down fa-lg"></i>
            </div>
            <div  class="settings__content">
                <div>
                    <form class="settings__firstname">
                        <label :class="{'wrong-firstname': !isCorrectFirstname}"  class="settings__firstname__label" for="firstname">Imię<span style="color: red;">*</span></label>
                        <input v-model="firstname" @change="isCorrectFirstname = validateMin3Char(firstname)" class="settings__firstname__input" name="firstname" type="text" placeholder="Imię">
                    </form>

                    <form class="settings__lastname">
                        <label :class="{'wrong-lastname': !isCorrectLastname}"  class="settings__lastname__label" for="lastname">Nazwisko<span style="color: red;">*</span></label>
                        <input v-model="lastname" @change="isCorrectLastname = validateMin3Char(lastname)" class="settings__lastname__input" name="lastname" type="text" placeholder="Nazwisko">
                    </form>

                    <form class="settings__location">
                        <label :class="{'wrong-location': !isCorrectLocation}" class="settings__location__label" for="location">Lokalizacja<span style="color: red;">*</span></label>
                        <input v-model="location" @change="isCorrectLocation = validateMin3Char(location)" class="settings__location__input" name="location" type="text" placeholder="Miejscowość">
                    </form>

                    <form class="settings__province">
                        <label class="settings__province__label" for="province">Województwo<span style="color: red;">*</span></label>
                        <select @change="isCorrectProvince = true" v-model="province" class="settings__province__select" name="province">
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

                    <form class="settings__phone">
                        <label :class="{'wrong-phone': !isCorrectPhone}" class="settings__phone__label" for="phone">Numer telefonu<span style="color: red;">*</span></label>
                        <input v-model="phone" @change="validatePhone" class="settings__phone__input" name="phone" type="text" placeholder="Numer Telefonu">
                    </form>

                    
                </div>
                <button @click="savePersonalData" class="settings__btn">Zapisz</button>
            </div>
        </div>

        <div class="settings__option">
            <div @click="toggleContentIsVisible(1)" class="settings__title">
                <div>
                    <i class="fas fa-lock fa-lg"></i> Zmień hasło
                </div>
                <!-- <img :class="{'rotate-180-deg': contentIsVisible}" class="settings__img" src="../assets/icons/arrow.svg" height=30 alt=""> -->
                <i :class="{'rotate-180-deg': contentIsVisible[1]}"  class="fas fa-chevron-down fa-lg"></i>
            </div>
            <div class="settings__content">
                <div>
                     <form class="settings__password1">
                        <label :class="{ 'wrong-password': !isCorrectPassword1}" class="settings__password1__label" for="settings__password1">Aktualne hasło<span style="color: red;">*</span></label>
                        <input v-model="oldPassword" @change="isCorrectPassword1 = validatePassword(oldPassword)" class="settings__password1__input" name="settings__password1" type="password" placeholder="Aktualne hasło" autocomplete="on">
                    </form>

                    <form class="settings__password2">
                        <label :class="{ 'wrong-password': !isCorrectPassword2}" class="settings__password2__label" for="settings__password2">Nowe hasło<span style="color: red;">*</span></label>
                        <input v-model="newPassword" @change="isCorrectPassword2 = validatePassword(newPassword)" class="settings__password2__input" name="settings__password2" type="password" placeholder="Nowe hasło" autocomplete="on">
                    </form>
                </div>
                <button @click="savePassword" class="settings__btn">Zapisz</button>
            </div>
        </div>

        <div class="settings__option">
            <div @click="toggleContentIsVisible(2)" class="settings__title">
                <div>
                    <i class="fas fa-at fa-lg"></i> Zmień adres e-mail
                </div>
                <!-- <img :class="{'rotate-180-deg': contentIsVisible}" class="settings__img" src="../assets/icons/arrow.svg" height=30 alt=""> -->
                <i :class="{'rotate-180-deg': contentIsVisible[2]}"  class="fas fa-chevron-down fa-lg"></i>
            </div>
            <div  class="settings__content">
                <div>
                     <form class="settings__email1">
                        <label :class="{ 'wrong-email': !isCorrectEmail1}" class="settings__email1__label" for="settings__email1">Aktualny e-mail   <span style="color: red;">*</span></label>
                        <input v-model="oldEmail" @change="isCorrectEmail1 = validateEmail(oldEmail)" class="settings__email1__input" name="settings__email1" type="text" placeholder="Aktualny e-mail">
                    </form>

                    <form class="settings__email2">
                        <label :class="{ 'wrong-email': !isCorrectEmail2}" class="settings__email2__label" for="settings__email2">Nowy e-mail<span style="color: red;">*</span></label>
                        <input v-model="newEmail" @change="isCorrectEmail2 = validateEmail(newEmail)" class="settings__email2__input" name="settings__email2" type="text" placeholder="Nowy e-mail">
                    </form>
                </div>
                <button @click="saveEmail" class="settings__btn">Zapisz</button>
            </div>
        </div>

        <div class="settings__option">
            <div @click="toggleContentIsVisible(3)" class="settings__title">
                <div>
                    <i class="fas fa-trash fa-lg"></i> Usuń swoje konto
                </div>
                <!-- <img :class="{'rotate-180-deg': contentIsVisible}" class="settings__img" src="../assets/icons/arrow.svg" height=30 alt=""> -->
                <i :class="{'rotate-180-deg': contentIsVisible[3]}"  class="fas fa-chevron-down fa-lg"></i>
            </div>
            <div  class="settings__content">
                <div>
                    Tutaj dorobie
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createStore } from 'vuex'

export default {
    name: 'Settings',
    store: createStore,
    data(){
        return{
            contentIsVisible: [false, false, false, false],
            firstname: 'Mateusz',
            lastname: 'Bujak',
            location: 'Kielce',
            province: 'świętokrzyskie',
            phone: '123456789',
            isCorrectEmail: true,
            isCorrectPassword: true,
            isCorrectFirstname: true,
            isCorrectLastname: true,
            isCorrectLocation: true,
            isCorrectProvince: true,
            isCorrectPhone: true,

            isCorrectPassword1: true,
            isCorrectPassword2: true,

            oldPassword: '',
            newPassword: '',

            isCorrectEmail1: true,
            isCorrectEmail2: true,
            oldEmail: '',
            newEmail: '',
        }
    },

    mounted(){

        if(this.$store.state.logged){
            // get personal data
            let url = 'http://localhost:8080/api/users/personal?userId=' + this.$store.state.userId;

            //request
            fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.status);
                }
                else 
                    return response.json();
            })
            .then(response => {
                console.log('Sukces. Odebrane dane ', response);
                this.firstname = response.firstname;
                this.lastname = response.lastname;
                this.location = response.location;
                this.province = response.province;
                this.phone = response.phone;
            })
            .catch((error) => {
                console.log('Błąd', error);
                console.log("Coś poszło nie tak z requestem na adres: ", url);
            })
        }
    },

    methods:{
        getLogged(){
        return this.$store.state.logged;
        },

        savePersonalData(){
            let obj = {
                userId: this.$store.state.userId,
                firstname: this.firstname,
                lastname: this.lastname,
                location: this.location,
                province: this.province,
                phone: this.phone
            }

            console.log('Przesłany obiekt', obj);

            let url = 'http://localhost:8080/api/users/personal';

            //request
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(obj),
            })
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.status);
                }
                else 
                    return response.json();
            })
            .then(response => {
                console.log('Sukces. Odebrane dane ', response);
                alert('Zmieniono dane kontaktowe');
            })
            .catch((error) => {
                console.log('Błąd', error);
                alert("Coś poszło nie tak!");
            })

            
        },

        savePassword(){
            if(this.isCorrectPassword1 && this.isCorrectPassword2 && this.oldPassword.length !== 0 && this.newPassword.length !== 0){
                // console.log("save password");

                let obj = {
                    userId: this.$store.state.userId,
                    oldPassword: this.oldPassword,
                    newPassword: this.newPassword
                }

                let url = 'http://localhost:8080/api/users/password';

                //request
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(obj),
                })
                .then(response => {
                    if(!response.ok) {
                        throw new Error(response.status);
                    }
                    else 
                        return response.json();
                })
                .then(response => {
                    console.log('Sukces. Odebrane dane ', response);
                    alert('Zmieniono hasło');
                })
                .catch((error) => {
                    console.log('Błąd', error);
                    console.log("Coś poszło nie tak z requestem: ", url);
                })
            }
        },

        saveEmail(){
            if(this.isCorrectEmail1 && this.isCorrectEmail2 && this.oldEmail.length !== 0 && this.newEmail.length !== 0){

                let obj = {
                    userId: this.$store.state.userId,
                    oldEmail: this.oldEmail,
                    newEmail: this.newEmail
                }

                let url = 'http://localhost:8080/api/users/email';

                //request
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(obj),
                })
                .then(response => {
                    if(!response.ok) {
                        throw new Error(response.status);
                    }
                    else 
                        return response.json();
                })
                .then(response => {
                    console.log('Sukces. Odebrane dane ', response);
                    alert('Zmieniono email');
                })
                .catch((error) => {
                    console.log('Błąd', error);
                    console.log("Coś poszło nie tak z requestem: ", url);
                })
            }
        },

        toggleContentIsVisible(index){
            this.contentIsVisible[index] = !this.contentIsVisible[index];       
            
            var content = document.getElementsByClassName('settings__content')[index];
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        },

        validateEmail: function(v) {
            //eslint-disable-next-line
            let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(v);
        },

        validatePassword: function (v) {
            let re = /^.{6,}$/;
            return re.test(v);
        },

        validateMin3Char: function (v) {
            let re = /^.{3,}$/;
            return re.test(v);
        },

        validatePhone: function(){
            let re = /^[0-9]{9}$/;
            this.isCorrectPhone = re.test(this.phone);
        },
    }
}
</script>

<style scoped lang="scss">

.wrong-username, .wrong-email, .wrong-password, .wrong-firstname, .wrong-lastname, .wrong-location, .wrong-phone{
    &::before {
        position: absolute;
        top: 72px;
        font-size: 12px;
        font-weight: 400;
        color: #df0000;
    }
}

.wrong-username::before{
    content: 'Nazwa użytkownika musi mieć minimum 6 znaków';
}

.wrong-email::before{
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

.rotate-180-deg{
    transform: rotate(180deg);
}

.settings{
    width: 900px;
    margin: 100px auto;
    

    &__option, &__title{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    &__option{
        margin-bottom: 30px;
        // box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 2px 9px -3px rgba(0,0,0,0.75);
        
    }

    &__title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #007E33;
        color: white;
        padding: 16px 20px;
        cursor: pointer;

        i{
            transition: .4s;
            // transform: rotate(90deg);
            &:nth-child(1){
                width: 30px;
            }
        }
    }



    &__content{
        // background-color: rgb(255, 255, 255);
        transition: max-height 0.4s ease-out;
        max-height: 0;
        overflow: hidden;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        &:nth-child(1){
            div{
                background-color: red;
            }
        }
        

        div{
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            form{
                width: 47%;
            }
        }

        
    }

    &__username, &__email1, &__email2, &__password1, &__password2, &__firstname, &__lastname, &__location, &__phone {
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

    &__province{
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
        margin: 20px 20px 30px auto;
        outline: none;
        border: none;
        cursor: pointer;

        &:hover{
            background-color: #006428;
            transition: background-color .5s;
            }
    }
}

@media(max-width: 920px){
    .settings{
        width: 98%;
    }
}

@media(max-width: 550px){
    .settings{

        &__content{
            div{
                padding: 10px 10px;
            }
        }
    }
}
</style>
