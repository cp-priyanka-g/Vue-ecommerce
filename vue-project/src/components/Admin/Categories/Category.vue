<template>
  <ul class="products-listing">
    <li v-for="category in getCategories" :key="category.cid">
      {{ category.category_name }} | {{ category.cid }}
      <button @click="deleteCategory(category.cid)">❌</button>
      <button @click="updateCategory(category.cid)">Update</button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Category",

  methods: {
    ...mapActions(["getCategories", "deleteCategory", "updateCategory"]),
  },
  computed: mapGetters(["allCategories"]),
  created() {
    this.getCategories();
  },
};
</script>
