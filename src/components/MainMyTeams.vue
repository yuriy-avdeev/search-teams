<template>
  <div class="my-teams">
    <h2 class="my-teams__title">MY TEAMS</h2>
    <div v-if="myTeamsList.length">
      <CardMyTeam v-for="card in myTeamsList" :key="card.id" :card="card" />
    </div>
    <p v-else class="my-teams__text">You aren't following any teams yet.</p>
  </div>
</template>

<script>
  import CardMyTeam from '@/components/CardMyTeam.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: { CardMyTeam },
    computed: {
      ...mapGetters('apiModule', ['myTeamsList']),
    },
  }
</script>

<style lang="scss" scoped>
  .my-teams {
    width: $fullWidth;
    border-top: 8px solid $backgroundColorMain;
    background-color: $white;
    padding-bottom: 10px;

    &__title {
      @include fontProperty('Montserrat', 14px, 700, 1.1, italic);
      color: $fontTitle;
      margin: 16px 15px;
    }

    &__text {
      @include fontProperty('Roboto', 12px, 400, 1.3, _);
      color: $fontGrey;
      padding: 37px 0;
      margin: 0 10px;
      text-align: center;
      background-color: $backgroundColorBody;
      border-radius: 8px;
    }
  }
</style>
