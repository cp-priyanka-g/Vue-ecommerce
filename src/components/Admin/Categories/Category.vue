<template>
  <div>
    <Dashboard />
    <ul class="products-listing">
      <li v-for="category in allCategories" :key="category.cid">
        {{ category.category_name }} | {{ category.cid }}
        <button @click="deletecategory(category.cid)">❌</button>
        <button @click="editcategory(category.cid)">Update</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Dashboard from "../Dashboard.vue";
import router from "@/router.js";
export default {
  name: "Category",

  methods: {
    ...mapActions(["getcategory", "deletecategory", "updatecategory"]),
    editcategory(cid) {
      router.push("/category-update/" + cid);
    },
  },
  computed: mapGetters(["allCategories"]),
  components: {
    Dashboard,
  },
  created() {
    this.$store.dispatch("getcategory");
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
