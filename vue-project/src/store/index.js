import { createStore } from 'vuex'

import products from "./modules/products"
import register from "./modules/register"
import login from "./modules/login"

export default createStore({
  modules: {
    products,
    register,
    login
  }
});

