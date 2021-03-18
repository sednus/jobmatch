import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import skills from './modules/skills'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    skills
  }
})
