<template>
  <div class="card">
    <div class="card__box-logo">
      <img class="card__logo" :src="defaultTeamLogo" alt="Team's logo" />
    </div>

    <div class="card__box-info">
      <div class="card__box-leagues">
        <p v-for="(league, idx) in card.leagues" :key="league" class="card__team-leagues">
          {{ league }}{{ card.leagues.length !== idx + 1 ? ', ' : '' }}&nbsp;
        </p>
      </div>

      <div class="card__box-team">
        <h3 class="card__team-name">{{ card.name }}</h3>
        <div class="card__team-border"></div>
        <div class="card__box-stadium">
          <img class="card__logo-stadium" src="@/assets/images/stadium.svg" alt="Image of stadium" />
          <p class="card__team-stadium">{{ card.stadium }}</p>
        </div>
      </div>
    </div>
    <UiButton @clickButton="clickButton" :isActive="card.is_following" text="FOLLOW" isActiveText="FOLLOWING" />
  </div>
</template>

<script>
  import defaultTeamLogo from '../assets/images/team-placeholder.png'
  import UiButton from '@/components/UI/UiButton.vue'
  import { mapActions } from 'vuex'

  export default {
    components: { UiButton },
    props: {
      card: Object,
    },
    data() {
      return {
        defaultTeamLogo,
      }
    },

    methods: {
      clickButton() {
        const updatedCard = { ...this.card, is_following: !this.card.is_following }
        this.fetchPatchCard(updatedCard)
      },

      ...mapActions('apiModule', ['fetchPatchCard']),
    },
  }
</script>

<style lang="scss" scoped>
  .card {
    width: $fullWidth;
    padding: 6px 15px;
    color: $fontGrey;
    background-color: $white;
    display: flex;
    align-items: center;

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
    }

    &__logo {
      width: 28px;
      height: 28px;
    }

    &__box-info {
      flex-grow: 2;
      margin-right: 5px;
    }

    &__box-leagues {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: $fullWidth;
    }

    &__team-leagues {
      @include fontProperty('Roboto', 11px, 400, 1.3, _);
    }

    &__box-team {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: $fullWidth;
    }

    &__team-name {
      @include fontProperty('Roboto', 14px, 500, 1.4, _);
      color: $fontTitle;
    }

    &__team-border {
      width: 1px;
      height: 10px;
      background-color: $backgroundColorMain;
      margin: 0 6px;
    }

    &__box-stadium {
      display: flex;
      align-items: center;
    }

    &__logo-stadium {
      width: 14px;
      height: 12.65px;
    }

    &__team-stadium {
      @include fontProperty('Roboto', 12px, 400, 1.2, _);
      margin-left: 6px;
    }
  }
</style>
