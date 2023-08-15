<template>
  <div class="navbar">
    <a href="/user-dashboard">Home</a>
    <div>
      <div>
        <a href="/show-product">Product</a>
        <a href="/show-category">Category</a>
        <a href="/show-subcategory">SubCategory</a>
      </div>
    </div>
    <div>
      <a class="nav-link" href="/add-favourite">AddFavourite</a>
    </div>
    <div>
      <a class="nav-link" href="/show-favourite">Wishlist</a>
    </div>
    <div>
      <a class="nav-link" href="/send-mail">Email</a>
    </div>
    <a class="nav-link" href="/search-category">By category</a>
    <a class="nav-link" href="/search-subcategory">By Subcategory</a>
    <a class="nav-link" href="/search-by-price">Search By Price</a>
    <a class="nav-link" href="/search-by-name">Search By name</a>
    <a class="nav-link" @click="logout()">Logout</a>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import router from "@/router.js";
export default {
  methods: {
    ...mapActions(["logout"]),
    logout() {
      this.$store.dispatch("logout");
      router.push("/");
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.navbar {
  overflow: hidden;
  background-color: #333;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.subnav {
  float: left;
  overflow: hidden;
}
.subnav .subnavbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover,
.subnav:hover .subnavbtn {
  background-color: red;
}

.subnav-content {
  display: none;
  position: absolute;
  left: 0;
  background-color: red;
  width: 100%;
  z-index: 1;
}

.subnav-content a {
  float: left;
  color: white;
  text-decoration: none;
}

.subnav-content a:hover {
  background-color: #eee;
  color: black;
}

.subnav:hover .subnav-content {
  display: block;
}
</style>
