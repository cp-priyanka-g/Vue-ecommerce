<template>
  <div>
    <Dashboard />
    <div class="row">
      <div class="col-md-6 offset-3">
        <form
          @submit.prevent="onSubmit"
          class="card mt-5 p-3 border border-dark bg-dark shadow-lg"
        >
          <div v-for="category in editcategory" :key="category.cid">
            <div class="form-group">
              <label class="text-light">Category Name</label>
              <input
                v-model="category_name"
                type="text"
                class="bg-dark border border-info text-info form-control"
                placeholder="Enter category name"
              />{{ category.category_name }}
            </div>
            <div class="form-group">
              <label class="text-light">Product ID</label>
              <input
                v-model="pid"
                type="text"
                class="bg-dark border border-info text-info form-control"
                placeholder="Enter Product id"
              />{{ category.pid }}
            </div>
            <div class="button-container">
              <router-link to="/" tag="button" class="btn btn-outline-danger">
                Cancel
              </router-link>
              <button type="submit" class="btn btn-outline-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Dashboard from "../Dashboard.vue";
import router from "@/router.js";
export default {
  data() {
    return {
      category_name: "",
      pid: "",
    };
  },
  computed: {
    ...mapGetters(["editcategory", "categoryItemById"]),
  },
  methods: {
    ...mapActions(["addcategory"]),
    onSubmit() {
      this.addcategory({
        category_name: this.category_name,
        pid: this.pid,
      });
      this.$store.dispatch("addcategory");
      router.push("/admin-dashboard");
    },
  },
  components: {
    Dashboard,
  },
  created() {
    this.$store.dispatch("editcategory", this.cid);
  },
};
</script>
