<template>
  <div class="zarejestruj">
    <Navbar/>
    <RegisterForm/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Register',
  components: {
    Navbar,
    RegisterForm,
    Footer
  },
  mounted() {
    document.title = "Rejestracja - wdmj.pl";
    window.scrollTo(0, 0);
  }
}
</script>
