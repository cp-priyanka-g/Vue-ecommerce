<template>
  <div>
    <Dashboard />
    <ul class="products-listing">
      <li v-for="favourite in getfavourite" :key="favourite.pid">
        {{ favourite.pid }}

        <button @click="deleteproduct(product.pid)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Dashboard from "../Dashboard.vue";
export default {
  name: "",

  methods: {
    ...mapActions(["deletefavourite", "getfavourite"]),
  },
  components: {
    Dashboard,
  },
  computed: mapGetters(["allfavourite"]),
  mounted() {
    this.$store.dispatch("deletefavourite");
  },
  created() {
    this.$store.dispatch("getfavourite");
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
