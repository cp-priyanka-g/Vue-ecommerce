import axios from "axios";

const state = {

  subcategory: {},
  subcategoryError:"Crud error on product"
};
const getters = {
  getsubcategory: state => state.products,
  subcategoryItemById: (state) => (sid) => {
    return state.subcategory.find( SubCategory=>SubCategory.sid === sid)
  },
   editsubcategories:(state)=>state.subcategory,
  subcategoryError:(state)=>state.subcategoryError
};

const actions = {
   getsubcategory({ commit }) {
     return new Promise((resolve, reject) => {
     axios.get(`http://localhost:3000/subcategory-list`).then((response) => {
       commit("setsubcategory", response.data);
          resolve(response);
      })
      .catch((error) => {
          commit("subcategoryError",error.subcategoryError);
          reject(error);
        });
});
},
 showsubcategory({ commit }) {
     return new Promise((resolve, reject) => {
     axios.get(`http://localhost:3000/subcategory-show`).then((response) => {
       commit("setsubcategory", response.data);
          resolve(response);
      })
      .catch((error) => {
          commit("subcategoryError",error.subcategoryError);
          reject(error);
        });
});
},
 addsubcategory({ commit }, subcategory) {
    return new Promise((resolve, reject) => {
    axios.post(`http://localhost:3000/subcategory-add`,subcategory ).then((response) => {
    commit("newsubcategory", response.data);
     resolve(response);
  })
    .catch((error) => {
          commit("subcategoryError",error.subcategoryError);
          reject(error);
        });
});
},
   deletesubcategory({ commit }, id) {
    return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/subcategory-delete/${id}`).then((response) => {
    commit("removesubcategory", id);
    resolve(response);
    })
         .catch((error) => {
          commit("subcategoryError",error.subcategoryError);
          reject(error);
        });

});
},
  editsubcategory({ commit }, id) {
   return new Promise((resolve, reject) => {
     axios.get(`http://localhost:3000/subcategory-edit/${id}`).then((response) => {
    commit("updatesubcategory", id);
     resolve(response);
   })
      .catch((error) => {
          commit("subcategoryError",error.subcategoryError);
          reject(error);
        });
});
},
  updatesubcategory({ commit }, id) {
   return new Promise((resolve, reject) => {
     axios.post(`http://localhost:3000/subcategory-edit/${id}`).then((response) => {
    commit("updatesubcategory", id);
     resolve(response);
   })
      .catch((error) => {
          commit("subcategoryError",error.subcategoryError);
          reject(error);
        });
});
},
};

const mutations = {
  setsubcategory: (state, products) => (state.products = products),
  newsubcategory: (state, product) => state.products.unshift(product),
  removesubcategory: (state, id) =>
    (state.products = state.products.filter(product => product.id !== id)),
  updatesubcategory: (state, subcategory) =>
   state.subcategory = state.subcategory.map((subcategory) => {
        if (products.id ==subcategory.id) {
          return subcategory;
        }
      }),
 subcategoryError: (state, subcategoryError) => {
    state.subcategoryError= subcategoryError;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
