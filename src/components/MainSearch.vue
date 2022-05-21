<template>
  <div class="search">
    <h2 class="search__title">SEARCH TEAMS</h2>
    <ui-input @input="searchQuery" placeholder="Search for a team" />
  </div>
</template>

<script>
  import UiInput from '@/components/UI/UiInput'

  export default {
    components: { UiInput },

    methods: {
      searchQuery(value) {
        console.log(value)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .search {
    width: $fullWidth;
    border-top: 8px solid $backgroundColorMain;
    padding: 16px 10px;
    background-color: $white;

    &__title {
      @include fontProperty('Montserrat', 14px, 700, 1.1, italic);
      color: $fontTitle;
      margin-left: 5px;
    }
  }

  @media screen and (min-width: $transitionPoint) {
    .search {
      border: none;
      padding: 16px 15px;
      
      &__title {
        margin-left: 0;
      }
    }
  }
</style>
