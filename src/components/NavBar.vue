<template>
  <ul class="navbar">
    <li v-for="link in $store.getters.linkList" :key="link.name" class="navbar__link-box">
      <router-link class="navbar__link" :to="{ name: link.routeName }">{{ link.name.toUpperCase() }}</router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .navbar {
    width: $fullWidth;
    margin: 0 auto;
    background-color: $backgroundColorInfo;
    display: flex;
    justify-content: center;

    &__link-box {
      padding: 12px 0;
      margin: 0 5px;
      list-style: none;
      position: relative;
    }

    &__link {
      @include fontProperty('Roboto', 11px, 500, 1.4, _);
      text-decoration: none;
      color: $fontGrey;
      padding: 0 7.5px;
    }
  }

  .active-link {
    color: $white;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 3px solid $blue;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      width: $fullWidth;
    }
  }
</style>
