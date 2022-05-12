<template>
  <div>
    <Dashboard />
    <ul class="products-listing">
      <li v-for="subcategory in getsubcategory" :key="subcategory.sid">
        {{ subcategory.name }} | {{ subcategory.sid }} | {{ subcategory.cid }}|
        {{ subcategory.pid }}
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
    ...mapActions(["showsubcategory"]),
  },
  computed: mapGetters(["getsubcategory"]),
  components: {
    Dashboard,
  },
  created() {
    this.$store.dispatch("showsubcategory");
  },
};
</script>
