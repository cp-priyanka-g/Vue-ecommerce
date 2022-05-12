<template>
  <div>
    <div class="container" style="padding-top: 10%">
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left login-form-container">
          <div class="d-flex justify-content-center">
            <img
              src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
              width="150"
              alt=""
            />
          </div>
          <div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button
              @click="getUser()"
              type="submit"
              class="btn btn-primary btn-block mt-5"
            >
              Login
            </button>
            <p class="forgot-password text-right mt-2">
              Not registered yet ?
              <router-link class="nav-link pr-3" to="/register"
                >Sign in</router-link
              >
            </p>
          </div>
        </div>
      </div>
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
    };
  },
  methods: {
    ...mapActions(["getUser"]),
  },
  computed: mapGetters(["getUsers"]),
  created() {
    this.$store.dispatch("getUser");
    this.$session.start();
    // router.push("/admin-dashboard"), this.getUser();
  },
};
</script>

<style></style>
