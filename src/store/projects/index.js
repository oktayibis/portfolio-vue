import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,
  state () {
    return {
      projects: [],
      selectedProject: null
    }
  },
  mutations,
  actions,
  getters
}

/* {
  id: '1',
  projectTitle: 'Project 1',
  imagesURL: ['https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664_1280.jpg', 'https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg'],
  date: '20/10/2020',
  projectTags: ['React', 'Context'],
  projectTeam: ['Oktay İbiş', 'Burak Sürmen'],
  projectUrl: 'https://github.com',
  projectDemo: 'https://github.com',
  projectContent: 'Front End Development using with Rect and Context. It has many tables and charts, auth, and role structure behind it.'
},
{
  id: '2',
  projectTitle: 'Project 2',
  imagesURL: ['https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png', 'https://cdn.pixabay.com/photo/2016/11/29/09/27/electronics-1868708_1280.jpg'],
  date: '20/10/2022',
  projectTags: ['React', 'Context'],
  projectTeam: ['Oktay İbiş', 'Burak Sürmen'],
  projectUrl: 'https://github.com',
  projectDemo: 'https://github.com',
  projectContent: 'Front End Development using with Rect and Context. It has many tables and charts, auth, and role structure behind it.'

},
{
  id: '3',
  projectTitle: 'Project 3',
  imagesURL: ['https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png', 'https://cdn.pixabay.com/photo/2015/01/20/14/27/office-605503_1280.jpg', 'https://cdn.pixabay.com/photo/2017/01/04/20/15/web-design-1953128_1280.jpg'],
  date: '20/10/2022',
  projectTags: ['React', 'Firebase'],
  projectTeam: ['Oktay İbiş', 'Burak Sürmen'],
  projectUrl: 'https://github.com',
  projectDemo: 'https://github.com',
  projectContent: 'Front End Development using with Rect and Context. It has many tables and charts, auth, and role structure behind it.'

},
{
  id: '4',
  projectTitle: 'Project 4',
  imagesURL: ['https://cdn.pixabay.com/photo/2016/09/08/04/12/programmer-1653351_1280.png', 'https://cdn.pixabay.com/photo/2016/08/20/06/44/e-commerce-1606962_1280.png', 'https://cdn.pixabay.com/photo/2017/01/04/20/15/web-design-1953128_1280.jpg'],
  date: '20/10/2022',
  projectTags: ['Angular', 'Context'],
  projectTeam: ['Oktay İbiş', 'Burak Sürmen'],
  projectUrl: 'https://github.com',
  projectDemo: 'https://github.com',
  projectContent: 'Front End Development using with Rect and Context. It has many tables and charts, auth, and role structure behind it.'

} */
