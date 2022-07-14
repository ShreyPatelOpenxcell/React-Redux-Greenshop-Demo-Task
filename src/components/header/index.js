import React from "react";

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
                                <a href="index.html"><img src="img/logo/logo.png" alt /></a>
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
                                    <a href="wishlist.html"><span className><img src="img/icon/like.png" alt /></span><span className="item-count">3</span></a>
                                </div>
                                <div className="header-acc-list  header-cart">
                                    <a href="cart.html"><span className><img src="img/icon/cart.png" alt /></span><span className="item-count">2</span></a>
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
                                        <li><a href="#">Fresh Meat</a></li>
                                        <li><a href="#">Butter &amp; Eggs</a></li>
                                        <li><a href="#">Milk</a></li>
                                        <li><a href="#">Oil &amp; Vinegars</a></li>
                                        <li><a href="#">Bread</a></li>
                                        <li><a href="#">Jam &amp; Honey</a></li>
                                        <li><a href="#">Frozen Food</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 text-center">
                            {/*main menu start*/}
                            <div className="main-menu">
                                <nav>
                                    <ul>
                                        <li><a className="active" href="index.html">Home</a></li>
                                        <li><a className="active" href="index.html">Products<i className="fa fa-angle-down" /></a>
                                            <ul className="sub-menu">
                                                <li><a href="product.html">Product 1</a></li>
                                                <li><a href="product-2.html">Product 2</a></li>
                                                <li><a href="product-3.html">Product 3</a></li>
                                                <li><a href="product-4.html">Product 4</a></li>
                                                <li><a href="product-5.html">Product 5</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                            {/*main menu end*/}
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;