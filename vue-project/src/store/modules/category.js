import axios from "axios";

const state={
    categories: []
  };
  const  getters ={
    allCategories:state =>state.categories
}
const actions = {
  async getCategories({ commit }) {
    const response = await axios.get("http://localhost:3000/category-list");

    commit("setCategory", response.data);
  },
  async addCategory({ commit }, product) {
    const response = await axios.post(
      "http://localhost:3000/category-add",
      product
    );

    commit("newCategory", response.data);
  },
  async deleteCategory({ commit }, id) {
    await axios.get(`http://localhost:3000/category-delete/${id}`);

    commit("removeCategory", id);
  },

 async updateCategory({ commit }, id) {
    await axios.post(`http://localhost:3000/category-edit/${id}`);

    commit("updateCategory", id);
  },
}
const mutations = {
  setCategory: (state,categories) => (state. categories = categories),
  newCategory: (state,category) => state.categories.unshift(category),
  removeCategory: (state, id) =>
    (state.categories = state.categories.filter(category => category.id !== id)),
  updateCategory: (state, id) =>
    (state. categories = state.categories.filter(category => category.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
