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
                            <a className="nav-link cat" data-toggle="dropdown" href="#" aria-expanded="false"><strong>&nbsp; Shop By Category</strong></a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Foods and Drink</a>
                                <a className="dropdown-item" href="#">Fresh Meat</a>
                                <a className="dropdown-item" href="#">Sea Fishes</a>
                                <a className="dropdown-item" href="#">Butter &amp; Eggs</a>
                                <a className="dropdown-item" href="#">Fruits</a>
                                <a className="dropdown-item" href="#">Frozen Foods</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">Products<i className="fa fa-angle-down" /></a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/category" >Category</Link>
                                <Link className="dropdown-item" to="/cart" >Cart</Link>
                                <Link className="dropdown-item" to="/checkout" >Checkout</Link>
                            </div>
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