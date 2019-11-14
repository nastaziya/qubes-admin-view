// initial state
import axios from 'axios'

const URL = 'http://0.0.0.0:5000/qubes';

const state = {
    qubes: [],
    loading: true,
   
  }
  
  // getters
  const getters = {}
  
  // actions
  const actions = {
    loadData({commit}) {
    	axios.get(URL).then((response) => {
    	//console.log(response.data, this)
        commit('updateQubes', response.data)
        commit('changeLoadingState', false)
    	})
    },
    addQube ({ commit}, qubeObj) {
      if (!qubeObj) {
         return
      }
      axios.post(URL, qubeObj).then(_ => {
        commit('add_qube', qubeObj)
      })
    }
  }
  
  // mutations
  const mutations = {
    updateQubes(state, qubes) {
    	state.qubes = qubes
    },
    changeLoadingState(state, loading) {
    	state.loading = loading
    },
    add_qube (state, qubeObj) {
      state.qubes.push(qubeObj)
    }
  }
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }



