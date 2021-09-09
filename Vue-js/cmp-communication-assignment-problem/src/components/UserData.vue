<template>
  <div>
    <form @submit.prevent="submitData">
      <label for="name">Name</label>
      <input type="text" v-model="enteredName" />
      <label for="age">Age</label>
      <input type="number" v-model="enteredAge" />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  emits: ["submit-new-user"],
  data: () => ({
    enteredName: "",
    enteredAge: "",
  }),
  methods: {
    submitData() {
      console.log('clicked', this.enteredName, this.enteredAge)
      this.$emit("submit-new-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>