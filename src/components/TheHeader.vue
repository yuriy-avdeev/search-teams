<template>
  <div>
    Header
    <router-link to="/">My teams</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .active-link {
    color: $white;
    border-bottom: 3px solid $blue;
  }
</style>
