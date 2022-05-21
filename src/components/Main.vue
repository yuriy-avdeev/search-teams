<template>
  <div class="main">
    <MainUser />
    <NavBar />
    <MainSearch />
    <MainCard v-for="card in teamsList" :key="card.id" :card="card" />
  </div>
</template>

<script>
  import MainUser from '@/components/MainUser.vue'
  import NavBar from '@/components/NavBar.vue'
  import MainSearch from '@/components/MainSearch.vue'
  import MainCard from '@/components/MainCard.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    components: { MainUser, NavBar, MainSearch, MainCard },

    mounted() {
      !this.teamsList.length && this.fetchTeamsList()
    },

    methods: {
      ...mapActions('apiModule', ['fetchTeamsList']),
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
  }
</style>
