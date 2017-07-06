import axios from 'axios'
const baseUrl = 'http://localhost:3000'
export const signUpAPI = (email,password,username)=>{
    console.log(email,password,username)
   return axios({
        method: 'post',
        url: baseUrl + '/users/signup',
        data: {
            email,
            password,
            username,
        }
    });

}
export const loginAPI = (email,password)=>{
    console.log(email,password)
   return axios({
        method: 'post',
        url: baseUrl + '/users/login',
        data: {
            email,
            password,
        }
    });

}




