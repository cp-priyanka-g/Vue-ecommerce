import { createStore } from 'vuex'
import register from "./modules/register"
import products from './modules/products.js'
import category from './modules/category.js'
import subcategory from './modules/subcategory.js'

export default createStore({
  modules: {
    register,
    products,
    category,
    subcategory
  }
});

