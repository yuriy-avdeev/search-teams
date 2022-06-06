<template>
  <div class="search">
    <h2 class="search__title">SEARCH TEAMS</h2>

    <UiInput
      @input="searchQuery"
      @handleFocus="handleFocus"
      placeholder="Search for a team"
      message="Field can only contain letters and numbers"
    />

    <CardSearched
      v-for="(card, idx) in filteredList"
      :key="card.id"
      :card="card"
      :index="idx"
      :focusNumber="focusNumber"
      :inputValue="inputValue"
      @updateFollowing="updateFollowingCard"
      @mouseOver="focusNumber = idx"
      @mouseLeave="focusNumber = focusNumber"
    />
    <!-- // :ref="`card${card.id}`" => $refs[`card${card.id}`] // m.b. for focus -->

    <div v-if="inputValue && !filteredList.length" class="search__no-results-box">
      <img class="search__no-results-image" src="@/assets/images/no-results.svg" alt="No results" />
      <p class="search__no-results-text">No Teams Found</p>
    </div>
  </div>
</template>

<script>
  import UiInput from '@/components/UI/UiInput'
  import CardSearched from '@/components/CardSearched.vue'

  export default {
    components: { UiInput, CardSearched },
    props: { teamsList: Array },

    data() {
      return {
        inputValue: '',
        filteredList: [],
        focusNumber: 0,
      }
    },

    methods: {
      handleFocus(keyNumber) {
        if (!this.filteredList.length) return
        if (keyNumber === 40) {
          if (this.focusNumber + 1 === this.filteredList.length) return
          this.focusNumber++
        }
        if (keyNumber === 38) {
          if (this.focusNumber === 0) return
          this.focusNumber--
        }
      },

      updateFollowingCard(card) {
        const idx = this.filteredList.findIndex((c) => c.id === card.id)
        this.filteredList[idx].is_following = !this.filteredList[idx].is_following
      },

      checkForMatches(string, inputValue) {
        // todo: combine (mixin) logic with UiText -> return segment.toLowerCase() === inputValue.toLowerCase()
        return string.toLowerCase().search(inputValue.toLowerCase())
      },

      searchQuery(inputValue, isInputValid) {
        this.inputValue = inputValue
        this.filteredList = []
        if (!isInputValid) return

        if (inputValue.length) {
          this.teamsList.forEach((card) => {
            let checkedName = this.checkForMatches(card.name, inputValue)
            let checkedStadium = this.checkForMatches(card.stadium, inputValue)
            let hasStadium = false
            card.leagues.forEach((league) => {
              if (this.checkForMatches(league, inputValue) > -1) hasStadium = true
            })

            if (checkedName > -1 || checkedStadium > -1 || hasStadium) this.filteredList.push(card)
          })
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .search {
    width: $fullWidth;
    border-top: 8px solid $backgroundColorMain;
    padding: 16px 10px 6px;
    background-color: $white;

    &__title {
      @include fontProperty('Montserrat', 14px, 700, 1.1, italic);
      color: $fontTitle;
      margin: 0 0 15px 5px;
    }

    &__no-results-box {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__no-results-image {
      width: 144px;
      height: 77px;
      margin: 20px 0 10px;
    }

    &__no-results-text {
      @include fontProperty('Roboto', 12px, 400, 1.3, _);
      color: $fontGrey;
      margin-bottom: 4px;
    }
  }

  @media screen and (min-width: $transitionPoint) {
    .search {
      border: none;
      padding: 16px 15px;

      &__title {
        margin: 0 0 16px 0;
      }
    }
  }
</style>
