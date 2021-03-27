<template>
<div>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="5">
        <h4>Name</h4>
      </el-col>
      <el-col :span="5">
        <h4>E-Mail</h4>
      </el-col>
      <el-col :span="5">
        <h4>Subject</h4>
      </el-col>
      <el-col :span="5">
        <h4>Category</h4>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="5">
        <p>{{message.name}}</p>
      </el-col>
      <el-col :span="5">
        <p>{{message.email}}</p>
      </el-col>
      <el-col :span="5">
        <p>{{message.subject}}</p>
      </el-col>
      <el-col :span="5">
        <p>{{message.category}}</p>
      </el-col>
      <el-divider></el-divider>
      <el-col :span="24">
        <p>{{message.content}}</p>
      </el-col>
    </el-row>
  </el-card>
  <el-divider></el-divider>
</div>
</template>

<script>
import Message from '@/classes/Message'

export default {
  name: 'MessageItem',
  props: {
    message: {
      type: Message
    }
  }
}
</script>
