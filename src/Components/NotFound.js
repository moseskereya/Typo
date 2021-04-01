import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Image from "../images/404.svg"
class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div className="not-round">
           <h4>You look like you are lost</h4>
             <img className="image_404" src={Image} alt="404" />
                <Link to="/">
                     <button className="btn">Home</button>
                </Link>

        </div>
         );
    }
}
 
export default NotFound;