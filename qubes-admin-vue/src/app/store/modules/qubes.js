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
    addQube ({dispatch, commit}, qubeObj) {
      if (!qubeObj) {
         return
      }
      axios.post(URL, qubeObj).then(_ => {
        commit('add_qube', qubeObj)
        dispatch('loadData')
      })
    },
    deleteQube({dispatch, commit}, qubeObj)
    {
      console.log(qubeObj)
      axios.delete(URL + '/' +  qubeObj).then(_ => {
        commit('delete_qube', qubeObj)
        dispatch('loadData')
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
    },
    delete_qube (state, qubeObj) {
      state.qubes.pop(qubeObj)
    }
  }
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }



