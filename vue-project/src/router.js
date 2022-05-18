import {createRouter,createWebHistory} from 'vue-router'
import SignupForm from '@/components/Admin/SignUp.vue'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Product from '@/components/Admin/Products/Product.vue'
import AddProduct from '@/components/Admin/Products/Add.vue'
import AdminDashboard from '@/components/Admin/Dashboard.vue'
import AddCategory from '@/components/Admin/Categories/Add.vue'
import Category from '@/components/Admin/Categories/Category.vue'
import AddSubcategory from '@/components/Admin/Subcategories/Add.vue'
import Subcategory from '@/components/Admin/Subcategories/Subcategory.vue'
import UserDashboard from '@/components/User/Dashboard.vue'
import ShowProduct from '@/components/User/Product/Show.vue'
import ProductByCategory from '@/components/User/Product/ByCategory.vue'
import ProductBySubCategory from '@/components/User/Product/BySubcategory.vue'
import ShowCategory from '@/components/User/Category/Show.vue'
import ShowSubCategory from '@/components/User/SubCategory/Show.vue'
import SearchByName from '@/components/User/Search/ByName.vue'
import SearchByPrice from '@/components/User/Search/ByPrice.vue'
import SearchByCategory from '@/components/User/Product/ByCategory.vue'
import SearchBySubCategory from '@/components/User/Product/BySubcategory.vue'
import AddFavourite  from '@/components/User/Favourites/Add.vue'
import ShowFavourite from '@/components/User/Favourites/Favourite.vue'
import UserSignupForm  from '@/components/User/SignUp.vue'
import SendEmail  from '@/components/User/SendEmail.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'signup',
    component:SignupForm 
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
   {
    path: '/user-dashboard',
    name: 'userdashboard',
    component: UserDashboard
  },
    {
    path: '/show-product',
    name: 'show-product',
    component: ShowProduct
  },
    {
    path: '/product-by-category',
    name: 'product-by-category',
    component: ProductByCategory
  },
     {
    path: '/product-by-subcategory',
    name: 'product-by-subcategory',
    component: ProductBySubCategory
  },
      {
    path: '/show-category',
    name: 'show-category',
    component: ShowCategory
  },
      {
    path: '/show-subcategory',
    name: 'show-subcategory',
    component: ShowSubCategory
  },
   {
    path: '/search-by-name',
    name: 'search-by-name',
    component: SearchByName
  },

  {
    path: '/search-by-price',
    name: 'search-by-price',
    component: SearchByPrice
  },
   {
    path: '/search-category',
    name: 'search-category',
    component: SearchByCategory
  },
   {
    path: '/search-subcategory',
    name: 'search-subcategory',
    component: SearchBySubCategory
  },
  {
    path: '/add-favourite',
    name: 'add-favourite',
    component: AddFavourite
  },
  {
    path: '/show-favourite',
    name: 'show-favourite',
    component:ShowFavourite
  },
    {
    path: '/user-register',
    name: 'user-signup',
    component: UserSignupForm
  },
{
    path: '/send-mail',
    name: 'sendmail',
    component:SendEmail
  },
]
const router=createRouter({
  history: createWebHistory(),
  routes
})

export default router