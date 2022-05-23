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
            v-model="price1"
            placeholder="Product Price1"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="price2"
            placeholder="Product Price2"
          />
        </div>

        <button type="submit" class="btn btn-primary mb-2 mt-5">Search</button>
      </div>
    </form>
    <ul class="products-listing" v-if="price1 && price2 != null">
      <li v-for="product in allProducts" :key="product.pid">
        {{ product.product_name }} | {{ product.price | currency }} |
        {{ product.Description }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import Dashboard from "../../User/Dashboard.vue";

export default {
  name: "SearchByPrice",
  data() {
    return {
      price1: "",
      price2: "",
      product_name: "",
      price: "",
      Description: "",
    };
  },
  components: {
    Dashboard,
  },

  methods: {
    ...mapActions(["searchbyprice"]),
    onSubmit() {
      this.searchbyprice({
        price: {
          price1: this.price1,
          price2: this.price2,
        },
      });
      this.$store.dispatch("searchbyprice", this.price);
    },
  },
  computed: mapGetters(["allProducts"]),
};
</script>
