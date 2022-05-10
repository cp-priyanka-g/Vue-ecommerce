<template>
  <div class="container">
    <Dashboard />

    <ul class="products-listing">
      <li v-for="subcategory in getsubcategory" :key="subcategory.sid">
        {{ subcategory.name }} | {{ subcategory.pid }} | {{ subcategory.cid }}
        <button @click="deletesubcategory(subcategory.sid)">❌</button>
        <button @click="updatesubcategory(subcategory.sid)">Update</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Dashboard from "../Dashboard.vue";

export default {
  name: "Subcategory",

  methods: {
    ...mapActions(["getsubcategory", "deletesubcategory", "updatesubcategory"]),
  },
  components: {
    Dashboard,
  },
  computed: mapGetters(["allsubcategory"]),
  created() {
    this.getsubcategory();
  },
};
</script>
