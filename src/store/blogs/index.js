import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
  namespaced: true,

  state () {
    return {
      blogs: [
        {
          id: '1',
          title: 'Lorem Ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra efficitur blandit.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra efficitur blandit. Fusce accumsan feugiat mi sed ullamcorper. Vestibulum massa dolor, ultrices sed mattis a, varius at mauris. Etiam porttitor sapien et dui pellentesque congue. Phasellus ac lacus luctus, convallis libero tristique, cursus est. Fusce vulputate lorem sit amet mi laoreet, sed suscipit ipsum fringilla. Nulla at laoreet orci.',
          date: '20/10/2020',
          tags: ['react', 'software']

        },
        {
          id: '2',
          title: 'Ipsum Lorem',
          description: 'Sed hendrerit odio ultrices dui vehicula tincidunt. Nulla facilisi. ',
          content: 'Aenean sed est orci. Etiam vel aliquam lorem, et lobortis odio. Sed hendrerit euismod elementum. Sed ante felis, porttitor mattis accumsan vitae, molestie et dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum elit magna, in varius augue aliquet posuere. Nulla vel turpis at metus scelerisque ultrices.',
          date: '12/10/2020',
          tags: ['react', 'software']

        }

      ]
    }
  },
  mutations,
  actions,
  getters
}
