<template>
  <div class="not-found">
    <h1 class="not-found__title">404</h1>
    <p class="not-found__text">Page not found...</p>
    <router-link class="not-found__link" :to="{ name: 'my-teams' }"> to main </router-link>
  </div>
</template>

<style lang="scss" scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: $mainMaxWidth;
    margin: auto;
    @include fontProperty(_, 24px, 600, 1, _);
    color: darkred;

    &__title {
      margin-top: 45px;
    }

    &__text {
      margin: 15px 0;
    }

    &__link {
      text-decoration: none;
      font-style: italic;
      color: $blue;
      &:hover {
        @include hover(0.8, 0.3s);
      }
    }
  }
</style>
