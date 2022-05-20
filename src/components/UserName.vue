<template>
  <p class="user-name">{{ $store.getters.userData.name }}</p>
</template>

<script>
  // import { mapGetters } from 'vuex'
  // export default {
  //   computed: {
  //     ...mapGetters(['userData']),
  //   },
  // }
</script>

<style lang="scss" scoped>
  .user-name {
    @include fontProperty('Montserrat', 15px, 700, 1.2, italic);
  }

  @media screen and (min-width: 768px) {
    .user-name {
      @include fontProperty('Montserrat', 16px, 700, 1.2, italic);
    }
  }
</style>
