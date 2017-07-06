import React,{Component} from 'react'
import {signUpAPI,loginAPI} from 'usersAPI'
import Notifications from 'react-notification-system-redux';
import {loginUser} from 'actions';
import {connect} from 'react-redux';


import PropTypes from 'prop-types';

let notificationOpts = {
    title: '',
    message: '',
    position: 'tr',
    autoDismiss: 4,

};
class SignUp extends Component{
    constructor(props){
        super(props)
    }
    dispatchNotification(fn, timeout) {
        setTimeout(() => {
            this.context.store.dispatch(fn(notificationOpts));
        }, timeout);
    }

    handleSubmit(e){
        e.preventDefault();
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let username = this.refs.username.value;


        signUpAPI(email,password,username)
        .then((res)=>{
            notificationOpts.title = "Success"
            notificationOpts.message = "Welcome, Enjoy finding your new room"
            this.dispatchNotification(Notifications.success, 0);
            loginAPI(email,password)
                .then((res)=>{
                    var {dispatch} =  this.props;
                    dispatch(loginUser({
                        username:res.data.username,
                        email:res.data.email,
                        _id:res.data._id,
                        token:res.headers['x-auth'],
                    }))

            })



        }).catch((error)=>{
            notificationOpts.title = "Error"
            if (error.response.data.errmsg)
                notificationOpts.message = error.response.data.errmsg
            else if (error.response)
                notificationOpts.message = error.response.data.message
             else
                notificationOpts.message = error.message

            this.dispatchNotification(Notifications.error, 0);

        })


    }
    render(){
        const {notifications} = this.props;
        return(
            <div className="sign-up-page">
                <div className="circle">
                    <img src={require('../assets/images/logo.png')} alt=""/>

                </div>
                <form action="" >
                    <label htmlFor="email">Username</label>
                    <input type="text" name="username" ref='username'/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" ref='email'/>
                    <label htmlFor="password" >Password:</label>
                    <input type="password" name="password" ref='password'/>
                    <a  className="btn btn-full float-center    " href="#" onClick={this.handleSubmit.bind(this)}>Sign Up</a>
                </form>
                <Notifications notifications={notifications} />

            </div>
        )
    }
}
SignUp.contextTypes = {
    store: PropTypes.object
};

SignUp.propTypes = {
    notifications: PropTypes.array
};

export default connect(
    state => ({ notifications: state.notifications })
)(SignUp);
