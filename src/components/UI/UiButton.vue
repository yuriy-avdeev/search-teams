<template>
  <div>
    <button @click.prevent.stop="clickButton" class="button" :class="{ button_active: isActive }">
      {{ isActive ? isActiveText : text }}
    </button>
  </div>
</template>

<script>
  export default {
    emits: ['clickButton'],
    
    props: {
      isActive: Boolean,

      text: {
        type: String,
        default: 'FOLLOW',
      },
      
      isActiveText: {
        type: String,
        default: 'FOLLOWING',
      },
    },

    methods: {
      clickButton(e) {
        this.$emit('clickButton', e)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .button {
    height: 32px;
    padding: 0 20px;
    @include fontProperty('Roboto', 12px, 500, 1.5, _);
    background-color: $blue;
    outline: none;
    border: 2px solid $blue;
    border-radius: 20px;
    color: $white;
    cursor: pointer;

    &:hover {
      @include hover(0.85, 0.3s);
    }

    &_active {
      background-color: $white;
      color: $blue;
    }
  }
</style>
