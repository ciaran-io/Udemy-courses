<template>
  <div>
    <h1>Add new friend</h1>
    <form @submit.prevent="submitData">
      <div>
        <label for="name">Name</label><br />
        <input type="text" v-model="enteredName" />  
      </div>

      <div>
        <label for="phone">Phone Number</label><br />
        <input type="tel" v-model="enteredPhone" />  
      </div>

      <div>
        <label for="Email">Email</label><br />
        <input type="email" v-model="enteredEmail" />
      </div>

      <div>
        <input type="submit" value="Add contact" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits:['add-friend'],
  data: ()=> ({
    enteredName: '',
    enteredPhone: '',
    enteredEmail: '',
  }),
  methods: {
    submitData(){
      this.$emit(
        'add-friend', 
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail,
      )
    }
  }
}
</script>

<style>
</style>