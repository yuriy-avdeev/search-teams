import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      user: {
        name: 'RichyRich'
      },

      messages: ['first', 'second'],

      isLaptopScreen: true,
    }
  },


  mutations: {
    handleChangingScreen(state, isUsedLaptop) {
      state.isLaptopScreen = isUsedLaptop
    }
  },


  actions: {
  },


  getters: {
    userData(state) {
      return state.user
    },

    messagesNumber(state) {
      return state.messages.length
    },

    isLaptopScreen(state) {
      return state.isLaptopScreen
    },
  }
})
