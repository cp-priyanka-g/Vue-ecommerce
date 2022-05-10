<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ecommerce</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="/admin-dashboard"
              >Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Product</a
            >
            <div class="dropdown-menu">
              <a href="/product-list">Show </a>
              <a href="/product-add">Add</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Category</a
            >
            <div class="dropdown-menu">
              <a href="/category-list">Show </a>
              <a href="/category-add">Add</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Sub-Category</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/subcategory-list">Show </a>
              <a class="dropdown-item" href="subcategory-add">Add</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">LogOut</a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>

  <!-- Main -->
</template>
