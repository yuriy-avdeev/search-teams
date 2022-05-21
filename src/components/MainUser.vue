<template>
  <div class="user">
    <div class="user__box">
      <img class="user__avatar" :src="userData.avatar" alt="User avatar" />
      <p class="user__level">{{ userData.level }}</p>
    </div>
    <ui-user-name v-if="isLaptopScreen">{{ userData.name }}</ui-user-name>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import UiUserName from '@/components/UI/UiUserName'

  export default {
    components: { UiUserName },
    computed: {
      ...mapGetters(['userData', 'isLaptopScreen']),
    },
  }
</script>

<style lang="scss" scoped>
  .user {
    width: $fullWidth;
    padding: 39px 0 30px;
    background-color: $backgroundColorInfo;
    border-top: solid 1px #585858;
    border-bottom: solid 1px #3d3d3d;
    display: flex;
    justify-content: center;

    &__avatar {
      width: 60px;
    }

    &__level {
      @include fontProperty('Montserrat', 10px, 400, 1.3, _);
      width: fit-content;
      margin: 6px auto 0;
      padding: 1px 8px;
      background-color: $backgroundColorHeader;
      border-radius: 40px;
    }
  }

  @media screen and (min-width: $transitionPoint) {
    .user {
      justify-content: start;
      padding: 39px 0 34px 42px;
    }
  }
</style>
