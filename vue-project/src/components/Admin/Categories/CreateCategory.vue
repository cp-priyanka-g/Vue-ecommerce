<template>
  <div class="row">
    <div class="col-md-6 offset-3">
      <form
        @submit.prevent="onSubmit"
        class="card mt-5 p-3 border border-dark bg-dark shadow-lg"
      >
        <div class="form-group">
          <label class="text-light">Category Name</label>
          <input
            v-model="category.name"
            type="text"
            class="bg-dark border border-info text-info form-control"
            placeholder="Enter category name"
          />
        </div>
        <div class="form-group">
          <label class="text-light">Product ID</label>
          <input
            v-model="category.pid"
            type="text"
            class="bg-dark border border-info text-info form-control"
            placeholder="Enter Product id"
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
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      category: {
        name: "",
        pid: "",
      },
    };
  },
  methods: {
    ...mapActions(["addCategory"]),
    onSubmit() {
      this.addCategory({
        category_name: this.name,
        pid: this.pid,
      });
    },
  },
};
</script>
