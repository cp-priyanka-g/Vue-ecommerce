<template>
  <div>
    <Dashboard />
    <ul class="products-listing">
      <li v-for="product in allProducts" :key="product.pid">
        {{ product.product_name }} | {{ product.price | currency }} |
        {{ product.Description }} |{{ product.category_name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Dashboard from "../Dashboard.vue";
export default {
  name: "Category",

  methods: {
    ...mapActions([
      "showproductbycategory",
      "deletecategory",
      "updatecategory",
    ]),
  },
  computed: mapGetters(["allProducts"]),
  components: {
    Dashboard,
  },
  created() {
    this.$store.dispatch("showproductbycategory");
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
