<template>
    <section>
        <h1>Klienci</h1>
        <input class="search__input" @keyup="searchInUsers(query)" type="text" v-model="query" placeholder="Szukaj">
        <div class="details">
            <section class="headers">
                <div>ID Klienta</div>
                <div>Imię</div>
                <div>Nazwisko</div>
                <div>Adres e-mail</div>
                <div>Miejscowość</div>
                <div>Województwo</div>
                <div>Telefon</div>
                <div>Akcje</div>
            </section>
            <div v-if="query.length <1">
                <div v-for="(user, i) in users" :key="user">
                    <TableKlienci @remove="showModalRemove" @edit="showModalEdit" :user="user" :i="i"/>
                </div>
            </div>

            <div v-if="query.length > 0">
                <div v-for="(user, i) in users2" :key="user">
                    <TableKlienci @remove="showModalRemove" @edit="showModalEdit" :user="user" :i="i"/>
                </div>
            </div>
        </div>

        <!-- <div v-if="modalEditIsVisible" class="edit">
            <div class="modal__background"></div>
            
            <button @click="savePersonalData" class="edit__btn">Zapisz</button>
        </div> -->

        <section class="edit" v-if="modalEditIsVisible">
			<div class="edit__background"></div>
			<div class="edit__card">
				<div class="edit__header">
					<p>Zmiana danych użytkownika</p>
					<button @click="modalEditIsVisible=false" class="edit__delete"></button>
				</div>

				<section class="edit__body">
                    <form v-on:submit.prevent class="edit__email">
                        <label :class="{'wrong-email': !isCorrectEmail}"  class="edit__email__label" for="email">E-mail<span style="color: red;">*</span></label>
                        <input v-model="email" @change="isCorrectEmail = validateMin3Char(email)" class="edit__email__input" name="email" type="text" placeholder="E-mail">
                    </form>

                    <form v-on:submit.prevent class="edit__firstname">
                        <label :class="{'wrong-firstname': !isCorrectFirstname}"  class="edit__firstname__label" for="firstname">Imię<span style="color: red;">*</span></label>
                        <input v-model="firstname" @change="isCorrectFirstname = validateMin3Char(firstname)" class="edit__firstname__input" name="firstname" type="text" placeholder="Imię">
                    </form>

                    <form v-on:submit.prevent class="edit__lastname">
                        <label :class="{'wrong-lastname': !isCorrectLastname}"  class="edit__lastname__label" for="lastname">Nazwisko<span style="color: red;">*</span></label>
                        <input v-model="lastname" @change="isCorrectLastname = validateMin3Char(lastname)" class="edit__lastname__input" name="lastname" type="text" placeholder="Nazwisko">
                    </form>

                    <form v-on:submit.prevent class="edit__location">
                        <label :class="{'wrong-location': !isCorrectLocation}" class="edit__location__label" for="location">Lokalizacja<span style="color: red;">*</span></label>
                        <input v-model="location" @change="isCorrectLocation = validateMin3Char(location)" class="edit__location__input" name="location" type="text" placeholder="Miejscowość">
                    </form>

                    <form v-on:submit.prevent class="edit__province">
                        <label class="edit__province__label" for="province">Województwo<span style="color: red;">*</span></label>
                        <select @change="isCorrectProvince = true" v-model="province" class="edit__province__select" name="province">
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

                    <form v-on:submit.prevent class="edit__phone">
                        <label :class="{'wrong-phone': !isCorrectPhone}" class="edit__phone__label" for="phone">Numer telefonu<span style="color: red;">*</span></label>
                        <input v-model="phone" @change="validatePhone" class="edit__phone__input" name="phone" type="text" placeholder="Numer Telefonu">
                    </form>

				</section>
				<div class="modal__footer">
                    <button @click="modalEditIsVisible=false" class="modal__btn">Anuluj</button>
					<button @click="editUser" class="modal__btn">Zapisz dane użytkownika</button>
				</div>
			</div>
		</section>

        <section class="modal" v-if="modalRemoveIsVisible">
			<div class="modal__background"></div>
			<div class="modal__card">
				<div class="modal__header">
					<p>Blokowanie użytkownika </p>
					<button @click="modalRemoveIsVisible=false" class="modal__delete"></button>
				</div>

				<section class="modal__body">
					Czy na pewno chcesz zablokować tego użytkownika?
				</section>
				<div class="modal__footer">
                    <button @click="modalRemoveIsVisible=false" class="modal__btn">Anuluj</button>
					<button @click="removeUser" class="modal__btn">Zablokuj użytkownika</button>
				</div>
			</div>
		</section>

    </section>
