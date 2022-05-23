<template>
  <div class="col-md-6 offset-3">
    <div>
      <Dashboard />

      <form
        @submit.prevent="onSubmit"
        class="card mt-5 p-3 border border-dark bg-dark shadow-lg"
      >
        <div class="form-group">
          <label class="text-light">Your description </label>
          <input id="input-name" v-model="form.name" />
        </div>
      </form>
      <transition name="fade" mode="out-in">
        <div v-if="sent">
          <p>Thanks</p>
        </div>
      </transition>
    </div>
    <div v-if="!sent" class="formGroup">
      <button type="submit">Contact</button>
    </div>
  </div>
</template>

<script>
import querystring from "querystring";
import Dashboard from "@/components/User/Dashboard.vue";
export default {
  data() {
    return {
      sent: false,
      form: {
        name: "",
      },
    };
  },
  components: {
    Dashboard,
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$axios
        .post("https://localhost:3000/email", querystring.stringify(this.form))
        .then((res) => {
          this.sent = true;
        });
    },
  },
};
</script>
