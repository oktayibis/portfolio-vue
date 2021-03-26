import { createStore } from 'vuex'
import BlogsModule from './blogs'
import ProjectsModule from './projects'
import MessageModule from './messages'
import { auth } from '@/store/firebase'

const store = createStore({
  modules: {
    blogs: BlogsModule,
    projects: ProjectsModule,
    messages: MessageModule
  },
  state () {
    return {
      user: null,
      isAuth: false
    }
  },
  mutations: {
    login (state, payload) {
      state.user = payload
      state.isAuth = true
    }
  },
  actions: {
    async login (context, payload) {
      const response = await auth.signInWithEmailAndPassword(payload.email, payload.password)
      const user = {
        id: response.user.uid,
        email: response.user.email
      }
      context.commit('login', user)
    }
  },
  getters: {
    getUser (state) {
      return state.user
    },
    authStatus (state) {
      return state.isAuth
    }
  }

})

export default store
