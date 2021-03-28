<template>
  <base-container>
    <div>
      <h1>Add Project</h1>
      <el-form ref="project" :model="project" label-width="120px">
        <el-form-item prop="projectTitle" label="Title">
          <el-input v-model="project.projectTitle" placeholder="Title"></el-input>
        </el-form-item>
        <el-form-item prop="projectDemo" label="Demo Url">
          <el-input v-model="project.projectDemo" placeholder="Demo Url"></el-input>
        </el-form-item>
        <el-form-item prop="projectUrl" label="GitHub Url">
          <el-input type="text"  v-model="project.projectUrl" placeholder="Github Url"></el-input>
        </el-form-item>
        <el-form-item prop="projectContent" label="Description">
          <el-input :autosize="{minRows:6}" type="textarea" v-model="project.projectContent" placeholder="Description"></el-input>
        </el-form-item>
        <el-form-item prop="projectTags" label="Tags">
          <el-tag
            :key="tag"
            v-for="tag in project.projectTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag, 'tag')">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="tagInputVisible"
            v-model="tagInput"
            ref="saveTagInput"
            size="mini"
            @keyup.enter="handleInputConfirm($event, 'tag')"

          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput('tag')">+ New Skill</el-button>
        </el-form-item>
        <el-form-item prop="projectTeam" label="Team">
          <el-tag
            :key="tag"
            v-for="tag in project.projectTeam"
            closable
            :disable-transitions="false"
            @close="handleClose(tag, 'team')">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="teamInputVisible"
            v-model="teamInput"
            ref="saveTeamInput"
            size="mini"
            @keyup.enter="handleInputConfirm($event,'team')"

          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput('team')">+ New Member</el-button>

        </el-form-item>

        <el-form-item label="Images">
          <input type="file" @change="handleUpload" ref="upInput" accept="image/png, image/jpeg" />
          <el-progress :percentage="uploadedStatus"></el-progress>
          <p class="image-link" v-for="image in project.imagesURL" :key="image">{{image}}</p>
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
import { storage } from '@/store/firebase'

export default {
  name: 'AddProject',
  components: { BaseContainer },
  data () {
    return {
      project: {
        imagesURL: [],
        projectContent: '',
        projectDemo: '',
        projectTags: [],
        projectTeam: [],
        projectTitle: '',
        projectUrl: ''
      },
      isLoading: false,
      tagInputVisible: false,
      teamInputVisible: false,
      tagInput: '',
      teamInput: '',
      uploadedStatus: 0
    }
  },
  methods: {
    handleClose (tag, type) {
      if (type === 'team') {
        this.project.projectTeam.splice(this.project.projectTeam.indexOf(tag), 1)
      } else {
        this.project.projectTags.splice(this.project.projectTags.indexOf(tag), 1)
      }
    },
    showInput (type) {
      if (type === 'tag') {
        this.tagInputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      } else {
        this.teamInputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTeamInput.$refs.input.focus()
        })
      }
    },
    handleInputConfirm (event, type) {
      const inputValue = event.target.value

      if (inputValue) {
        if (type === 'team') {
          this.project.projectTeam.push(inputValue)
          this.teamInputVisible = false
          this.teamInput = ''
        } else {
          this.project.projectTags.push(inputValue)
          this.tagInputVisible = false
          this.tagInput = ''
        }
      }
    },
    handleUpload (event) {
      const ref = storage.ref()
      const image = event.target.files[0]
      const uploadTask = ref.child(`images/${this.project.projectTitle}-${image.name}`)
        .put(image)
      uploadTask.on('state_changed', snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        this.uploadedStatus = progress
      }, error => {
        this.$message.error(error.message)
      }, async () => {
        const url = await uploadTask.snapshot.ref.getDownloadURL()
        this.project.imagesURL.push(url)
        this.$message.success('Your image uploaded')
        this.uploadedStatus = 0
      })
    },
    async onSubmit () {
      this.isLoading = true
      try {
        await this.$store.dispatch('projects/addProject', this.project)
        this.$message.success('Your project added')
        this.clearProject()
      } catch (e) {
        this.$message.error(e.message)
      } finally {
        this.isLoading = false
      }
    },
    clearProject () {
      this.project = {
        imagesURL: [],
        projectContent: '',
        projectDemo: '',
        projectTags: [],
        projectTeam: [],
        projectTitle: '',
        projectUrl: ''
      }
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
.image-link {
  text-decoration: none;
  font-size: 0.6rem;
  color: #343f56;
}
</style>
