import axios from 'axios'

const URL = "http://0.0.0.0:5000/pools";

const state = {
    pools: [],
    loading: true
  }
  
  // getters
  const getters = {}
  
  // actions
  const actions = {
    loadData({commit}) {
    	axios.get(URL).then((response) => {
    	//console.log(response.data, this)
        commit('updatePools', response.data)
        commit('changeLoadingState', false)
    	})
    }
  }
  
  // mutations
  const mutations = {
    updatePools(state, pools) {
    	state.pools = pools
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


