export const signInToLocalStorage =(email,username,_id,token)=>{
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
    localStorage.setItem("_id", _id);
    localStorage.setItem("loggedIn", true);
};
export const getUserInformations = () =>{

    return {
        username:localStorage.getItem("username"),
        email:localStorage.getItem("email"),
        token:localStorage.getItem("token"),
        _id:localStorage.getItem("_id"),
        loggedIn:localStorage.getItem("loggedIn"),



    }
};
export const signOutFromLocalStorage =()=>{
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    localStorage.setItem("loggedIn", false);
};
