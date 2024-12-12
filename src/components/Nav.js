import React from "react";
import {Link} from "react-router-dom";
import Styles from "../css/navbar.css"

function Nav () {

    return (
        <nav className="topnav mb-20">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;