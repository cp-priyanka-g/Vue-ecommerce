<template>
  <div>
    <Dashboard />
    <ul class="products-listing">
      <li v-for="product in allProducts" :key="product.pid">
        {{ product.product_name }} | {{ product.price | currency }} |
        {{ product.Description }}
        <button @click.prevent="deleteproduct(product.pid)">❌</button>
        <button @click.prevent="editproduct(product.pid)">Update</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Dashboard from "../Dashboard.vue";

import router from "@/router.js";
export default {
  name: "Products",
  filters: {
    currency: function (value) {
      return "₹ " + parseFloat(value).toFixed(2);
    },
  },
  components: {
    Dashboard,
  },
  methods: {
    ...mapActions(["getproduct", "deleteproduct"]),
    editproduct(pid) {
      router.push("/product-update/" + pid);
    },
  },
  computed: {
    ...mapState(["products"]),
    ...mapGetters(["allProducts"]),
  },
  mounted() {
    this.$store.dispatch("getproduct");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products-listing li {
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.products-listing li button {
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  cursor: pointer;
}
</style>
