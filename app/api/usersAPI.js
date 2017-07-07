import axios from 'axios'
export const signUpAPI = (email,password,username)=>{
    console.log(email,password,username)
   return axios({
        method: 'post',
        url: '/users/signup',
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
        url: '/users/login',
        data: {
            email,
            password,
        }
    });

}




