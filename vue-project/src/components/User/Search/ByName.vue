<template>
  <div>
    <Dashboard />
    <form @submit.prevent="onSubmit" method="get">
      <div class="container">
        <h1>Search product by name</h1>
        <div class="form-group">
          <div>
            <input
              type="text"
              class="form-control"
              v-model="product_name"
              placeholder="Product name"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary mb-2 mt-5">Search</button>
      </div>
    </form>

    <table border="1" v-if="product_name != null">
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>

      <tr>
        <td>v-for="product in allProducts"> {{ product.product_name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.Description }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Dashboard from "@/components/User/Dashboard.vue";

export default {
  name: "SearchByName",
  data() {
    return {
      product: {
        product_name: "",
        price: "",
        Description: "",
      },
    };
  },
  components: {
    Dashboard,
  },
  methods: {
    ...mapActions(["searchbyname"]),
    onSubmit() {
      this.searchbyname({
        product_name: this.product.product_name,
      });
    },
  },
  computed: mapGetters(["allProducts"]),
  components: {
    Dashboard,
  },
  created() {
    this.$store.dispatch("searchbyname", this.product.product_name);
  },
};
</script>
