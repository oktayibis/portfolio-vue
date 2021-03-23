import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,
  state () {
    return {
      projects: [
        {
          id: '1',
          title: 'Project 1',
          images: ['https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664_1280.jpg', 'https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg'],
          date: '20/10/2020'
        },
        {
          id: '2',
          title: 'Project 2',
          images: ['https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png'],
          date: '20/10/2022'
        },
        {
          id: '3',
          title: 'Project 3',
          images: ['https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png'],
          date: '20/10/2022'
        },
        {
          id: '4',
          title: 'Project 4',
          images: ['https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png'],
          date: '20/10/2022'
        }
      ]
    }
  },
  mutations,
  actions,
  getters
}
