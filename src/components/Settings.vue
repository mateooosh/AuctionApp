<template>
    <div class="settings">
        <h1>Ustawienia</h1>
        <div>
            <div class="settings__acc-details">
                <div @click="toggleContentIsVisible" class="settings__title">
                    <div>
                        Zmień dane kontaktowe
                    </div>
                    <!-- <img :class="{'rotate-180-deg': contentIsVisible}" class="settings__img" src="../assets/icons/arrow.svg" height=30 alt=""> -->
                    <i :class="{'rotate-180-deg': contentIsVisible}"  class="fas fa-chevron-down fa-lg"></i>
                </div>
                <div v-if="contentIsVisible" class="settings__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
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
          contentIsVisible: false,
      }
  },
  methods:{
    getLogged(){
      return this.$store.state.logged;
    },

    toggleContentIsVisible(){
        this.contentIsVisible = !this.contentIsVisible;
    },

  }
}
</script>

<style scoped lang="scss">

.rotate-180-deg{
    transform: rotate(180deg);
}

.settings{
    

    &__title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(202, 202, 202);
        padding: 16px 20px;
        cursor: pointer;

        i{
            transition: .4s;
            // transform: rotate(90deg);
        }
    }



    &__content{
        background-color: oldlace;
        padding: 30px 20px;
    }
}
</style>
