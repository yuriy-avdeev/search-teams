<template>
  <div class="card">
    <div class="card__box-logo">
      <img class="card__logo" :src="defaultTeamLogo" alt="Team's logo" />
    </div>
    <h3 class="card__team-name">{{ card.name }}</h3>
  </div>
</template>

<script>
  import defaultTeamLogo from '../assets/images/team-placeholder.png'

  export default {
    props: {
      card: Object,
    },
    data() {
      return {
        defaultTeamLogo,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .card {
    width: $fullWidth;
    padding: 10px 12px;
    color: $fontGrey;
    background-color: $white;
    display: flex;
    align-items: center;
    &_active {
      background-color: $backgroundColorBody;
    }

    &__box-logo {
      width: 40px;
      min-width: 40px;
      height: 40px;
      margin-right: 15px;
      border-radius: 50%;
      background-color: $backgroundColorBody;
      display: flex;
      align-items: center;
      justify-content: center;
      &_active {
        background-color: $white;
      }
    }

    &__logo {
      width: 28px;
      height: 28px;
    }

    &__team-name {
      @include fontProperty('Roboto', 14px, 500, 1, _);
      color: $fontTitle;
    }
  }

  @media screen and (min-width: $transitionPoint) {
    .card {
      padding: 0 12px 10px;
    }
  }
</style>
