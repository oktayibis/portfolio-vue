import { db } from '@/store/firebase'
import Blog from '@/classes/Blog'
const postRef = db.collection('posts')
const actions = {

  async fetchBlogs (context) {
    // Get all blogs from database
    const data = []
    await postRef.onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        const payload = new Blog({ id: doc.id, ...doc.data() })
        data.push(payload)
      })
      context.commit('setAllBlog', data)
    }, error => {
      throw new Error(error)
    })
  },
  async getBlogById (context, blogId) {
    const response = await postRef.doc(blogId).get()

    if (response.exists) {
      const blog = new Blog({
        id: response.id,
        ...response.data()
      })
      context.commit('setSelectedBlog', blog)
    } else {
      throw new Error('There is no blog found!')
    }
  },
  async addBlog (context, blogPost) {
    const payload = { ...blogPost }
    postRef.add(payload)
      .then(response => {
        const blog = new Blog({
          id: response.id,
          ...blogPost
        })
        context.commit('addBlog', blog)
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}

export default actions
