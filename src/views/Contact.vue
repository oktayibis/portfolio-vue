<template>
<div class="contact">
<div class="top">
  <p class="text">You can contact me whenever you want and share whatever comes to your mind. You won't be able to handle every job alone, don't be afraid to ask for help.
  </p>
  <el-divider></el-divider>
  <h4>Contact me, let's solve the problem together.</h4>
</div>
  <el-form ref="form" :model="form" label-width="120px">
<el-form-item label="Your name">
  <el-input v-model="form.name" placeholder="ex. John Doe"></el-input>
</el-form-item>
    <el-form-item label="Select Category">
      <el-select v-model="form.category" placeholder="ex. Development">
        <el-option label="Development Request" value="Development"></el-option>
        <el-option label="Consultancy" value="Consultancy"></el-option>
        <el-option label="Like to Share Idea" value="Idea"></el-option>
        <el-option label="Not listed here" value="Other"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Subject">
      <el-input placeholder="ex. Freelance job offer" v-model="form.subject"></el-input>
    </el-form-item>
    <el-form-item label="E-Mail">
      <el-input type="email" placeholder="ex. john@doe.com" v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="Message">
      <el-input :autosize="{minRows:6}" type="textarea" v-model="form.content" placeholder="I like to work with you!"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Send</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      form: {
        name: '',
        subject: '',
        category: '',
        content: '',
        email: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/costum-theme.scss";

.contact {
  padding: 5% 10%;

  .text {
    letter-spacing: 0.12rem;
    text-align: justify;
    margin-bottom: 20px;
  }
  h4 {
    letter-spacing: 0.12rem;
    margin-bottom: 20px;
    color: $--color-info;
    text-align: center;

  }
}
</style>
