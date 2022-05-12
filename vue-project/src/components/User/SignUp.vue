<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <label>Name:</label>
      <input type="text" required v-model="username" />

      <label>Email :</label>
      <input type="email" required v-model="email" />

      <label>Password :</label>
      <input type="password" required v-model="password" />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <div class="button mt-5">
        <button class="submit" @click="register()" type="submit">
          Sign up here
        </button>
      </div>
      <p class="forgot-password text-right mt-2">
        Already registered
        <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
      </p>
    </form>
    <ul v-if="errors && errors.length">
      <li v-for="error in errors" :key="error.message">
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import router from "@/router.js";
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState("users", ["users"]),
    ...mapGetters("users", ["getUser"]),
  },

  methods: {
    ...mapActions(["userregister"]),

    handleSubmit() {
      //Validate password field length
      this.passwordError =
        this.password.length > 6
          ? ""
          : "Password should be more than 6 characters long!";

      if (!this.passwordError) {
        console.log(this.username);
        console.log(this.email);
        console.log(this.password);
      }
    },
    userregister() {
      this.userregister({
        name: this.username,
        email: this.email,
        password: this.password,
      });
    },
  },
  created() {
    this.$store.dispatch("userregister", this.userregister);
    router.push("/user-dashboard");
  },
};
</script>
<style scoped>
form {
  max-width: 600px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: bordre-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  background: #eee;
}

button {
  background: rgb(7, 24, 7);
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0000;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
