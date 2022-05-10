import axios from "axios";

const state = {
  products: [],
  productError:"Crud error on product"
};
const getters = {
  allProducts: state => state.products,
  productItemById: (state) => (id) => {
    return state. allProducts.find( allProduct=>allProduct.id === id)
  },
  productError:(state)=>state.productError
};

const actions = {
   getproduct({ commit }) {
     return new Promise((resolve, reject) => {
     axios.get(`http://localhost:3000/product-list`).then((response) => {
       commit("setproduct", response.data);
          resolve(response);
      })
      .catch((error) => {
          commit("productError",error.productError);
          reject(error);
        });
});
},
 addproduct({ commit }, product) {
    return new Promise((resolve, reject) => {
       axios.post(`http://localhost:3000/product-add`, product ).then((response) => {
    commit("newproduct", response.data);
     resolve(response);
  })
  .catch((error) => {
          commit("productError",error.productError);
          reject(error);
        });
});
},
   deleteproduct({ commit }, id) {
    return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/product-delete/${id}`).then((response) => {
    commit("removeproduct", id);
    resolve(response);
    })
     .catch((error) => {
          commit("productError",error.productError);
          reject(error);
        });

});
},
  updateproduct({ commit }, id) {
   return new Promise((resolve, reject) => {
     axios.post(`http://localhost:3000/product-edit/${id}`).then((response) => {
    commit("updateproduct", id);
     resolve(response);
   })
   .catch((error) => {
          commit("productError",error.productError);
          reject(error);
        });
});
},
};

const mutations = {
  setproduct: (state, products) => (state.products = products),
  newproduct: (state, product) => state.products.unshift(product),
  removeproduct: (state, id) =>
    (state.products = state.products.filter(product => product.id !== id)),
  updateproduct: (state, id) =>
    (state.products = state.products.filter(product => product.id !== id)),
  productError: (state, productError) => {
    state.productError= productError;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
