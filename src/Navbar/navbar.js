
import React from "react";
import { Link } from "react-router-dom";
import './navar.css'

function Navbar (){
    return(
        <div className="navbar">
            {/* <div className="navbar-logo">
                BeckyTracy

            </div> */}
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Products</Link></li>
                <li><Link to="/contact">ProductDetail</Link></li>

            </ul>

        </div>
    )
}
export default Navbar