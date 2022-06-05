<template>
  <div class="header">
    <div>
      <img
        @click="$router.go(-1)"
        class="header__arrow"
        src="@/assets/images/arrow-left.svg"
        alt="Link to back: arrow-left"
      />
      <img @click="toMainPage" class="header__logo" :src="isLaptopScreen ? fullLogo : iconLogo" alt="Oddspedia Logo" />
    </div>
    <ui-user-name v-if="!isLaptopScreen">{{ userData.name }}</ui-user-name>
    <div class="header__notes-box">
      <img class="header__notes-bell" src="@/assets/images/notification.svg" alt="Notification bell" />
      <div v-if="$store.getters.messagesNumber" class="header__notes-label">
        {{ $store.getters.messagesNumber }}
      </div>
    </div>
  </div>
</template>

<script>
  import UiUserName from '@/components/UI/UiUserName'
  import iconLogo from '@/assets/images/logo.svg'
  import fullLogo from '@/assets/images/fullLogo.svg'
  import { mapGetters } from 'vuex'

  export default {
    components: { UiUserName },

    data() {
      return {
        iconLogo,
        fullLogo,
      }
    },

    methods: {
      toMainPage() {
        this.$route.name !== 'my-teams' && this.$router.push('/')
      },
    },

    computed: {
      ...mapGetters(['isLaptopScreen', 'userData']),
    },
  }
</script>

<style lang="scss" scoped>
  .header {
    width: $fullWidth;
    height: 55px;
    padding: 0 15px;
    background-color: $backgroundColorHeader;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__arrow {
      padding-top: 3px;
      margin-right: 10px;
      cursor: pointer;
      &:hover {
        @include hover(0.8, 0.3s);
      }
    }

    &__logo {
      cursor: pointer;
      &:hover {
        @include hover(0.8, 0.3s);
      }
    }

    &__notes-box {
      position: relative;
      width: 42px;
      height: 20px;
      display: flex;
      justify-content: flex-end;
    }

    &__notes-bell {
      cursor: pointer;
    }

    &__notes-label {
      border-radius: 50%;
      border: 2px solid $backgroundColorHeader;
      position: absolute;
      right: -8px;
      bottom: -7px;
      height: 18px;
      min-width: 18px;
      max-width: fit-content;
      background-color: $blue;
      display: flex;
      align-items: center;
      justify-content: center;
      @include fontProperty('Montserrat', 10px, 600, 1, _);
      cursor: pointer;
    }
  }

  @media screen and (min-width: $transitionPoint) {
    .header {
      height: calc(100vw - 969px);
      max-height: 80px;
      padding: 0 32px 0 25px;

      &__arrow {
        margin-right: 15px;
      }
    }
  }
</style>
