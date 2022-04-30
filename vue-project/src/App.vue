<template>
  <div id="app">
    <SignupForm msg="Sign Up Form" />
    <Login />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import SignupForm from './components/SignUp.vue'
import Login from './components/Login.vue'
export default {
  name: 'App',
  components: {
    HeaderSection,
    SignupForm,
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background: #eee;
}
</style>
