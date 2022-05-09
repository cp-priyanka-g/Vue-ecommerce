import router from '@/router.js'
import Axios from 'axios';
export function login({ commit })
 {
    let url = 'http://localhost:3000/login';
    Axios.get(url).then(function (response) {
        let userData = {
            displayName: response.data.results[0].name,
            email: response.data.results[0].email,
            uid: response.data.results[0].id
        }
        commit("setUserData", userData)
        router.push('/admin-dashboard')
    })
        .catch(function (error) {
            console.log(error)
        });
}

