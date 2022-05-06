<template>
  <div class="container">
    <div class="con-display">
      <form>
        <h3>Sign In</h3>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" v-model="email" class="form-control" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" class="form-control" />
        </div>
        <button
          type="submit"
          @click="loginAction"
          class="btn btn-dark btn-lg btn-block mt-5"
        >
          Sign In
        </button>
        <p class="forgot-password text-right mt-5">Not registered ?</p>
        <li class="nav-item mt-1">
          <router-link class="btn btn-outline-primary" to="/register">
            Sign up</router-link
          >
        </li>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  name: "Login",

  methods: {
    ...mapActions(["getUsers"]),
  },
  computed: mapGetters(["getUsers"]),
  // created() {
  //   this.getUsers();
  // },
};
</script>
<style scoped>
.con-display {
  margin: auto;
  width: 29%;
}
</style>
