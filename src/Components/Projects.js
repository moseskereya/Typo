import React, { Component } from 'react'
import {data} from "./Data/data"
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() {
        return (
            <div>
                {data.map(item => (
                    <div>
                      <p>{item.projectname}</p>
                    </div>
                 ))}
            </div>
         );
    }
}
 
export default Project;