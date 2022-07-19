import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const cart = useSelector(state => state.cart.cartList);

    return (
        <header className="header-area">
            <div className="header-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="header-phone">
                                <p><i className="fa fa-phone" /> Call us: <a href="tel:+01900220033">+01900220033</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-middle">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4">
                            <div className="logo-wrap">
                                <Link className="nav-link" to="/" ><img src="img/logo/logo.png" alt="" /></Link>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-8 text-center">
                            <div className="search-box">
                                <input type="text" placeholder="Search for product" />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-4 text-right">
                            <div className="header-acc-wrap">
                                <div className="header-acc-list  header-cart">
                                    <Link to="/cart"><img src="img/icon/cart.png" alt="" /><span className="item-count">{cart.length}</span></Link>
                                </div>
                                <div className="header-acc-list  header-cart">
                                    <div className="language-currency">
                                        <ul>
                                            <li className="currency">Login <i className="fa fa-caret-down" />
                                                <ul className="dropdown-currency">
                                                    <li><Link to="/login">Login</Link></li>
                                                    <li><Link to="/register">Register</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom d-none">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-4">
                            <div className="categories_menu">
                                <div className="categories-title">
                                    <Link to="/products">Shop by category</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;