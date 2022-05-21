import axios from "axios"

export default {
  namespaced: true,

  state: () => ({
    teamsList: [],
    isLoading: false,
    token: 'ef80523b-0474-4104-8fe6-fe92f8360b28'
  }),


  mutations: {
    setLoading(state, bool) {
      state.isLoading = bool
    },

    setTeamsList(state, list) {
      state.teamsList = list
    },

    handleSubscription(state, card) {
      const idx = state.teamsList.findIndex(item => item.id === card.id)
      state.teamsList.splice(idx, 1, card)
    },
  },


  actions: {
    async fetchTeamsList({ state, commit }) {
      try {
        commit('setLoading', true)
        const res = await axios.get(`https://run.mocky.io/v3/${state.token}`)
        commit('setTeamsList', res.data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false)
      }
    },

    async fetchPatchCard({ commit }, card) {
      try {
        commit('setLoading', true)
        // const res = await axios.patch...
        // dispatch ... - update main list? <- it depends on "res"

        // mock ->
        setTimeout(() => {
          commit('handleSubscription', card)
        }, 750)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false)
      }
    },
  },


  getters: {
    teamsList: (state) => state.teamsList,
    isLoading: (state) => state.isPostsLoading,
  }
}
