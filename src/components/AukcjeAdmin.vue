<template>
    <section>
        <h1>Aukcje</h1>
        <input class="search__input" @keyup="searchInAuctions(query)" type="text" v-model="query" placeholder="Szukaj">
        <div class="details">
            <section class="headers">
                <div>ID Aukcji</div>
                <div>Tytuł</div>
                <div>Kategoria</div>
                <div>Rozpoczęcie</div>
                <div>Zakończenie</div>
                <div>E-mail sprzedającego</div>
                <div>Stan aukcji</div>
                <div>Akcje</div>
            </section>
            
            <div v-if="query.length <1">
                <div v-for="(auction, i) in auctions" :key="auction">
                    <TableAukcje @end="showModal" @start="showModal2"  :auction="auction" :i="i"/>
                </div>
            </div>

            <div v-if="query.length > 0">
                <div v-for="(auction, i) in auctions2" :key="auction">
                    <TableAukcje @end="showModal" @start="showModal2" :auction="auction" :i="i"/>
                </div>
            </div>
        </div>

         <section class="modal" v-if="modalIsVisible">
			<div class="modal__background"></div>
			<div class="modal__card">
				<div class="modal__header">
					<p>{{modalTitle}}</p>
					<button @click="modalIsVisible=false" class="modal__delete"></button>
				</div>

				<section class="modal__body">
					{{modalBody}}
				</section>
				<div class="modal__footer">
                    <button @click="modalIsVisible=false" class="modal__btn">Anuluj</button>
					<button v-if="auctionStatus == 'w trakcie'" @click="end" class="modal__btn">{{modalBtn}}</button>
					<button v-if="auctionStatus == 'zakończona'" @click="start" class="modal__btn">{{modalBtn}}</button>
				</div>
			</div>
		</section>

       

    </section>
</template>

<script>
import TableAukcje from './TableAukcje.vue';
export default {
    name: 'AukcjeAdmin',
    components:{
        TableAukcje
    },
    data(){
        return{
            auctions: [],
            auctions2: [],
            auctionToDo: 0,
            auctionStatus: '',
            query: '',
            modalIsVisible: false,
            modalTitle: 'Zakończenie aukcji',
            modalBody: 'Czy na pewno chcesz zakończyć aukcję?',
            modalBtn: 'Zakończ aukcję',

        }
    },
    mounted(){
        const url = `http://localhost:8080/api/admin/auctions`;
        fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                for(let i=0; i<response.length; i++){
                    response[i].startDate = response[i].startDate.substr(0,10);
                    response[i].endDate = response[i].endDate.substr(0,10);
                }
                this.auctions = response;
            })
            .catch(error => console.error("Coś poszło nie tak", error))

    },
    watch:{
        
    },
    methods:{
        showModal(id, status){
            if(status === "w trakcie"){     
                this.modalTitle = 'Zakończenie aukcji';
                this.modalBody = 'Czy na pewno chcesz zakończyć aukcję?';
                this.modalBtn = 'Zakończ aukcję';
                this.modalIsVisible = true;
                this.auctionToDo = id;
                this.auctionStatus = status;
            } 
        },
        showModal2(id, status){
            if(status === "zakończona"){
                this.modalTitle = 'Wznowienie aukcji';
                this.modalBody = 'Czy na pewno chcesz wznowić aukcję?';
                this.modalBtn = 'Wznów aukcję';
                this.modalIsVisible = true;
                this.auctionToDo = id;
                this.auctionStatus = status;
            }
        },


        end(){
            if(this.auctionStatus === "w trakcie"){
                //url
                const url = `http://localhost:8080/api/admin/auctions/${this.auctionToDo}/end`;
                //request
                fetch(url, {
                    method: 'POST',
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
                        this.modalIsVisible = false;
                        alert("Aukcja została zakończona");
                        
                    })
                    .catch((error) => {
                        console.log('Błąd', error);
                        this.modalIsVisible = false;
                        alert("Nie udało się zakończyć aukcji!");
                    })
            }
        },

        start(){
            if(this.auctionStatus === "zakończona"){
                //url
                const url = `http://localhost:8080/api/admin/auctions/${this.auctionToDo}/start`;
                //request
                fetch(url, {
                    method: 'POST',
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
                        alert("Aukcja została wznowiona");
                        this.modalIsVisible = false;
                        
                    })
                    .catch((error) => {
                        console.log('Błąd', error);
                        this.modalIsVisible = false;
                        alert("Nie udało się wznowić aukcji!");
                    })
            }
            
            
        },
        searchInAuctions(v){
            this.auctions2 = [];
            if(!v){
                console.log("empty");
                return;
            }
            
            for(let i=0; i<this.auctions.length; i++){
                if(this.auctions[i].auctionName.toLowerCase().includes(v.toLowerCase())){
                    this.auctions2.push(this.auctions[i]);
                    continue;
                }

                if(this.auctions[i].category.toLowerCase().includes(v.toLowerCase())){
                    this.auctions2.push(this.auctions[i]);
                    continue;
                }

                if(this.auctions[i].startDate.toLowerCase().includes(v.toLowerCase())){
                    this.auctions2.push(this.auctions[i]);
                    continue;
                }

                if(this.auctions[i].endDate.toLowerCase().includes(v.toLowerCase())){
                    this.auctions2.push(this.auctions[i]);
                    continue;
                }

                if(this.auctions[i].email.toLowerCase().includes(v.toLowerCase())){
                    this.auctions2.push(this.auctions[i]);
                    continue;
                }

                if(this.auctions[i].auctionStatus.toLowerCase().includes(v.toLowerCase())){
                    this.auctions2.push(this.auctions[i]);
                    continue;
                }

                if(this.auctions[i].auctionId.toString().includes(v.toLowerCase())){
                    this.auctions2.push(this.auctions[i]);
                    continue;
                }

            }
            console.log("auctions2:",this.auctions2)
        },
    }
}
</script>

<style scoped lang="scss">
section{
    width:100%;
    padding: 30px;
}


.headers{
    background-color: rgb(231, 231, 231);
    padding: 10px 0;
    width: 100%;
    font-weight: 600;
    display: flex;
    justify-content: space-around;
    div{
        width: 12.5%;
        text-align: center;
        &:first-child{
            width: 60px;
        }
        margin: 2px;
        &:last-child{
            width: 100px;
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



.modal{
	width: 400px;
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
</style>
