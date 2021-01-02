<template>
    <div class="favorite">
        <h1>Twoje obserwowane aukcje</h1>
        I tu będą karty takie same jak w najnowszych
        
    </div>
</template>

<script>
import { createStore } from 'vuex';
// import Card from './Card.vue';

export default {
    name: 'Favorite',
    store: createStore,
    components:{
        // Card
    },
    data(){
        return{
            
        }
    },

    mounted(){

        
    },
        
}
</script>

<style scoped lang="scss">
.favorite{
    width: 900px;
    margin: 100px auto;
}
</style>
