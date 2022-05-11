<template>
  <div class="row">
    <div>
      <Dashboard />
      <div class="col-md-6 offset-3">
        <form
          @submit.prevent="onSubmit"
          class="card mt-5 p-3 border border-dark bg-dark shadow-lg"
        >
          <div class="form-group">
            <label class="text-light">SubCategory Name</label>
            <input
              v-model="subcategory.name"
              type="text"
              class="bg-dark border border-info text-info form-control"
              placeholder="Enter Subcategory name"
            />
          </div>
          <div class="form-group">
            <label class="text-light">Product ID</label>
            <input
              v-model="subcategory.pid"
              type="text"
              class="bg-dark border border-info text-info form-control"
              placeholder="Enter Product id"
            />
          </div>
          <div class="form-group">
            <label class="text-light">Category ID</label>
            <input
              v-model="subcategory.cid"
              type="text"
              class="bg-dark border border-info text-info form-control"
              placeholder="Enter Category id"
            />
          </div>
          <div class="button-container">
            <router-link to="/" tag="button" class="btn btn-outline-danger">
              Cancel
            </router-link>
            <button type="submit" class="btn btn-outline-success">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Dashboard from "../Dashboard.vue";
export default {
  data() {
    return {
      subcategory: {
        name: "",
        pid: "",
        cid: "",
      },
    };
  },
  components: {
    Dashboard,
  },
  methods: {
    ...mapActions(["addsubcategory"]),
    onSubmit() {
      this.addsubcategory({
        name: this.name,
        pid: this.pid,
        cid: this.cid,
      });
    },
  },
  created() {
    this.$store.dispatch("addsubcategory", this.subcategory);
  },
};
</script>
