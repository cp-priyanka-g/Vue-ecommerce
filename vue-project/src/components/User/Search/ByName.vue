<template>
  <div>
    <form @submit.prevent="onSubmit" method="get">
      <div class="form-row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            v-model="product_name"
            placeholder="Product name"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary mb-2">Search</button>
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
      product_name: "",
    };
  },
  methods: {
    ...mapActions(["searchbyname"]),
    onSubmit() {
      this.searchbyname({
        product_name: this.product_name,
      });
    },
  },
  computed: mapGetters(["allProducts"]),
  components: {
    Dashboard,
  },
  created() {
    this.$store.dispatch("searchbyname", this.product_name);
  },
};
</script>
