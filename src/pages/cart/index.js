import React from "react";

const Cart = () => {
    return (
        <>
                <section className="hero-area breadcumb-area">
                    <div className="hero-carousel">
                        <div className="single-hero d-flex align-items-center text-center breadcumb-cart">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-center">
                                        <div className="hero-content">
                                            <h3>Organic Food</h3>
                                            <h2>My Cart</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-content pd-tb-150">
                    <div className="container">
                        <div className="row">
                            <main className="col-lg-9">
                                <div className>
                                    <table className="table table-borderless table-shopping-cart">
                                        <thead className="text-muted mb-3">
                                            <tr className="small text-uppercase">
                                                <th scope="col" className="sm-w">Product</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Price</th>
                                                <th scope="col" className="text-right"> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="align-items-center">
                                                <td>
                                                    <figure className="itemside align-items-center">
                                                        <div className="aside"><img src="img/tr-bs-os/tr/tr-1.png" className="img-sm" /></div>
                                                        <figcaption className="info">
                                                            <a href="#" className="title text-dark">Lettuce</a>
                                                            <p className="text-muted small">2 KG</p>
                                                        </figcaption>
                                                    </figure>
                                                </td>
                                                <td>
                                                    <select className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <div className="price-wrap">
                                                        <var className="price">$1156.00</var>
                                                    </div> {/* price-wrap .// */}
                                                </td>
                                                <td className="text-right">
                                                    <a data-original-title="Save to Wishlist" title href className="btn wishlist-btn mr-2" data-toggle="tooltip"> <i className="fa fa-heart" /></a>
                                                    <a href className="btn btn-danger btn-remove"> Remove</a>
                                                </td>
                                            </tr>
                                            <tr className="align-items-center">
                                                <td>
                                                    <figure className="itemside align-items-center">
                                                        <div className="aside"><img src="img/tr-bs-os/tr/tr-2.png" className="img-sm" /></div>
                                                        <figcaption className="info">
                                                            <a href="#" className="title text-dark">Lettuce</a>
                                                            <p className="text-muted small">2 KG</p>
                                                        </figcaption>
                                                    </figure>
                                                </td>
                                                <td>
                                                    <select className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <div className="price-wrap">
                                                        <var className="price">$1156.00</var>
                                                    </div> {/* price-wrap .// */}
                                                </td>
                                                <td className="text-right">
                                                    <a data-original-title="Save to Wishlist" title href className="btn wishlist-btn mr-2" data-toggle="tooltip"> <i className="fa fa-heart" /></a>
                                                    <a href className="btn btn-danger btn-remove"> Remove</a>
                                                </td>
                                            </tr>
                                            <tr className="align-items-center">
                                                <td>
                                                    <figure className="itemside align-items-center">
                                                        <div className="aside"><img src="img/tr-bs-os/tr/tr-3.png" className="img-sm" /></div>
                                                        <figcaption className="info">
                                                            <a href="#" className="title text-dark">Lettuce</a>
                                                            <p className="text-muted small">2 KG</p>
                                                        </figcaption>
                                                    </figure>
                                                </td>
                                                <td>
                                                    <select className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <div className="price-wrap">
                                                        <var className="price">$1156.00</var>
                                                    </div> {/* price-wrap .// */}
                                                </td>
                                                <td className="text-right">
                                                    <a data-original-title="Save to Wishlist" title href className="btn wishlist-btn mr-2" data-toggle="tooltip"> <i className="fa fa-heart" /></a>
                                                    <a href className="btn btn-danger btn-remove"> Remove</a>
                                                </td>
                                            </tr>
                                            <tr className="align-items-center">
                                                <td>
                                                    <figure className="itemside align-items-center">
                                                        <div className="aside"><img src="img/tr-bs-os/tr/tr-1.png" className="img-sm" /></div>
                                                        <figcaption className="info">
                                                            <a href="#" className="title text-dark">Lettuce</a>
                                                            <p className="text-muted small">2 KG</p>
                                                        </figcaption>
                                                    </figure>
                                                </td>
                                                <td>
                                                    <select className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <div className="price-wrap">
                                                        <var className="price">$1156.00</var>
                                                    </div> {/* price-wrap .// */}
                                                </td>
                                                <td className="text-right">
                                                    <a data-original-title="Save to Wishlist" title href className="btn wishlist-btn mr-2" data-toggle="tooltip"> <i className="fa fa-heart" /></a>
                                                    <a href className="btn btn-danger btn-remove"> Remove</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> {/* card.// */}
                            </main> {/* col.// */}
                            <aside className="col-lg-3">
                                <div className="card coupon-card mb-4">
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Have coupon?</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" name placeholder="Coupon code" />
                                                    <span className="input-group-append">
                                                        <button className="btn btn-primary">Apply</button>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div> {/* card-body.// */}
                                </div> {/* card .// */}
                                <div className="card payment-card">
                                    <div className="card-body">
                                        <dl className="dlist-align">
                                            <dt>Total price:</dt>
                                            <dd className="text-right text-dark">USD 568</dd>
                                        </dl>
                                        <dl className="dlist-align">
                                            <dt>Discount:</dt>
                                            <dd className="text-right text-danger">USD 658</dd>
                                        </dl>
                                        <dl className="dlist-align">
                                            <dt>Total:</dt>
                                            <dd className="text-right  h5 text-success"><strong>$1,650</strong></dd>
                                        </dl>
                                        <hr />
                                        <p className="text-center mb-3">
                                            <a href>
                                                <img src="img/payments.png" height={26} />
                                            </a>
                                            <a href className="boxed-btn mb-3 mt-4">Make Purchase</a>
                                            <a href className="boxed-btn btn-outline">Make Purchase</a>
                                        </p>
                                    </div> {/* card-body.// */}
                                </div> {/* card .// */}
                            </aside> {/* col.// */}
                        </div>
                    </div> {/* container .//  */}
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

export default Cart;