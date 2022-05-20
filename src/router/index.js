import Vue from 'vue'
import VueRouter from 'vue-router'
import MyTeams from '@/pages/MyTeams'
import NotFound from '@/pages/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'my-teams' } // <- deploy Github => correspond on localhpst:8080
  },
  {
    path: '/search-teams/',
    redirect: { name: 'my-teams' } // <- deploy Github
  },
  {
    path: '/search-teams/my-teams',
    name: 'my-teams',
    component: MyTeams
  },
  {
    path: '/search-teams/about',
    name: 'about',
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
