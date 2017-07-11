/**
 * Created by mohammadmaleh on 29/05/2017.
 */
import React,{Component} from 'react'
import {Link}from 'react-router-dom'

export default class SignOutButton extends Component{

    render () {
        return (
           <div className="sign-up-button">
               <Link to="/sign-up" className="btn btn-full">Sign up</Link>
           </div>
        )
    }
};
