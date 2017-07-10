/**
 * Created by mohammadmaleh on 29/05/2017.
 */
import React, { Component } from 'react';

import SignInButton from 'SignInButton';
var SignUpButton = require('SignUpButton');
import SignOutButton from 'SignOutButton'
import PostRoomButton from 'PostRoomButton'
import {subscribe} from 'redux-subscriber';

var {connect} =   require('react-redux');
import {Link}from 'react-router-dom'



class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            loggedIn:this.props.loginUser.loggedIn

        } ;
        subscribe('loginUser', state => {

            this.setState({loggedIn: state.loginUser.loggedIn});
        });
    }
    renderButtons () {
        if (loggedIn){
            return <div>
                <SignOutButton/>
                <PostRoomButton></PostRoomButton>
                </div>
        }
        else {
            return <div>
                <SignInButton/>
                <SignUpButton/>
            </div>
        }

    }
    render () {


        let buttonGroup = null ;
        if (this.state.loggedIn){
            buttonGroup =  <div>
                <SignOutButton/>

                <PostRoomButton/>
                </div>
        }
        else {
            buttonGroup =  <div>
                <SignUpButton/>

                <SignInButton/>
                </div>
        }
        return (
            <div className="header">
                <div className="">
                    <Link to='/' className="logo" >

                        <img src={require("../assets/images/logo.png")}  alt=""/>
                    </Link>
                    <div className="personal-links">
                         <a href="https://github.com/mohammadmaleh">
                            <img src={require('../assets/images/mohammadMaleh.jpg')} alt=""/>
                            Mohammad Maleh
                         </a> <a href="https://github.com/mohammadmaleh/react-roomy">Source Code</a>
                    </div>
                    <div className="header-button-group">
                        {buttonGroup}
                    </div>
                </div>

            </div>
        )
    }
};
export default connect(
    (state) => {
        return state;
    }
)(Header);;

