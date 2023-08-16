import axios from "axios";

const state={
     categories: {},
    categoryError:"Crud error on product"
  };
  const  getters ={
  allCategories:state =>state.categories,
   categoryItemById: (state) => (cid) => {
    return state.category.find( Category=>Category.cid === cid)
  },
   editcategories:(state)=>state.categories,
  categoryError:(state)=>state.categoryError
    
}
const actions = {
   getcategory({ commit }) {
     return new Promise((resolve, reject) => {
    const response =  axios.get("http://localhost:3000/category-list").then((response) => {
    commit("setcategory", response.data);
    resolve(response);
  })
  .catch((error) => {
          commit("categoryError",error.categoryError);
          reject(error);
        });
});
},
   showcategory({ commit }) {
     return new Promise((resolve, reject) => {
    const response =  axios.get("http://localhost:3000/category-show").then((response) => {
    commit("setcategory", response.data);
    resolve(response);
  })
  .catch((error) => {
          commit("categoryError",error.categoryError);
          reject(error);
        });
});
},
  addcategory({ commit }, product) {
    return new Promise((resolve, reject) => {
    const response =  axios.post(
      "http://localhost:3000/category-add",
      product
    ).then((response) => {
    commit("newcategory", response.data);
    resolve(response);
    })
     .catch((error) => {
          commit("categoryError");
          reject(error);
        });
  });
  },
   deletecategory({ commit }, id) {
     return new Promise((resolve, reject) => {
     const response = axios.get(`http://localhost:3000/category-delete/${id}`).then((response) => {
    commit("removecategory", id);
    resolve(response);
     })   
      .catch((error) => {
          commit("categoryError", error.categoryError);
          reject(error);
        });
      });
},
  editcategory({ commit }, cid) {
     return new Promise((resolve, reject) => {
     axios.get(`http://localhost:3000/category-edit/${cid}`).then((response) => {
    commit("updatecategory",cid);
    resolve(response);
  })
  .catch((error) => {
          commit("categoryError", error.categoryError);
          reject(error);
        });
      });  
},
  updatecategory({ commit }, id) {
     return new Promise((resolve, reject) => {
     axios.post(`http://localhost:3000/category-edit/${id}`).then((response) => {
    commit("updatecategory", id);
    resolve(response);
  })
  .catch((error) => {
          commit("categoryError", error.categoryError);
          reject(error);
        });
      });  
}
};

const mutations = {
  setcategory: (state,categories) => (state. categories = categories),
  newcategory: (state,category) => state.categories.unshift(category),
  removecategory: (state, id) =>
    (state.categories = state.categories.filter(category => category.id !== id)),
  updatecategory: (state, category) =>
   state.categories= state.categories.map((categories) => {
        if (categories.id == category.id) {
          return category;
        }
      }),
  categoryError: (state, categoryError) => {
    state.categoryError= categoryError;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
