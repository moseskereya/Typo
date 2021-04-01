import React, { Component } from 'react';
import Typical from "react-typical"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
            <div className="container">
                <h1>I'm a </h1> 
                <Typical
                    className="type"
                    loop={Infinity}
                    wrapper="p"
                    steps={[
                        'Developer',
                        1000,
                        "Designer",
                        1000,
                        "Teacher",
                        1000,
                        'Game Developer',
                        1000,
                        'Tour Promoter',
                        1000
                    ]}
                />
            </div>
         );
    }
}
 
export default Home;
