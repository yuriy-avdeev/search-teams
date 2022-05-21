<template>
  <p class="user-name">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
  .user-name {
    @include fontProperty('Montserrat', 15px, 700, 1.2, italic);
  }

  @media screen and (min-width: $transitionPoint) {
    .user-name {
      @include fontProperty('Montserrat', 16px, 700, 1.2, italic);
      margin: 23px 0 0 20px;
    }
  }
</style>
