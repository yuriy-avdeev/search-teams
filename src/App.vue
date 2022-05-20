<template>
  <div id="app">
    <TheHeader />
    <router-link :to="{ name: 'my-teams' }">My teams</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue'
  export default {
    components: { TheHeader },

    data() {
      return {
        laptopScreen: true,
      }
    },

    mounted() {
      this.updateLogo()
      window.addEventListener('resize', this.updateLogo)
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.updateLogo)
    },

    methods: {
      updateLogo() {
        if (window.innerWidth < 768 && this.laptopScreen === true) {
          this.laptopScreen = false
          this.$store.commit('handleChangingScreen', this.laptopScreen)
        } else if (window.innerWidth > 768 && this.laptopScreen === false) {
          this.laptopScreen = true
          this.$store.commit('handleChangingScreen', this.laptopScreen)
        }
      },
    },
  }
</script>

<style lang="scss">
  .active-link {
    border-bottom: 3px solid $blue;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    @extend %fontRobotoRegular;
    background-color: $backgroundColorMain;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    width: $fullWidth;
    max-width: $maxWidth;
    height: fit-content;
    min-height: 100vh;
    margin: 0 auto;
    color: $white;
  }
</style>
