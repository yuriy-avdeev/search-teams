<template>
  <span>
    <span v-for="(segment, i) in parsedMsg" :key="i" :class="getStyle(i % 2)">{{ segment }}</span>
  </span>
</template>

<script>
  export default {
    props: {
      inputValue: String,
      text: String,
    },

    methods: {
      getStyle(num) {
        const myStyles = {
          highlight: !!num,
        }
        return myStyles
      },
    },

    computed: {
      parsedSearch() {
        return `(${this.inputValue})`
      },

      parsedMsg() {
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
