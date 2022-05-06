import {createRouter,createWebHistory} from 'vue-router'
import SignupForm from '@/components/SignUp.vue'
import Login from '@/components/Login.vue'
import Product from '@/components/Product/Products.vue'


const routes = [
  {
    path: '/register',
    name: 'signup',
    component: SignupForm
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
    {
    path: '/products',
    name: 'products',
    component: Product
  }
   
]

const router=createRouter({
  history: createWebHistory(),
  routes
})

export default router