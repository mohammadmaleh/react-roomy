/**
 * Created by mohammadmaleh on 11/07/2017.
 */
export default  function(state = {},action){

    switch (action.type){


        case "LOGIN_USER":{
            let username = action.userData.username;
            let email = action.userData.email;
            let _id = action.userData._id;
            let token = action.userData.token;

            return  {
                ...state,
                username,
                email ,
                _id,
                token,
                loggedIn:true
            }


        }
        case "LOGOUT_USER":{
            return  {
                ...state,
                username:null,
                email :null ,
                _id :null ,
                token:null,
                loggedIn:false
            }

        }
        default :{

            return state
        }

    }

}
