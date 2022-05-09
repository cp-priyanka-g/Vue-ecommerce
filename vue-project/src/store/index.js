import { createStore } from 'vuex'

// import test from "./modules/test"
import register from "./modules/register"
import account from './modules/account'
import products from './modules/products.js'


export default createStore({
  modules: {
    // test,
    register,
    products,
     account
  }
});

