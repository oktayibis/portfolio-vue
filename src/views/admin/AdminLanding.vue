<template>
<div class="landing-container">
  <BaseContainer>
    <h2>My Messages</h2>
    <message-item v-for="message in getMessages" :message="message" :key="message.id"></message-item>
  </BaseContainer>
</div>
</template>

<script>
import BaseContainer from '@/UI/BaseContainer'
import MessageItem from '@/components/MessageItem'
export default {
  name: 'AdminLanding',
  components: { MessageItem, BaseContainer },
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

<style lang="scss" scoped>
.landing-container {
  padding: 1% 5%;
}
</style>
