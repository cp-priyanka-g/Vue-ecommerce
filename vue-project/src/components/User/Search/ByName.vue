<template>
  <div>
    <Dashboard />
    <form @submit.prevent="onSubmit()" method="get">
      <div class="container">
        <h1>Search product by name</h1>
        <div class="form-group">
          <div>
            <input
              v-model="product_name"
              type="text"
              class="form-control"
              placeholder="Product name"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary mb-2 mt-5">Search</button>
      </div>
    </form>

    <ul class="products-listing" v-if="product_name != null">
      <li v-for="product in allProducts" :key="product.pid">
        {{ product.product_name }} | {{ product.price | currency }} |
        {{ product.Description }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Dashboard from "@/components/User/Dashboard.vue";

export default {
  name: "SearchByName",
  data() {
    return {
      product_name: "",
    };
  },
  components: {
    Dashboard,
  },
  methods: {
    ...mapActions(["searchbyname"]),
    onSubmit() {
      this.searchbyname({
        product_name: this.product_name,
      });
      this.$store.dispatch("searchbyname", this.product_name);
    },
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
};
</script>
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
