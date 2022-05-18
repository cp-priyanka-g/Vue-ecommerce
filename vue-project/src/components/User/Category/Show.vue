<template>
  <div>
    <Dashboard />
    <ul class="products-listing">
      <li v-for="category in allcategories" :key="category.cid">
        {{ category.category_name }} | {{ category.cid }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Dashboard from "@/components/User/Dashboard.vue";
export default {
  name: "Category",
  methods: {
    ...mapActions(["showcategory"]),
  },
  computed: {
    ...mapGetters(["allCategories"]),
  },
  components: {
    Dashboard,
  },
  mounted() {
    this.$store.dispatch("showcategory");
  },
};
</script>
