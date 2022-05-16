<template>
  <div>
    <Dashboard />
    <form @submit.prevent="onSubmit" method="get">
      <div class="container">
        <h1>Search product by Price</h1>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="product_price"
            placeholder="Product Price"
          />
        </div>

        <button type="submit" class="btn btn-primary mb-2 mt-5">Search</button>
      </div>
    </form>
    <table border="1" v-if="product_price != null">
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

import Dashboard from "../../User/Dashboard.vue";

export default {
  name: "SearchByPrice",
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
    ...mapActions(["searchbyprice"]),
    onSubmit() {
      this.searchbyprice({
        price: this.product.product_price,
      });
    },
  },
  computed: mapGetters(["allProducts"]),
  components: {
    Dashboard,
  },
  created() {
    this.$store.dispatch("searchbyname", this.product.product_price);
  },
};
</script>
