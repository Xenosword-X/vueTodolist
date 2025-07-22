import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Layout, // 登入版面
    children: [
      { path: '', component: () => import('../components/Login.vue') }
    ]
  },
  {
    path: '/register',
    component: Layout, // 註冊也用相同 Layout
    children: [
      { path: '', component: () => import('../components/Register.vue') }
    ]
  },
  {
    path: '/todo',
    component: () => import('../views/Todolist.vue') // 不使用 Layout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
