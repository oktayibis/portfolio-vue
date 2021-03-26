import { db } from '@/store/firebase'
import Message from '@/classes/Message'

const messagesRef = db.collection('messages')

const actions = {

  async getMessages (context) {
    const data = []
    await messagesRef.onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        const item = new Message({
          id: doc.id,
          ...doc.data()
        })
        data.push(item)
      })
      console.log(data)
      context.commit('setMessages', data)
    }, error => {
      throw new Error(error)
    })
  },

  async addMessage (context, payload) {
    messagesRef.add(payload)
      .then(response => {
        const message = new Message({
          id: response.id,
          ...payload
        })
        context.commit('addMessage', message)
      })
      .catch(err => {
        throw new Error(err)
      })
  }

}

export default actions
