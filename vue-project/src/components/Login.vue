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
        <div v-if="error">
          {{ error }}
        </div>
        <div v-if="success" id="success">Logged in Successfully</div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      error: null,
      success: false,
    };
  },
  methods: {
    login: async function () {
      const auth = { username: this.username, password: this.password };
      // Correct username is 'foo' and password is 'bar'
      const url = "https://localhost:3000/login";
      this.success = false;
      this.error = null;

      try {
        const res = await axios.get(url, { auth }).then((res) => res.data);
        this.success = true;
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>
<style scoped>
.con-display {
  margin: auto;
  width: 29%;
}
</style>
