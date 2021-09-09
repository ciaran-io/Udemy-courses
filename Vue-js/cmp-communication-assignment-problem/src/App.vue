<template>
<div>
  <active-user v-for="user in userData" 
    :key="user.id"
    :userName="user.name"
    :userAge="user.age"
  >
  </active-user>
  <user-data
    @submit-new-user="addUser"
    >
  </user-data>
</div>
</template>

<script>
export default {
  data: () => ({
    userData: [{ id: 1, name: "john", age: "18" }],
  }),
  methods: {
    addUser(name, age){
      const newUser ={
        id: new Date().toISOString(),
        name: name,
        age: age,
      }
      this.userData.push(newUser)
    }
  }
};
</script>