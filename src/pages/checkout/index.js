import React from "react";

const Category = () => {
    return (
        <>
            <section className="hero-area breadcumb-area">
                <div className="hero-carousel">
                    <div className="single-hero d-flex align-items-center text-center breadcumb-checkout">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 text-center">
                                    <div className="hero-content">
                                        <h3>Organic Food</h3>
                                        <h2>Checkout</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="checkout-area pd-tb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tz-breadcumb mb-5">
                                <nav>
                                    <ol className="breadcrumb text-white">
                                        <li className="breadcrumb-item active" aria-current="page">Information</li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Shipping</a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#">Payment</a></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="checkout-information form-group mb-5">
                                <div className="form-text">
                                    <span>Contact Information</span>
                                    <span>Already have an account? <a href>Log in</a></span>
                                </div>
                                <input type="email" className="form-control mb-4" placeholder="Email or phone number" />
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <div className="custom-control-label" htmlFor="customCheck1">Keep me up to date on news and exclusive offers</div>
                                </label>
                            </div>
                            <div className="shipping-information">
                                <header className="mb-4">
                                    <h4 className="card-title">Shipping Address</h4>
                                </header>
                                <form>
                                    <div className="row">
                                        <div className="col form-group">
                                            <input type="text" className="form-control" placeholder="First name" />
                                        </div> {/* form-group end.// */}
                                        <div className="col form-group">
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </div> {/* form-group end.// */}
                                    </div> {/* form-row end.// */}
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Company (Optional)" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Apartment" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="City" />
                                    </div> {/* form-group end.// */}
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <select id="inputState" className="form-control" aria-placeholder="Country">
                                                <option>Country</option>
                                                <option>Uzbekistan</option>
                                                <option>Russia</option>
                                                <option>United States</option>
                                                <option>India</option>
                                                <option>Afganistan</option>
                                            </select>
                                        </div> {/* form-group end.// */}
                                        <div className="form-group col-md-6">
                                            <input type="text" className="form-control" placeholder="Postal Code" />
                                        </div> {/* form-group end.// */}
                                    </div> {/* form-row.// */}
                                    <label className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <div className="custom-control-label" htmlFor="customCheck1">Save this information for next time</div>
                                    </label>
                                    <div className="form-group mt-4">
                                        <button type="submit" className="boxed-btn"> Continue to shipping </button>
                                    </div> {/* form-group// */}
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="shopping-total card">
                                <div className="card-body">
                                    <dl className="dlist-align align-items-end shopping-items">
                                        <dt className="d-flex align-items-center">
                                            <div className="checkout-product-image-wrap mr-3">
                                                <img src="img/tr-bs-os/tr/tr-1.png" alt />
                                            </div>
                                            <div>
                                                <h5>Lemon</h5>
                                                <p>25 KG</p>
                                            </div>
                                        </dt>
                                        <dd className="text-right">$120</dd>
                                    </dl>
                                    <dl className="dlist-align mt-5">
                                        <dt>Total price:</dt>
                                        <dd className="text-right">$568</dd>
                                    </dl>
                                    <dl className="dlist-align">
                                        <dt>Discount:</dt>
                                        <dd className="text-right text-danger">$68</dd>
                                    </dl>
                                    <hr />
                                    <dl className="dlist-align text-success">
                                        <dt>Total:</dt>
                                        <dd className="text-right"><strong>$500</strong></dd>
                                    </dl>
                                </div> {/* card-body.// */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="single-tr-bs-os top-rated-area">
                                <h2 className="single-tr-bs-os-title mb-5">Top Rated</h2>
                                <div className="single-tr-bs-os-product mb-4">
                                    <figure className="d-flex align-items-center">
                                        <div className="img-wrap mr-4">
                                            <img src="img/tr-bs-os/tr/tr-1.png" />
                                            <span className="stc-hover">
                                                <a href><i className="fa fa-search" /></a>
                                                <a href><i className="fa fa-heart" /></a>
                                                <a href><i className="fa fa-shopping-cart" /></a>
                                            </span>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <a href="#" className="title mb-3">Lemon</a>
                                            <div className="price-wrap mt-2">
                                                <span className="price">$25.00</span>
                                                <del className="price-old">$28.55</del>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="single-tr-bs-os-product mb-4">
                                    <figure className="d-flex align-items-center">
                                        <div className="img-wrap mr-4">
                                            <img src="img/tr-bs-os/tr/tr-2.png" />
                                            <span className="stc-hover">
                                                <a href><i className="fa fa-search" /></a>
                                                <a href><i className="fa fa-heart" /></a>
                                                <a href><i className="fa fa-shopping-cart" /></a>
                                            </span>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <a href="#" className="title mb-3">Lemon</a>
                                            <div className="price-wrap mt-2">
                                                <span className="price">$25.00</span>
                                                <del className="price-old">$28.55</del>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="single-tr-bs-os-product mb-4">
                                    <figure className="d-flex align-items-center">
                                        <div className="img-wrap mr-4">
                                            <img src="img/tr-bs-os/tr/tr-3.png" />
                                            <span className="stc-hover">
                                                <a href><i className="fa fa-search" /></a>
                                                <a href><i className="fa fa-heart" /></a>
                                                <a href><i className="fa fa-shopping-cart" /></a>
                                            </span>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <a href="#" className="title mb-3">Lemon</a>
                                            <div className="price-wrap mt-2">
                                                <span className="price">$25.00</span>
                                                <del className="price-old">$28.55</del>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="single-tr-bs-os top-rated-area">
                                <h2 className="single-tr-bs-os-title mb-5">Best Selling</h2>
                                <div className="single-tr-bs-os-product mb-4">
                                    <figure className="d-flex align-items-center">
                                        <div className="img-wrap mr-4">
                                            <img src="img/tr-bs-os/tr/tr-1.png" />
                                            <span className="stc-hover">
                                                <a href><i className="fa fa-search" /></a>
                                                <a href><i className="fa fa-heart" /></a>
                                                <a href><i className="fa fa-shopping-cart" /></a>
                                            </span>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <a href="#" className="title mb-3">Lemon</a>
                                            <div className="price-wrap mt-2">
                                                <span className="price">$25.00</span>
                                                <del className="price-old">$28.55</del>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="single-tr-bs-os-product mb-4">
                                    <figure className="d-flex align-items-center">
                                        <div className="img-wrap mr-4">
                                            <img src="img/tr-bs-os/tr/tr-2.png" />
                                            <span className="stc-hover">
                                                <a href><i className="fa fa-search" /></a>
                                                <a href><i className="fa fa-heart" /></a>
                                                <a href><i className="fa fa-shopping-cart" /></a>
                                            </span>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <a href="#" className="title mb-3">Lemon</a>
                                            <div className="price-wrap mt-2">
                                                <span className="price">$25.00</span>
                                                <del className="price-old">$28.55</del>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="single-tr-bs-os-product mb-4">
                                    <figure className="d-flex align-items-center">
                                        <div className="img-wrap mr-4">
                                            <img src="img/tr-bs-os/tr/tr-3.png" />
                                            <span className="stc-hover">
                                                <a href><i className="fa fa-search" /></a>
                                                <a href><i className="fa fa-heart" /></a>
                                                <a href><i className="fa fa-shopping-cart" /></a>
                                            </span>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <a href="#" className="title mb-3">Lemon</a>
                                            <div className="price-wrap mt-2">
                                                <span className="price">$25.00</span>
                                                <del className="price-old">$28.55</del>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="single-tr-bs-os top-rated-area">
                                <h2 className="single-tr-bs-os-title mb-5">On Sale</h2>
                                <div className="single-tr-bs-os-product mb-4">
                                    <figure className="d-flex align-items-center">
                                        <div className="img-wrap mr-4">
                                            <img src="img/tr-bs-os/tr/tr-1.png" />
                                            <span className="stc-hover">
                                                <a href><i className="fa fa-search" /></a>
                                                <a href><i className="fa fa-heart" /></a>
                                                <a href><i className="fa fa-shopping-cart" /></a>
                                            </span>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <a href="#" className="title mb-3">Lemon</a>
                                            <div className="price-wrap mt-2">
                                                <span className="price">$25.00</span>
                                                <del className="price-old">$28.55</del>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="single-tr-bs-os-product mb-4">
                                    <figure className="d-flex align-items-center">
                                        <div className="img-wrap mr-4">
                                            <img src="img/tr-bs-os/tr/tr-2.png" />
                                            <span className="stc-hover">
                                                <a href><i className="fa fa-search" /></a>
                                                <a href><i className="fa fa-heart" /></a>
                                                <a href><i className="fa fa-shopping-cart" /></a>
                                            </span>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <a href="#" className="title mb-3">Lemon</a>
                                            <div className="price-wrap mt-2">
                                                <span className="price">$25.00</span>
                                                <del className="price-old">$28.55</del>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="single-tr-bs-os-product mb-4">
                                    <figure className="d-flex align-items-center">
                                        <div className="img-wrap mr-4">
                                            <img src="img/tr-bs-os/tr/tr-3.png" />
                                            <span className="stc-hover">
                                                <a href><i className="fa fa-search" /></a>
                                                <a href><i className="fa fa-heart" /></a>
                                                <a href><i className="fa fa-shopping-cart" /></a>
                                            </span>
                                        </div>
                                        <figcaption className="info-wrap">
                                            <a href="#" className="title mb-3">Lemon</a>
                                            <div className="price-wrap mt-2">
                                                <span className="price">$25.00</span>
                                                <del className="price-old">$28.55</del>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Category;