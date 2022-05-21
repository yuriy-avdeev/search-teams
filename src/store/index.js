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
  },

  
  getters: {
    userData: (state) => state.user,
    messagesNumber: (state) => state.messages.length,
    isLaptopScreen: (state) => state.isLaptopScreen,
    linkList: (state) => state.linkList,
  }
})
