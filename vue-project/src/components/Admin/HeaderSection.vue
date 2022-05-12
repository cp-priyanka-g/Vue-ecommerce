<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="/admin-dashboard"
              >Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" href="/product-list">Product</a>
          </li>
          <li>
            <a class="nav-link active" href="/product-add">Add Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/category-list">Category</a>
          </li>
          <li>
            <a class="nav-link active" href="/category-add">Add Category</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/subcategory-list">Sub-Category</a>
          </li>
          <li>
            <a class="nav-link active" href="subcategory-add"
              >Add Subcategory</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout">LogOut</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Main -->
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["logout"]),
  },

  created() {
    this.$store.dispatch("logout");
  },
};
</script>
