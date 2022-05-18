<template>
  <div>
    <Dashboard />
    <ul class="products-listing">
      <li v-for="category in allCategories" :key="category.cid">
        {{ category.category_name }} | {{ category.cid }}
        <button @click="deletecategory(category.cid)">❌</button>
        <button @click="updatecategory(category.cid)">Update</button>
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
    ...mapActions(["getcategory", "deletecategory", "updatecategory"]),
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
