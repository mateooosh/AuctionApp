<template>
    <div class="settings">
        <h1>Ustawienia</h1>
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
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
            <div  class="settings__content">
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
      }
  },
  methods:{
    getLogged(){
      return this.$store.state.logged;
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
  }
}
</script>

<style scoped lang="scss">

.rotate-180-deg{
    transform: rotate(180deg);
}

.settings{
    width: 900px;
    margin: auto;

    &__option, &__title{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    &__option{
        margin-bottom: 20px;
    }

    &__title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(211, 211, 211);
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
        background-color: rgb(246, 246, 246);
        transition: max-height 0.4s ease-out;
        max-height: 0;
        overflow: hidden;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        div{
            padding: 20px 20px;
        }
    }
}
</style>
