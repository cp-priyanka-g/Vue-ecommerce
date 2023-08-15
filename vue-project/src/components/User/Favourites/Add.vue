<template>
  <div class="col-md-6 offset-3">
    <div>
      <Dashboard />
      <form
        @submit.prevent="onSubmit"
        class="card mt-5 p-3 border border-dark bg-dark shadow-lg"
      >
        <div class="form-group">
          <label class="text-light">Product ID</label>
          <input
            v-model="pid"
            type="text"
            class="bg-dark border border-info text-info form-control"
            placeholder="Enter product ID"
          />
        </div>
        <div class="button-container">
          <router-link to="/" tag="button" class="btn btn-outline-danger">
            Cancel
          </router-link>
          <button type="submit" value="submit" class="btn btn-outline-success">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Dashboard from "../Dashboard.vue";
import router from "@/router.js";
export default {
  name: "AddFavourite",
  data() {
    return {
      pid: "",
      id: 2,
    };
  },
  components: {
    Dashboard,
  },
  methods: {
    ...mapActions(["addfavourite"]),
    onSubmit() {
      this.addfavourite({
        pid: this.pid,
        id: this.id,
      });
      this.$store.dispatch("addfavourite");
      router.push("/user-dashboard");
    },
  },
};
</script>
