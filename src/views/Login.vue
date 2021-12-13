<template>
  <div class="zaloguj">
    <Navbar/>
    <LoginForm/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import LoginForm from '@/components/LoginForm.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Login',
  components: {
    Navbar,
    LoginForm,
    Footer
  },
  mounted() {
    if (this.$store.state.logged) {
      this.$router.push("/");
    } else {
      document.title = "Logowanie - wdmj.pl";
      window.scrollTo(0, 0);
    }
  }
}
</script>
