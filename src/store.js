import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'VUEX STUDY',
    words: [
      'Bola',
      'Meja',
      'Laptop',
      'Kerusi'
    ]
  },
  getters: {
    countwords: state => {
      return state.words.length
    }
  },
  mutations: {
    ADD_word: (state, word) => {
      state.words.push(word)
    },
    REMOVE_word: (state, word) => {
      state.words.splice(word, 1)
    },
    REMOVE_ALL: (state) => {
      state.words = []
    }
  },
  actions: {
    removeword: (context, word) => {
      context.commit("REMOVE_word", word)
    },
    removeAll ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  }
})
