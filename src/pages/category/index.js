import React from "react";

const Category = () => {
    return (
        <>
                <section className="hero-area breadcumb-area">
                    <div className="hero-carousel">
                        <div className="single-hero d-flex align-items-center text-center breadcumb-blog">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-center">
                                        <div className="hero-content">
                                            <h3>Organic Food</h3>
                                            <h2>Vegetables</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="trendy-foods-area pd-tb-120">
                    <div className="container">
                        <header className="section-heading text-center">
                            <h3 className="section-title">Trendy Foods</h3>
                        </header>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="trendy-foods-filtering">
                                    <div className="button-group filter-button-group text-center">
                                        <button className="active" data-filter="*">All</button>
                                        <button data-filter=".featured">Featured</button>
                                        <button data-filter=".new">New</button>
                                        <button data-filter=".onsale">Onsell</button>
                                        <button data-filter=".deal">Deal</button>
                                    </div>
                                    <div className="row grid">
                                        <div className="col-md-3 col-sm-6 featured grid-item">
                                            <div className="single-food">
                                                <figure className="card card-product-grid">
                                                    <div className="img-wrap mb-3">
                                                        <span className="topbar">
                                                            <span className="badge badge-success"> NEW </span>
                                                        </span>
                                                        <img src="img/trendy-foods/tf-1.png" />
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
                                        <div className="col-md-3 col-sm-6 new grid-item">
                                            <div className="single-food">
                                                <figure className="card card-product-grid">
                                                    <div className="img-wrap mb-3">
                                                        <span className="topbar">
                                                            <span className="badge badge-success"> NEW </span>
                                                        </span>
                                                        <img src="img/trendy-foods/tf-2.png" />
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
                                        <div className="col-md-3 col-sm-6 onsale grid-item">
                                            <div className="single-food">
                                                <figure className="card card-product-grid">
                                                    <div className="img-wrap mb-3">
                                                        <span className="topbar">
                                                            <span className="badge badge-success"> NEW </span>
                                                        </span>
                                                        <img src="img/trendy-foods/tf-3.png" />
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
                                        <div className="col-md-3 col-sm-6 deal grid-item">
                                            <div className="single-food">
                                                <figure className="card card-product-grid">
                                                    <div className="img-wrap mb-3">
                                                        <span className="topbar">
                                                            <span className="badge badge-success"> NEW </span>
                                                        </span>
                                                        <img src="img/trendy-foods/tf-4.png" />
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
                                        <div className="col-md-3 col-sm-6 featured grid-item">
                                            <div className="single-food">
                                                <figure className="card card-product-grid">
                                                    <div className="img-wrap mb-3">
                                                        <span className="topbar">
                                                            <span className="badge badge-success"> NEW </span>
                                                        </span>
                                                        <img src="img/trendy-foods/tf-1.png" />
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
                                        <div className="col-md-3 col-sm-6 new grid-item">
                                            <div className="single-food">
                                                <figure className="card card-product-grid">
                                                    <div className="img-wrap mb-3">
                                                        <span className="topbar">
                                                            <span className="badge badge-success"> NEW </span>
                                                        </span>
                                                        <img src="img/trendy-foods/tf-2.png" />
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
                                        <div className="col-md-3 col-sm-6 onsale grid-item">
                                            <div className="single-food">
                                                <figure className="card card-product-grid">
                                                    <div className="img-wrap mb-3">
                                                        <span className="topbar">
                                                            <span className="badge badge-success"> NEW </span>
                                                        </span>
                                                        <img src="img/trendy-foods/tf-3.png" />
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
                                        <div className="col-md-3 col-sm-6 deal grid-item">
                                            <div className="single-food">
                                                <figure className="card card-product-grid">
                                                    <div className="img-wrap mb-3">
                                                        <span className="topbar">
                                                            <span className="badge badge-success"> NEW </span>
                                                        </span>
                                                        <img src="img/trendy-foods/tf-4.png" />
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