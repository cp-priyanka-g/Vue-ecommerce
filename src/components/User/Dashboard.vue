<template>
  <div>
    <div class="container">
      <Header />
    </div>
  </div>
</template>
<script>
import Header from "@/components/User/HeaderSection.vue";
export default {
  components: {
    Header,
  },
  mounted() {
    if (localStorage.getItem("username")) {
      this.username = JSON.parse(localStorage.getItem("username"));
    }
  },
};
</script>
