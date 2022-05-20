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
    <UserName v-if="!isLaptopScreen" />
    <div class="header__notes-box">
      <img class="header__notes-bell" src="@/assets/images/notification.svg" alt="Notification bell" />
      <div class="header__notes-label">
        <p class="header__notes-text">{{ $store.getters.messagesNumber }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import UserName from '@/components/UserName'
  import iconLogo from '@/assets/images/logo.svg'
  import fullLogo from '@/assets/images/fullLogo.svg'
  import { mapGetters } from 'vuex'

  export default {
    components: { UserName },

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
      ...mapGetters(['isLaptopScreen']),
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
      &:hover {
        @include hover(0.8, 0.3s);
        cursor: pointer;
      }
    }

    &__notes-box {
      position: relative;
      width: 20px;
      height: 20px;
    }

    &__notes-label {
      box-sizing: content-box;
      height: 14px;
      min-width: 14px;
      max-width: fit-content;
      position: absolute;
      right: -8px;
      bottom: -7px;
      border: 2px solid $backgroundColorHeader;
      border-radius: 50%;
      background-color: $blue;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__notes-text {
      @include fontProperty('Montserrat', 10px, 600, 1, italic);
      margin: 0 2px;
    }
  }

  @media screen and (min-width: 768px) {
    .header {
      height: calc(100vw - 713px);
      max-height: 80px;
      padding: 0 32px 0 25px;

      &__arrow {
        margin-right: 15px;
      }
    }
  }
</style>
