<template>
    <section class="menu">
        <div class="menu__header">
            Panel Administratora
        </div>
        <div>
            <div @click="$router.push('/admin')"  :class="{'active': active=='klienci'}" class="menu__option">Klienci</div>
            <div @click="$router.push('/admin/aukcje')" :class="{'active': active=='aukcje'}" class="menu__option">Aukcje</div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'DashboardNav',
  props:{
     active: String   
  },
  methods:{
        
  },
  mounted(){
       
  }
}
</script>

<style scoped lang="scss">
.active{
    background-color: #00a141;
}
.menu{
    position: sticky;
    top:0;

    width:100%;
    // background-color:rgb(39, 39, 39);
    height: 100vh;
    background-image:linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('../assets/pricing.jpg');
    background-position: 50% 70%;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px 30px;
    &__header{
        color: white;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 30px;
        // text-align: center;
        padding:0 0 20px 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.452);
    }

    &__option{
        padding: 10px 10px;
        margin-top: 15px;
        color: white;
        // background-color: red;
        border-radius: 6px;
        transition: all .2s;
        &:hover{
            background-color: #00a141;
            cursor: pointer;
        }
    }
    
}
</style>
