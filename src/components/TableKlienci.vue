<template>
    <section :class="{'even': i%2 == 1}" class="table">
        <div>{{user.userId}}</div>
        <div>{{user.firstname}}</div>
        <div>{{user.lastname}}</div>
        <div>{{user.email}}</div>
        <div>{{user.location}}</div>
        <div>{{user.province}}</div>
        <div>{{user.phone}}</div>
        <div v-if="user.active">
            <i @click="$emit('remove', user.userId)" class="fas fa-lock fa-lg" style="margin: 0 5px"></i>
            
            <i @click="$emit('edit', user)" class="fas fa-user-edit fa-lg" style="margin: 0 5px"></i>
        </div>
        <div v-if="!user.active">
            Zablokowany
        </div>
        
    </section>
</template>

<script>

export default {
    name: 'TableKlienci',
    props:{
        i: Number,
        user: Object
    },
    methods:{
    },
    mounted(){
        console.log(this.user);
    }
}
</script>

<style lang="scss" scoped>



.table{
    width: 100%;
    display: flex;
    justify-content: space-around;
    // margin: 5px 10px;
    box-sizing: border-box;
    // margin: 10px 0;
    padding: 14px 0;
    background-color: rgb(250, 250, 250);

    &:hover{
        background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03));
    }

    div{
        width: 14%;
        // border: 1px solid black;
        text-align: center;
        margin: 2px;
        &:first-child{
            width: 5%;
        }
        &:last-child{
            width: 11%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &>i{
            cursor: pointer;
        }
    }
}

.even{
    background-color: rgb(231, 231, 231) !important;
}


</style>