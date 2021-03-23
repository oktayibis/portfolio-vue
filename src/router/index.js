import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/projects/:projectId',
    name: 'project-detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectDetail.vue'),
    props: true

  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blogs.vue')

  },
  {
    path: '/blogs/:blogId',
    name: 'blog-detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogDetail.vue'),
    props: true

  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
