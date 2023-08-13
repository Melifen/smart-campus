import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('../views/Login.vue')
const Home = () => import('../views/Home/Home.vue')
const SProfile = () => import('../views/Info/sProfile.vue')
const SViolation = () => import('../views/Info/sViolation.vue')
const MInfo = () => import ('../views/Info/mInfo.vue')
const StuTransfer = () => import('../views/Approval/Stransfer.vue')
const StuAssistance = () => import('../views/Approval/Sassistance.vue')
const Dinfmgr = () => import('../views/Dormitory/Dinfmgr.vue')
const Dfix = () => import('../views/Dormitory/Dfix.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component:Login
    },
    {
      path: '/home',
      component:Home
    },
    {
      path:'/studentInfo',
      component:SProfile
    },
    {
      path: '/studentViolation',
      component:SViolation
    },
    {
      path: '/adminInfo',
      component:MInfo
    },
    {
      path:'/stutransfer',
      component: StuTransfer
    },
    {
      path:'/sassistance',
      component: StuAssistance
    },
    {
      path:'/dormitoryinfo',
      component: Dinfmgr
    },
    {
      path:'/dormitoryfix',
      component: Dfix
    }

  ]
})

export default router
