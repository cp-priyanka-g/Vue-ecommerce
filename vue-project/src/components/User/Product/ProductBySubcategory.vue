<template>
  <div>
    <Dashboard />
    <ul class="products-listing">
      <li v-for="product in allProducts" :key="product.pid">
        {{ product.product_name }} | {{ product.price | currency }} |
        {{ product.Description }} | {{ product.name }} |{{ product.cid }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Dashboard from "@/components/User/Dashboard.vue";
export default {
  name: "Products",
  methods: {
    ...mapActions(["showproductbysubcategory"]),
  },
  components: {
    Dashboard,
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.$store.dispatch("showproductbysubcategory");
    this.getproduct();
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
