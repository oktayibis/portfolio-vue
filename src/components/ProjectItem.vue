<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-carousel height="200px">
      <el-carousel-item v-for="image in imageArray" :key="image">
        <el-image :src="image">
          <template #placeholder>
             <el-skeleton :loading="true" animated style="width: 100%">
               <template #template>
                 <el-skeleton-item
                   variant="image"
                   style="width: 100%; height: 200px;"
                 />
               </template>
             </el-skeleton>
          </template>
          <template #error>
            <div class="image-slot">
              <em class="el-icon-picture-outline"></em>
            </div>
          </template>
        </el-image>
      </el-carousel-item>
    </el-carousel>
    <div style="padding: 14px;">
      <span class="title">{{title}}</span>
      <div class="bottom">
        <router-link :to=goToDetail>
          <el-button>More Info</el-button>
        </router-link>
      </div>
    </div>
  </el-card>
</template>
<script>

export default {
  name: 'project-item',
  props: {
    imageArray: {
      type: Array,
      default () {
        return ['../assets/image-placeholder.png']
      }
    },
    title: {
      type: String,
      default: 'Perfect Project'
    },
    id: {
      type: String
    }
  },
  computed: {
    goToDetail () {
      return '/projects/' + this.id
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../costum-theme";

.time {
  font-size: 13px;
  color: #999;
}
.image {
  width: 100%;
  height: 100%;
  display: block;
}

.bottom {
  display: flex;
  justify-content: flex-end;
}

.image-slot {
 margin: auto;
  text-align: center;
}

.title {
  font-size: 1.2rem;
}
</style>
