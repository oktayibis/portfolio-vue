<template>
<div class="form-container">
  <el-form @submit="submitForm" ref="form" :rules="rules" :model="form" label-width="120px">
    <el-form-item required prop="email" label="E-Mail">
      <el-input placeholder="Ex. test@test.com"  v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item required prop="password" label="Password">
      <el-input placeholder="Please input password" v-model="form.password" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button  @click="submitForm('form')" type="primary">Giriş</el-button>
    </el-form-item>
  </el-form>
</div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: { required: true, message: 'Please enter your email', trigger: 'blur' },
        password: { required: true, message: 'Please enter your password', trigger: 'blur' }
      },
      isLoading: false
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login()
        } else {
          this.$message({
            message: 'Please enter your e-mail and password correctly',
            type: 'error'
          })
          return false
        }
      })
    },
    async login () {
      this.isLoading = true
      try {
        await this.$store.dispatch('login', this.form)
        this.$router.replace('/admin/')
      } catch (e) {
        this.$message.error(e.message)
        this.$refs.form.resetFields()
      } finally {
        this.isLoading = false
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-container {
  margin: 10%;
}
</style>
