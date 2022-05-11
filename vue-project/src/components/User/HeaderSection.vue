<template>
  <div class="navbar">
    <a href="/user-dashboard">Home</a>
    <div>
      <div>
        <a href="/product-show">Product</a>
        <a href="/category-show">Category</a>
        <a href="/subcategory-show">SubCategory</a>
      </div>
    </div>
    <div>
      <button class="subnavbtn">Favourite</button>
      <div class="subnav-content">
        <a href="/favourite-list">Wishlist</a>
      </div>
    </div>
    <div>
      <button>Contact<i class="fa fa-caret-down"></i></button>
      <div class="subnav-content">
        <a href="/email">Email</a>
      </div>
    </div>
    <a class="nav-link" href="/search-category">By category</a>
    <a class="nav-link" href="/search-subcategory">By Subcategory</a>
    <a class="nav-link" href="/search-byprice">Search By Price</a>
    <a class="nav-link" href="/search-byname">Search By name</a>
    <a class="nav-link" href="/logout">Logout</a>
  </div>
</template>

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
