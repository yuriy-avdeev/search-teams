<template>
  <div class="about">
    <NavBar />
    <h1 class="about__title">About page</h1>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  export default {
    components: { NavBar },
  }
</script>

<style lang="scss" scoped>
  .about {
    &__title {
      @include fontProperty('Montserrat', 20px, 700, 1.4, _);
      margin: 50px auto;
      text-align: center;
      color: $fontGrey;
    }
  }
</style>
