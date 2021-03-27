<template>
<base-container>
  <div>
  <h1>Add Blog</h1>
  <el-form ref="form" :model="blog" label-width="120px">
    <el-form-item prop="title" label="Title">
      <el-input v-model="blog.blogTitle" placeholder="ex. Title"></el-input>
    </el-form-item>
    <el-form-item prop="blogSubTitle" label="Sub Title">
      <el-input v-model="blog.blogSubTitle" placeholder="ex. Subtitle"></el-input>
    </el-form-item>
    <el-form-item prop="blogTags" label="Tags">
      <el-tag
        :key="tag"
        v-for="tag in blog.blogTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="mini"
        @keyup.enter="handleInputConfirm"

      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </el-form-item>
    <el-form-item prop="blogUrl" label="Message">
      <el-input type="text"  v-model="blog.blogUrl" placeholder="Picture Url"></el-input>
    </el-form-item>
    <el-form-item prop="blogContent">
      <quill-editor ref="editor" theme="snow"></quill-editor>
    </el-form-item>
    <el-form-item>
      <el-button :loading="isLoading" type="primary" @click="onSubmit">Send</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>

  </el-form>
  </div>
</base-container>
</template>

<script>
import BaseContainer from '@/UI/BaseContainer'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
export default {
  name: 'AddBlog',
  components: { BaseContainer, QuillEditor },
  data () {
    return {
      blog: {
        blogTitle: '',
        blogSubTitle: '',
        blogContent: '',
        blogTags: [],
        blogUrl: ''
      },
      isLoading: false,
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    async onSubmit () {
      this.blog.blogContent = this.$refs.editor.getHTML()
      this.isLoading = true

      try {
        await this.$store.dispatch('blogs/addBlog', this.blog)
        this.$message.success('Your blog has been saved!')
        await this.$router.push('/blogs')
      } catch (e) {
        this.$message.error(e.message)
      } finally {
        this.isLoading = false
      }
    },
    handleClose (tag) {
      this.blog.blogTags.splice(this.blog.blogTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm (event) {
      const inputValue = event.target.value
      if (inputValue) {
        this.blog.blogTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }

  }
}
</script>

<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
