import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import Page404 from '../views/Page404.vue'
import AddPaymentForm from '../components/AddPaymentForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/dashboard/:page',
    name: 'DashBoardPage',
    component: DashBoard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/add/payment/:category',
    name: 'AddPaymentForm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddPaymentForm
  },
  {
    path:'*',
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const userAuthExists = true

router.beforeEach((to,from,next)=>{
  if(to.name !=='Page4004' && !userAuthExists){
    next({
      name:'Page404'
    })
  }else{
    next()
  }
})

export default router