<template>
  <span>
    <span v-for="(segment, i) in parsedMsg" :key="i" :class="{ highlight: i % 2 }">{{ segment }}</span>
  </span>
</template>

<script>
  export default {
    props: {
      inputValue: String,
      text: String,
    },

    computed: {
      parsedSearch() {
        return `(${this.inputValue})`
      },

      parsedMsg() {
        // as split + regex => idx in array - 1, 3, 5...
        return this.text.split(new RegExp(this.parsedSearch, 'gi')) 
      },
    },
  }
</script>

<style lang="scss" scoped>
  .highlight {
    color: $blue;
  }
</style>
