<template>
  <div class="input-box">
    <input
      class="input"
      :class="{ input__border: !validInput }"
      v-model="inputValue"
      ref="inputField"
      @input="handleInput"
      @keydown="handleFocus"
    />
    <img class="input__close" @click="clearInput" src="@/assets/images/close.svg" alt="Close icon" />
    <p v-if="!validInput" class="input__warning">{{ message }}</p>
  </div>
</template>

<script>
  export default {
    emits: ['input', 'handleFocus'],

    props: {
      message: {
        type: String,
        default: 'Invalid characters in the field',
      },
    },

    data() {
      return {
        inputValue: '',
      }
    },

    methods: {
      handleFocus(e) {
        this.$emit('handleFocus', e.keyCode)
      },

      clearInput() {
        this.inputValue = ''
        this.$refs.inputField.focus()
        this.handleInput()
      },

      handleInput() {
        this.$emit('input', this.inputValue, this.validInput)
      },
    },

    computed: {
      validInput() {
        const regex = /^[a-zA-Z0-9]*$/g
        return regex.test(this.inputValue)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .input-box {
    position: relative;
  }

  .input {
    width: $fullWidth;
    padding: 9px 30px 9px 42px;
    border: none;
    outline: none;
    border-radius: 80px;
    @include fontProperty('Roboto', 13px, 400, 1.3, _);
    color: $fontTitle;
    background: url('../../assets/images/search.svg') no-repeat;
    background-color: $backgroundColorBody;
    background-position: 15px 10px;
    background-size: 17px;
    margin-bottom: 10px;

    &__border {
      border: 1px solid $red;
    }

    &::placeholder {
      @include fontProperty('Roboto', 13px, 400, 1.3, _);
      color: $fontGrey;
    }

    &__close {
      position: absolute;
      top: 12px;
      right: 14px;
      cursor: pointer;
      &:hover {
        @include hover(0.6, 0.3s);
      }
    }

    &__warning {
      @include fontProperty('Roboto', 10px, 400, 1.1, _);
      color: $red;
      padding: 5px;
    }
  }

  @media screen and (min-width: $transitionPoint) {
    .input__close {
      right: 15px;
    }
  }
</style>
