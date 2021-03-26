class Message {
  constructor ({ id, name, category, content, subject, email }) {
    this.id = id
    this.name = name
    this.subject = subject
    this.category = category
    this.content = content
    this.email = email
  }
}

export default Message
