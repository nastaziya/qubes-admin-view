import Vue from 'vue'
import Vuex from 'vuex'

import qubes from './modules/qubes'
import pools from './modules/pools'
import labels from './modules/labels'



Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      qubes,
      pools,
      labels
    }
})