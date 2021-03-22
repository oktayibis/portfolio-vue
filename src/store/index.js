import { createStore } from 'vuex'
import BlogsModule from './blogs'
import ProjectsModule from './projects'

const store = createStore({
  modules: {
    blogs: BlogsModule,
    projects: ProjectsModule
  }

})

export default store
