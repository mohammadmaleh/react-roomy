import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export default  class PostRoomButton extends Component{
  constructor(props){
      super(props);
  }
  render(){
      return <div>
          <div className="">
              <Link to='/post-room'>
                  <a  className="btn btn-ghost"    >Post a room</a>

              </Link>


          </div>

      </div>
  }
}
