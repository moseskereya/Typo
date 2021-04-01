import React from 'react'
import {Link} from "react-router-dom"
function Nav() {
    return (
        <div>
            <nav>
                <h3>Moses</h3>
                <ul>
                    <Link className="link" to="/">
                        <li>Home</li>
                    </Link>

                    <Link className="link" to="/about">
                        <li>About</li>
                    </Link>

                    <Link className="link" to="/contacts">
                        <li>Contacts</li>
                    </Link>
                    
                    <Link className="link" to="/Projects">
                        <li>Projects</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
