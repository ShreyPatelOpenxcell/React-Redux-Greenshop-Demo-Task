import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-main navbar-expand-lg navbar-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link className="nav-link cat" to="/products" ><strong>&nbsp; Shop By Category</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/products" >Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs" >Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutUs" >About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactUs" >Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;