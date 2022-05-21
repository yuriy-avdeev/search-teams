<template>
  <div class="search">
    <h2 class="search__title">SEARCH TEAMS</h2>
    <!-- <my-input v-model="searchQuery" placeholder="Поиск...." v-focus /> -->
  </div>
</template>

<script>
  // import MyInput from '@/components/UI/MyInput'

  export default {
    // components: { MyInput },
  }
</script>

<style lang="scss" scoped>
  .search {
    width: $fullWidth;
    margin: 5px 0;
    padding: 16px 10px;
    background-color: $white;

    &__title {
      @include fontProperty('Montserrat', 14px, 700, 1.1, italic);
      color: $fontTitle;
      margin-left: 5px;
    }
  }
</style>
