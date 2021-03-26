import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/AdminLanding.vue'),
    meta: { auth: true },
    children: [
      {
        path: '/add-blog',
        name: 'admin-blog',
        meta: { auth: true },
        component: () => import('../views/admin/AddBlog')
      },
      {
        path: '/add-project',
        name: 'admin-project',
        meta: { auth: true },
        component: () => import('../views/admin/AddProject')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (store.getters.authStatus) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
