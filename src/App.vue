<template>
  <div id="app">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue'
  export default {
    components: { TheHeader },
  }
</script>

<style lang="scss">
  body {
    background-color: #f5f7f9;
  }

  #app {
    width: 100%;
    max-width: 1280px;
    min-height: 100vh;
    margin: 0 auto;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
