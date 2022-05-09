import axios from "axios";

const state = {
  products: []
};
const getters = {
  allProducts: state => state.products
};
const actions = {
  async getProducts({ commit }) {
    const response = await axios.get("http://localhost:3000/product-list");

    commit("setProducts", response.data);
  },
  async addProduct({ commit }, product) {
    const response = await axios.post(
      "http://localhost:3000/product-add",
      product
    );

    commit("newProduct", response.data);
  },
  async deleteProduct({ commit }, id) {
    await axios.get(`http://localhost:3000/product-delete/${id}`);

    commit("removeProduct", id);
  },

 async updateProduct({ commit }, id) {
    await axios.post(`http://localhost:3000/product-edit/${id}`);

    commit("updateProduct", id);
  },
}


const mutations = {
  setProducts: (state, products) => (state.products = products),
  newProduct: (state, product) => state.products.unshift(product),
  removeProduct: (state, id) =>
    (state.products = state.products.filter(product => product.id !== id)),
  updateProduct: (state, id) =>
    (state.products = state.products.filter(product => product.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
