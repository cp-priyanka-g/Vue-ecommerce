<template>
  <div>
    <Dashboard />

    <ul class="products-listing">
      <li v-for="subcategory in getsubcategory" :key="subcategory.sid">
        {{ subcategory.name }} | {{ subcategory.pid }} | {{ subcategory.cid }}
        <button @click="deletesubcategory(subcategory.sid)">❌</button>
        <button @click="editsubcategory(subcategory.sid)">Update</button>
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
    editsubcategory(sid) {
      router.push("/subcategory-update/" + sid);
    },
  },
  components: {
    Dashboard,
  },
  computed: mapGetters(["getsubcategory"]),
  created() {
    this.$store.dispatch("getsubcategory");
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
