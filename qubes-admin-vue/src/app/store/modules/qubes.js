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
  //----------------------------LOAD-----------------------------------------------
  loadData({commit}) {
    axios.get(URL).then((response) => {
    //console.log(response.data, this)
      commit('updateQubes', response.data)
      commit('changeLoadingState', false)

    })
  },
  //----------------------------ADD QUBE-----------------------------------------------
  
  addQube ({dispatch, commit}, qubeObj) {
    if (!qubeObj) {
        return
    }
    axios.post(URL, qubeObj).then(_ => {
      commit('add_qube', qubeObj)
      dispatch('loadData')
    })
  },
  //----------------------------DELETE QUBE-----------------------------------------------

  deleteQube({dispatch, commit}, qubeObj)
  {
    console.log(qubeObj)
    axios.delete(URL + '/' +  qubeObj).then(_ => {
      commit('delete_qube', qubeObj)
      dispatch('loadData')
    })
  },
  //----------------------------RUN QUBE-----------------------------------------------

  runQube({dispatch}, qubeObj)
  {
    const run_json = { "force": false, "status": "Running"}
    console.log(qubeObj);
    axios.put(URL + '/' + qubeObj, run_json).then(_ => {
      dispatch('loadData')
    })
    .catch(function (error) {
          console.log(error);            
    });
  },
  //----------------------------STOP QUBE-----------------------------------------------

  stopQube({dispatch}, qubeObj)
  {
    const stop_json = { "force": false, "status": "Halted"}
    console.log(qubeObj);
    axios.put(URL + '/' + qubeObj, stop_json).then(_ => {
      dispatch('loadData')
    })
    .catch(function (error) {
          console.log(error);            
    });
  },

  //----------------------------CLONE-----------------------------------------------
  cloneQube({dispatch}, qubeObj){
    // if (!qubeName || !qubeType) {
    //   return
    // }
    const json_clone = {"name": qubeObj.name, "type": qubeObj.type}
    axios.post(URL + '/' + qubeObj.name_mother, json_clone).then(_ => {
      dispatch('loadData')
    })
  },
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
  },
  updateQube(state, qube) {
    state.qubes = qube
  },
  changeLoadingQubeState(state, loadQube) {
    state.loadQube = loadQube
  }  
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}



