<template>
  <div class="col-md-6 offset-3">
    <div>
      <Dashboard />
      <form
        @submit.prevent="onSubmit"
        class="card mt-5 p-3 border border-dark bg-dark shadow-lg"
      >
        <div class="form-group">
          <label class="text-light">Product Name</label>
          <input
            v-model="product_name"
            type="text"
            class="bg-dark border border-info text-info form-control"
            placeholder="Enter product name"
          />
        </div>
        <div class="form-group">
          <label class="text-light">Product Description</label>
          <input
            v-model="Description"
            type="text"
            class="bg-dark border border-info text-info form-control"
            placeholder="Enter Product Description"
          />
        </div>
        <div class="form-group">
          <label class="text-light">Product Price</label>
          <input
            v-model="price"
            type="text"
            class="bg-dark border border-info text-info form-control"
            placeholder="Enter Price"
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
  name: "AddProduct",
  data() {
    return {
      product: {
        product_name: "",
        Description: "",
        price: "",
      },
    };
  },
  methods: {
    ...mapActions(["addproduct"]),
    onSubmit() {
      this.addproduct({
        product_name: this.product_name,
        Description: this.Description,
        price: this.price,
      });
      this.$store.dispatch("addproduct");
      router.push("/admin-dashboard");
    },
  },
  components: {
    Dashboard,
  },
};
</script>
