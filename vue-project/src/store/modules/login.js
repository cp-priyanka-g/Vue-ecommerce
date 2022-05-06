import axios from "axios";


const state = {
  Users: [],
  userError:"ERROR in LOGIN "

};

const getters = {
  getUsers: state => state.Users,
  error:state=>state.userError
};

const actions={
    getUsers({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:3000/login")
        .then((response) => {
          commit("GET_USER", response.data);
          resolve(response);
        })
        .catch((error) => {
          commit("GET_USER_ERROR", error);
          reject(error);
        });
    });
  }

}

const mutations = {
   GET_USER:(state,getUsers)=>{
    state.users=getUsers
    },
  GET_USER_ERROR:(state,userError)=>{
    state.userError=userError
  }

};

  export default {
  state,
  getters,
  actions,
  mutations
};