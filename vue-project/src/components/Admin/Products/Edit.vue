<template>
  <div class="col-md-6 offset-3">
    <div>
      <Dashboard />
      <form
        @submit.prevent="onSubmit"
        class="card mt-5 p-3 border border-dark bg-dark shadow-lg"
      >
        <div v-for="product in editproduct" :key="product.pid">
          <div class="form-group">
            <label class="text-light">Product Name</label>
            <input
              type="text"
              class="bg-dark border border-info text-info form-control"
              placeholder="Enter product name"
            />{{ product.product_name }}
          </div>
          <div class="form-group">
            <label class="text-light">Product Description</label>
            <input
              type="text"
              class="bg-dark border border-info text-info form-control"
              placeholder="Enter Product Description"
            />{{ product.Description }}
          </div>
          <div class="form-group">
            <label class="text-light">Product Price</label>
            <input
              type="text"
              class="bg-dark border border-info text-info form-control"
              placeholder="Enter Price"
            />{{ product.price }}
          </div>

          <div class="button-container">
            <router-link to="/" tag="button" class="btn btn-outline-danger">
              Cancel
            </router-link>
            <button
              type="submit"
              value="submit"
              class="btn btn-outline-success"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Dashboard from "../Dashboard.vue";
import router from "@/router.js";
export default {
  name: "AddProduct",

  data() {
    this.pid = this.$route.params.pid;
    return {
      product: {
        product_name: "",
        Description: "",
        price: "",
      },
    };
  },
  computed: {
    ...mapGetters(["editproduct", "productItemById"]),
  },
  methods: {
    ...mapActions(["updateproduct"]),
    onSubmit() {
      this.pid = this.$route.params.pid;
      this.updateproduct({
        pid: this.pid,
        product_name: this.product_name,
        Description: this.Description,
        price: this.price,
      });

      this.$store.dispatch("updateproduct");
      router.push("/admin-dashboard");
    },
    catch(err) {
      console.log(err);
    },
  },
  components: {
    Dashboard,
  },
  created() {
    this.$store.dispatch("editproducts", this.pid);
  },
};
</script>
