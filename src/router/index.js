import Vue from 'vue'
import VueRouter from 'vue-router'
import MyTeams from '@/pages/MyTeams'
import NotFound from '@/pages/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MyTeams
  },
  {
    path: '/about',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: "history",
  routes,
  linkExactActiveClass: 'active-link'
})

export default router
