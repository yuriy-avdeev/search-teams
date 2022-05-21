<template>
  <input v-model="inputValue" @input="$emit('input', inputValue)" class="input" type="text" />
</template>

<script>
  export default {
    data() {
      return {
        inputValue: '',
      }
    },
  }
</script>

<style lang="scss" scoped>
  .input {
    width: $fullWidth;
    padding: 9px 30px 9px 42px;
    margin-top: 15px;
    border: none;
    outline: none;
    border-radius: 80px;
    @include fontProperty('Roboto', 13px, 400, 1.3, _);
    color: $fontTitle;
    background: url('../../assets/images/search.svg') no-repeat;
    background-color: $backgroundColorBody;
    background-position: 15px 10px;
    background-size: 17px;

    &::placeholder {
      @include fontProperty('Roboto', 13px, 400, 1.3, _);
      color: $fontGrey;
    }
  }
</style>
