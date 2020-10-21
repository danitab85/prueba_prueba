import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courses: []
  },
  mutations: {
    GET_COURSES(state, ListCourses) {
      state.courses = ListCourses
    }
  },
  actions: {
    getCourses({ commit }) {
      return fetch('https://us-central1-ottoklauss-5927c.cloudfunctions.net/courses/courses')
	      .then(response => response.json())
        .then(response => {
          commit('GET_COURSES', response)
        })
        .catch(reject => console.log(reject))
    }
  },
  modules: {
  }
})
