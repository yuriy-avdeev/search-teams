<template>
  <div class="main">
    <MainUser />
    <NavBar />
    <MainSearch :teamsList="teamsList" />
    <MainMyTeams />
  </div>
</template>

<script>
  import MainUser from '@/components/MainUser.vue'
  import NavBar from '@/components/NavBar.vue'
  import MainSearch from '@/components/MainSearch.vue'
  import MainMyTeams from '@/components/MainMyTeams.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    components: { MainUser, NavBar, MainSearch, MainMyTeams },

    mounted() {
      !this.teamsList.length && this.fetchTeamsList()
    },

    methods: {
      ...mapActions({ fetchTeamsList: 'apiModule/fetchTeamsList' }),
    },

    computed: {
      ...mapGetters('apiModule', ['teamsList']),
    },
  }
</script>

<style lang="scss" scoped>
  .main {
    width: $fullWidth;
    max-width: $mainMaxWidth;
    margin: auto;
    background-color: $backgroundColorMain;
    border: 1px solid $backgroundColorMain;
    overflow: hidden;
  }

  @media screen and (min-width: $transitionPoint) {
    .main {
      margin-top: 16px;
      box-shadow: 0 0 10px $backgroundColorMain;
      border-radius: 8px;
    }
  }
</style>
