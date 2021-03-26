<template>
<div class="contact">
<div class="top">
  <quotes>Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler</quotes>
  <h4>Contact me, let's solve the problem together.</h4>
</div>
  <el-form ref="form" :model="form" label-width="120px">
<el-form-item prop="name" label="Your name">
  <el-input v-model="form.name" placeholder="ex. John Doe"></el-input>
</el-form-item>
    <el-form-item prop="category" label="Select Category">
      <el-select v-model="form.category" placeholder="ex. Development">
        <el-option label="Development Request" value="Development"></el-option>
        <el-option label="Consultancy" value="Consultancy"></el-option>
        <el-option label="Like to Share Idea" value="Idea"></el-option>
        <el-option label="Not listed here" value="Other"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="subject" label="Subject">
      <el-input placeholder="ex. Freelance job offer" v-model="form.subject"></el-input>
    </el-form-item>
    <el-form-item prop="email" label="E-Mail">
      <el-input type="email" placeholder="ex. john@doe.com" v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item prop="content" label="Message">
      <el-input :autosize="{minRows:6}" type="textarea" v-model="form.content" placeholder="I like to work with you!"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button :loading="isLoading" type="primary" @click="onSubmit">Send</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import Quotes from '@/components/Quotes'
export default {
  name: 'Contact',
  components: { Quotes },
  data () {
    return {
      form: {
        name: '',
        subject: '',
        category: '',
        content: '',
        email: ''
      },
      isLoading: false
    }
  },
  methods: {
    async onSubmit () {
      this.isLoading = true
      try {
        await this.$store.dispatch('messages/addMessage', this.form)
        this.$message.success('Your massage has been send!')
        this.$refs.form.resetFields()
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
@import "./src/costum-theme.scss";

.contact {
  padding: 5% 10%;
  color: $--color-primary;

}
</style>
