import axios from 'axios'

const URL = "http://0.0.0.0:5000/labels";

const state = {
    labels: [],
    loading: true
  }
  
  // getters
  const getters = {}
  
  // actions
  const actions = {
    loadData({commit}) {
    	axios.get(URL).then((response) => {
    	//console.log(response.data, this)
        commit('updateLabels', response.data)
        commit('changeLoadingState', false)
    	})
    }
  }
  
  // mutations
  const mutations = {
    updateLabels(state, labels) {
    	state.labels = labels
    },
    changeLoadingState(state, loading) {
    	state.loading = loading
    }
  }
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }


