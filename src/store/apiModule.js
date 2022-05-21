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
      list.sort((a, b) => {
        return a.name > b.name
          ? 1
          : a.name < b.name
            ? -1
            : 0
      })
      state.teamsList = list
    },

    handleSubscription(state, updatedCard) {
      const idx = state.teamsList.findIndex(i => i.id === updatedCard.id)
      state.teamsList.splice(idx, 1, updatedCard)
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

    async fetchPatchCard({ commit }, updatedCard) {
      try {
        commit('setLoading', true)
        // const res = await axios.patch...
        // dispatch ... -> update main list <- it depends on "res"
        // mock ->
        setTimeout(() => {
          commit('handleSubscription', updatedCard)
        }, 500)
      } catch (e) {
        console.log(e)
      } finally {
        commit('setLoading', false)
      }
    },
  },


  getters: {
    teamsList: (state) => state.teamsList,
    myTeamsList: (getters) => {
      return getters.teamsList.filter(team => team.is_following)
    },
    isLoading: (state) => state.isPostsLoading,
  }
}
