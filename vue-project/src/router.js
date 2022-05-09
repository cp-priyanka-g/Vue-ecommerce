import {createRouter,createWebHistory} from 'vue-router'
import SignupForm from '@/components/SignUp.vue'
import Login from '@/components/Login.vue'
import Test from '@/components/Test/test.vue'
import Home from '@/components/Home.vue'
import Product from '@/components/Admin/Product/Product.vue'
import AddProduct from '@/components/Admin/Product/AddProduct.vue'
import  AdminDashboard from '@/components/Admin/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
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
    path: '/admin-dashboard',
    name: 'admindashboard',
    component: AdminDashboard
  },
    {
    path: '/product-list',
    name: 'product-list',
    component: Product
  },
     {
    path: '/product-add',
    name: 'product-add',
    component: AddProduct
  }
  //   {
  //   path: '/test',
  //   name: 'test',
  //   component: Test
  // }
   
]

const router=createRouter({
  history: createWebHistory(),
  routes
})

export default router