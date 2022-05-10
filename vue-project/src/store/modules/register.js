import axios from "axios";
import router from "@/router.js";

const state = {
  users: [],
  userError:"ERROR : Cannot register"
};
const getters = {
  getUsers: (state) => state.users,
  userError:(state)=>state.userError
};
const actions={
  get({ commit }) {
     return new Promise((resolve, reject) => {
     axios.get(`http://localhost:3000/login`).then((response) => {
       commit("set", response.data);
          resolve(response);
      })
      .catch((error) => {
          commit("SET_USER_ERROR",error.userError);
          reject(error);
        });
});
  },
    register({ commit },users) {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:3000/admin/register`,users)
        .then((response) => {
          commit("SET_USER", response.users);
          resolve(response);
          router.push('/admin-dashboard');

        })
        .catch((error) => {
          commit("SET_USER_ERROR",error.userError);
          reject(error);
        });
    });
  }
}

const mutations={
    SET_USER:(state,data)=>{
    state.users=data;
    },
    SET_USER_ERROR:(state,userError)=>{
    state.userError=userError;
  }
  
}
export default {
  state,
  getters,
  actions,
mutations
};