</template>

<script>
import TableKlienci from './TableKlienci.vue';
export default {
    name: 'KlienciAdmin',
    components:{
        TableKlienci
    },
    data(){
        return{
            modalRemoveIsVisible: false,
            modalEditIsVisible: false,
            users: [],
            users2:[],
            query: '',
            userIdToDelete: 0,
            userToEdit: 0,
            
            email: '',
            firstname: '',
            lastname: '',
            location: '',
            province: '',
            phone: '',
            isCorrectEmail: true,
            isCorrectFirstname: true,
            isCorrectLastname: true,
            isCorrectLocation: true,
            isCorrectProvince: true,
            isCorrectPhone: true,
        }
    },
    mounted(){
        this.getUsers();

    },
    watch:{
        
    },
    methods:{
        showModalEdit(v){
            this.email = v.email;
            this.firstname = v.firstname;
            this.lastname = v.lastname;
            this.location = v.location;
            this.province = v.province;
            this.phone = v.phone;
            this.userIdToEdit = v.userId;
            console.log(v);
            this.modalEditIsVisible = true;
        },
        showModalRemove(v){
            this.userIdToDelete = v;
            this.modalRemoveIsVisible = true;
        },

        reset(){
            this.userIdToDelete = 0,
            this.userToEdit = 0,
            this.email = '';
            this.firstname = '';
            this.lastname = '';
            this.location = '';
            this.province = '';
            this.phone = '';
        },
        getUsers(){
            const url = `http://localhost:8080/api/admin/users`;
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    console.log("Pobrani użytkownicy:", response);
                    this.users = response;
                })
                .catch( error => console.log("Coś poszło nie tak", error));
        },
        removeUser(){
            let url = 'http://localhost:8080/api/users/'+this.userIdToDelete;
            console.log(url)

            //request
            fetch(url, {
                method: 'DELETE'
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
                alert('Konto zostało zablokowane!');
                this.modalRemoveIsVisible = false;
                this.reset();
                this.getUsers();
            })
            .catch((error) => {
                console.log('Błąd', error);
                console.log("Coś poszło nie tak z requestem: ", url);
            })
        },

        editUser(){
            console.log(this.userIdToEdit)
            let url = `http://localhost:8080/api/admin/users/${this.userIdToEdit}/personal/change`;
            let obj = {
                userId: this.userIdToEdit,
                email: this.email,
                firstname: this.firstname,
                lastname: this.lastname,
                location: this.location,
                province: this.province,
                phone: this.phone
            }

            console.log('Przesłany obiekt', obj);

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
                alert('Zmieniono dane użytkownika');
                this.modalEditIsVisible = false;
                this.reset();
                this.getUsers();
            })
            .catch((error) => {
                console.log('Błąd', error);
                alert("Coś poszło nie tak!");
            })
        },

        
        //searching in users
        searchInUsers(v){
            this.users2 = [];
            if(!v){
                console.log("empty");
                return;
            }
            
            for(let i=0; i<this.users.length; i++){
                if(this.users[i].firstname.toLowerCase().includes(v.toLowerCase())){
                    this.users2.push(this.users[i]);
                    continue;
                }

                if(this.users[i].lastname.toLowerCase().includes(v.toLowerCase())){
                    this.users2.push(this.users[i]);
                    continue;
                }

                if(this.users[i].email.toLowerCase().includes(v.toLowerCase())){
                    this.users2.push(this.users[i]);
                    continue;
                }

                if(this.users[i].location.toLowerCase().includes(v.toLowerCase())){
                    this.users2.push(this.users[i]);
                    continue;
                }

                if(this.users[i].province.toLowerCase().includes(v.toLowerCase())){
                    this.users2.push(this.users[i]);
                    continue;
                }

                if(this.users[i].phone.toLowerCase().includes(v.toLowerCase())){
                    this.users2.push(this.users[i]);
                    continue;
                }

            }
            console.log("users2:",this.users2)
        },
        validateEmail: function(v) {
            //eslint-disable-next-line
            let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

.modal{
    width: 400px;
}

.edit{
    &__card{
        width: 600px;
    }

    &__body{
        padding:30px 30px !important;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between  ;
    }
}

.modal, .edit{
	
	margin:auto;
	border-radius: 4px;

    &__background{
        position: fixed;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
        width: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    &__card{
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 50%;
        left: 50%;
        // margin: -300px -200px;
        transform: translate(-50%, -50%);
    }

    &__header{
        border-radius: 4px 4px 0 0;
        color: #fff;
        background-color: #00a141;
        width: 100%;
        padding: 0 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    p{
        display: block;
        font-weight: 700;
    }

    &__delete{
        background-color: rgba(10, 10, 10, .2);
        border: none;
        border-radius: 290486px;
        cursor: pointer;
        display: inline-block;
        height: 20px;
        width: 20px;
        outline: 0;
        position: relative;

        &::after, &::before {
            background-color: #fff;
            content: "";
            display: block;
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translateX(-50%) translateY(-50%) rotate(45deg);
            transform-origin: center center;
        }

        &::before{
            height: 2px;
            width: 50%;
        }

        &::after{
            height: 50%;
            width: 2px;
        }
    }

    &__body{
        color: #000000;
        background-color:#fff;
        width: 100%;
        height: auto;
        z-index: 50;
        padding: 30px 20px;
        line-height: 1.5;
        letter-spacing: normal;
    }

    &__footer{
        width:100%;
        height: auto;
        background-color:#f5f5f5;
        padding: 10px 50px;
        border-top:1px solid #dbdbdb;
        z-index: 50;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }

    &__btn{
        padding: 10px 15px;
        border:1px solid #dbdbdb;
        background-color: #fff;
        border-radius: 4px;
        cursor: pointer;
        &:hover{
            background-color: rgb(235, 235, 235);
        }
    }

}



.search__input{
    width:300px;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 6px 10px;
    margin: 0 0 30px;
    font-size: 15px;
    background-color: #F3F3F3;
    
    &:focus{
        outline: 1px solid #007E33;
    }
}
section{
    width:100%;
    padding: 30px;
}

.details{
    width: 100%;
}

.headers{
    background-color: rgb(231, 231, 231);
    padding: 10px 0;
    width: 100%;
    font-weight: 600;
    display: flex;
    justify-content: space-around;
    div{
        width: 14%;
        text-align: center;
        &:first-child{
            width: 5%;
        }
        margin: 2px;
        &:last-child{
            width: 11%;
        }
    }
}

.wrong-username, .wrong-email, .wrong-firstname, .wrong-lastname, .wrong-location, .wrong-phone{
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


.edit{
	margin:auto;
	border-radius: 4px;
    background-color: white;
    padding: 10px 30px;
    &__username, &__email, &__firstname, &__lastname, &__location, &__phone {
        width: 47%;
        label{
            position: relative;
            display: block;
            font-weight: 500;
            font-size: 16px;
            margin-bottom:8px;
        }

        input{
            width:100%;
            outline: none;
            border: none;
            border-radius: 4px;
            padding: 10px 10px;
            font-size: 16px;
            margin-bottom: 30px;
            background-color: #F3F3F3;
            
            &:focus{
                outline: 1px solid #007E33;
            }
        }
    }

    &__province{
        width: 47%;
        label{
            position: relative;
            display: block;
            font-weight: 500;
            font-size: 16px;
            margin-bottom:8px;
        }

        select{
            width:100%;
            outline: none;
            border: none;
            border-radius: 4px;
            padding: 10px 10px;
            margin-bottom: 30px;
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
</style>
