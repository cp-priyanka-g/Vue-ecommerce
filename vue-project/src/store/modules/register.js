
import axios from "axios";
const state = {
  users: [],
  userError:"ERROR : Cannot register"
};
const getters = {
  getUsers: (state) => state.users,
  userError:(state)=>state.userError
};
const actions={
  getUser({ commit },users) {
     return new Promise((resolve, reject) => {
     axios.get(`http://localhost:3000/login`,users).then((response) => {
       this.$session.start();
       commit("SET_USER", response.data);
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


        })
        .catch((error) => {
          commit("SET_USER_ERROR",error.userError);
          reject(error);
        });
    });
  },
     userregister({ commit },users) {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:3000/register`,users)
        .then((response) => {
          commit("SET_USER", response.users);
          resolve(response);


        })
        .catch((error) => {
          commit("SET_USER_ERROR",error.userError);
          reject(error);
        });
    });
  },
   logout({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:3000/logout`)
        .then((response) => {
         
          commit("LOG_OUT");
          resolve(response);

        })
        .catch((error) => {
          commit("SET_USER_ERROR",error.userError);
          reject(error);
        });
    });
  },
  
}

const mutations={
    SET_USER:(state,data)=>{
    state.users=data;
    },
    SET_USER_ERROR:(state,userError)=>{
    state.userError=userError;
  },
    LOG_OUT:(state)=>{
    state.users;
    },
  
}
export default {
  state,
  getters,
  actions,
mutations
};