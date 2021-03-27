<template>
  <h2>My Messages</h2>
  <message-item v-for="message in getMessages" :message="message" :key="message.id"></message-item>
</template>

<script>
import MessageItem from '@/components/MessageItem'

export default {
  name: 'MessagesList',
  components: { MessageItem },
  created () {
    this.loadMessages()
  },
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    getMessages () {
      return this.$store.getters['messages/getMessages']
    }
  },
  methods: {
    async loadMessages () {
      this.isLoading = true
      try {
        this.$store.dispatch('messages/getMessages')
      } catch (e) {
        this.$message.error(e.message)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>

</style>
