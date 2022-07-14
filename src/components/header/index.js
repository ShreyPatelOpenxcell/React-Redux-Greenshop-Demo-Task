import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
                        <div className="col-lg-6 col-md-6 text-center text-lg-right text-xl-right">
                            <div className="language-currency">
                                <ul>
                                    <li className="currency"><a href="#"> Currency <i className="fa fa-caret-down" /></a>
                                        <ul className="dropdown-currency">
                                            <li><a href="#">€ Euro</a></li>
                                            <li><a href="#">£ Pound Sterling</a></li>
                                            <li><a href="#">$ US Dollar</a></li>
                                        </ul>
                                    </li>
                                    <li className="language"><a href="#"> Language <i className="fa fa-caret-down" /></a>
                                        <ul className="dropdown-language">
                                            <li><a href="#">French</a></li>
                                            <li><a href="#">Spanish</a></li>
                                            <li><a href="#">Russian</a></li>
                                        </ul>
                                    </li>
                                </ul>
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
                                <div className="header-acc-list header-wishlist">
                                    <span className><img src="img/icon/like.png" alt="" /></span><span className="item-count">3</span>
                                </div>
                                <div className="header-acc-list  header-cart">
                                    <span className><img src="img/icon/cart.png" alt="" /></span><span className="item-count">2</span>
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
                                    <h2 className="category-toggle">Shop by cattegory</h2>
                                </div>
                                <div className="categories-menu-toggle" style={{ "display": "none" }}>
                                    <ul>
                                        <li><Link to="/">Fresh Meat</Link></li>
                                        <li><Link to="/">Butter &amp; Eggs</Link></li>
                                        <li><Link to="/">Milk</Link></li>
                                        <li><Link to="/">Oil &amp; Vinegars</Link></li>
                                        <li><Link to="/">Bread</Link></li>
                                        <li><Link to="/">Jam &amp; Honey</Link></li>
                                        <li><Link to="/">Frozen Food</Link></li>
                                    </ul>
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