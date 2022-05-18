import axios from "axios";

const state = {
  products: {},
  favourite:[],
  productError:"Crud error on product"
};
const getters = {
  allfavourite: state => state.favourite,
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
              resolve(response.data);
              console.log(response)
      })
      .catch((error) => {
          commit("productError",error.productError);
          reject(error);
        });
});
},
   showproduct({ commit }) {
     return new Promise((resolve, reject) => {
     axios.get(`http://localhost:3000/product-show`).then((response) => {
       commit("setproduct", response.data);
          resolve(response);
      })
      .catch((error) => {
          commit("productError",error.productError);
          reject(error);
        });
});
},
   showproductbycategory({ commit }) {
     return new Promise((resolve, reject) => {
     axios.get(`http://localhost:3000/search-category`).then((response) => {
       commit("setproduct", response.data);
          resolve(response);
      })
      .catch((error) => {
          commit("productError",error.productError);
          reject(error);
        });
});
},
   showproductbysubcategory({ commit }) {
     return new Promise((resolve, reject) => {
     axios.get(`http://localhost:3000/search-subcategory`).then((response) => {
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
 addfavourite({ commit }, id,product) {
    return new Promise((resolve, reject) => {
       axios.post(`http://localhost:3000/favourite-add/${id}`,product).then((response) => {
    commit("newproduct", response.data);
     resolve(response);
  })
  .catch((error) => {
          commit("productError",error.productError);
          reject(error);
        });
});
},
   deletefavourite({ commit }, id) {
    return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/favourite-delete/${id}`).then((response) => {
    commit("removeproduct", id);
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
   searchbyname({ commit },product) {
     return new Promise((resolve, reject) => {
     axios.get(`http://localhost:3000/search-byname`,product).then((response) => {
       console.log(response)
       commit("setproduct", response.data);
          resolve(response);
      })
      .catch((error) => {
        console.log(error)
          commit("productError",error.productError);
          reject(error);
        });
});
},
   searchbyprice({ commit },product) {
     return new Promise((resolve, reject) => {
     axios.get(`http://localhost:3000/search-byprice`,product).then((response) => {
       console.log(response)
       commit("setproduct", response.data);
          resolve(response);
      })
      .catch((error) => {
         console.log(error)
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
    state.products = state.products,
  updateproduct: (state, id) =>
    state.products = state.products,
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
