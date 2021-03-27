import Project from '@/classes/Project'
import { db } from '@/store/firebase'

const projectsRef = db.collection('projects')

const actions = {
  async getAllProject ({ commit }) {
    const data = []
    await projectsRef.onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        const item = new Project({
          id: doc.id,
          date: Date.now().toLocaleString(),
          ...doc.data()
        })
        /*   console.log('item in actions', item) */
        data.push(item)
      })
      commit('setProjects', data)
    }, error => {
      throw new Error(error)
    })
  },
  async getProjectById (context, projectId) {
    // Get project by Id

    const response = await projectsRef.doc(projectId).get()
    if (response.exists) {
      const project = {
        id: response.id,
        ...response.data()
      }
      context.commit('setSelectedProject', project)
    } else {
      throw new Error('Project could not found!')
    }
  },

  addProject (context, project) {
    projectsRef.add(project)
      .then(response => {
        const payload = new Project({
          id: response.id,
          ...project
        })
        context.commit('addProject', payload)
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}

export default actions
