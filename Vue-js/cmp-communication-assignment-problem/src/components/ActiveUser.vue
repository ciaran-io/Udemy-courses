<template>
  <div>
    <h2>UserName {{ userName }} </h2>
    <h3>UserAge: {{ userAge }} </h3>
  </div>
</template>

<script>
export default {
  props: ['userName', 'userAge']

}
</script>

<style lang="scss" scoped>

</style>