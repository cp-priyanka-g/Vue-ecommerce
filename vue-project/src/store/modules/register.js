import axios from "axios";


const state = {
  users: [],
  userError:"ERROR : Cannot register"
};
const getters = {
  addUsers: state => state.users,
  userError:state=>state.userError
};
const actions={
    addUsers({ commit },users) {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:3000/register",users)
        .then((response) => {
          commit("SET_USER", response.data);
          resolve(response);
        })
        .catch((error) => {
          commit("SET_USER_ERROR", userError);
          reject(error);
        });
    });
  }

}
const mutations={

    SET_USER:(state,data)=>{
    state.users=data
    },
    SET_USER_ERROR:(state,userError)=>{
    state.userError=userError
  }
}
export default {
  state,
  getters,
  actions,
mutations
};