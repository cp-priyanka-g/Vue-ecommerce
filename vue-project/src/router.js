import {createRouter,createWebHistory} from 'vue-router'
import SignupForm from '@/components/SignUp.vue'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Product from '@/components/Admin/Product/Product.vue'
import AddProduct from '@/components/Admin/Product/AddProduct.vue'
import AdminDashboard from '@/components/Admin/Dashboard.vue'
import AddCategory from '@/components/Admin/Categories/AddCategory.vue'
import Category from '@/components/Admin/Categories/Category.vue'
import AddSubcategory from '@/components/Admin/Subcategory/AddSubcategory.vue'
import Subcategory from '@/components/Admin/Subcategory/Subcategory.vue'

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
  },
   {
    path: '/category-add',
    name: 'category-add',
    component: AddCategory
  },
  {
    path: '/category-list',
    name: 'category-list',
    component: Category
  },
  {
    path: '/subcategory-add',
    name: 'subcategory-add',
    component: AddSubcategory
  },
    {
    path: '/subcategory-list',
    name: 'subcategory-list',
    component: Subcategory
  },
]

const router=createRouter({
  history: createWebHistory(),
  routes
})

export default router