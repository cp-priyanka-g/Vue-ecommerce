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
            v-model="product.pid"
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
export default {
  name: "Add",
  data() {
    return {
      product: {
        pid: "",
      },
    };
  },
  components: {
    Dashboard,
  },
  methods: {
    ...mapActions(["addfavourite"]),
    onSubmit() {
      this.addfavourite({
        pid: this.product.pid,
      });
    },
  },

  created() {
    this.$store.dispatch("addfavourite", this.product);
  },
};
</script>
