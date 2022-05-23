import Vue from 'vue'
import Vuex from 'vuex'
import avatar from '@/assets/images/avatar.png'
import apiModule from './apiModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { apiModule },

  state: () => ({
    messages: ['first', 'second'],
    isLaptopScreen: true,
    // teamsFoundList: [], // <- moved the logic to MainSearch.vue

    linkList: [
      {
        name: 'My teams',
        routeName: 'my-teams',
      },
      {
        name: 'About',
        routeName: 'about',
      },
    ],

    user: {
      name: 'RichyRich',
      avatar,
      level: 'Level 5'
    }
  }),


  mutations: {
    handleChangingScreen(state, isUsedLaptop) {
      state.isLaptopScreen = isUsedLaptop
    },

    // createTeamsFoundList(state, filteredList) {
    //   state.teamsFoundList = filteredList.map((card, i) => {
    //     return i === 0 ? { ...card, is_focus: true } : { ...card, is_focus: false }
    //   })
    // },

    // now it's done in MainSearch -> updateFollowingCard()
    // handleSubscription(state, updatedCard) {
    //   const idx = state.teamsFoundList.findIndex(i => i.id === updatedCard.id)
    //   state.teamsFoundList.splice(idx, 1, updatedCard)
    // },
  },


  getters: {
    userData: (state) => state.user,
    messagesNumber: (state) => state.messages.length,
    isLaptopScreen: (state) => state.isLaptopScreen,
    linkList: (state) => state.linkList,
    // teamsFoundList: (state) => state.teamsFoundList,
  }
})
