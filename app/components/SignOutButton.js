/**
 * Created by mohammadmaleh on 29/05/2017.
 */
import React,{Component} from 'react'
var {connect} =   require('react-redux');
import{logoutUser} from 'actions'
class SignOutButton extends Component{

    handleSignOut(e){
        e.preventDefault();
        let {dispatch} =  this.props;
        dispatch(logoutUser())
    }

    render () {
        return (
            <div className="sign-in-button float-right">
                <a  className="btn btn-ghost"  href="#"  onClick={this.handleSignOut}>Sign out</a>
            </div>
        )
    }
};
export default connect(
    (state) => {
        return state;
    }
)(SignOutButton);;
