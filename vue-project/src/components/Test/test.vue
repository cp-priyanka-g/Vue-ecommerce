<template>
  <ul class="products-listing">
    <li v-for="product in allProducts" :key="product.id">
      {{ product.title }} | {{ product.price }}
    </li>
  </ul>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Products",
  computed: mapGetters(["allProducts"]),
};
</script>
<style scoped></style>
