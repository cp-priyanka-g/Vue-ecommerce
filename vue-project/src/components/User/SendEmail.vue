<template>
  <div>
    <div>
      <transition name="fade" mode="out-in">
        <div v-if="sent">
          <p>Thanks</p>
        </div>
      </transition>
    </div>
    <div v-if="!sent" class="formGroup">
      <form @submit="onSubmit">
        <form-input
          id="input-name"
          v-model="form.name"
          type="text"
          required
          placeholder="Name"
        />
        <button type="submit">Contact</button>
      </form>
    </div>
  </div>
</template>

<script>
import querystring from "querystring";

export default {
  data() {
    return {
      sent: false,
      form: {
        name: "",
      },
    };
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
