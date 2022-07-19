import React from "react";
import Blogs from "src/pages/blogs";

const Home = () => {
    return (
        <>
            <section className="hero-area">
                <div className="hero-carousel">
                    <div className="single-hero d-flex align-items-center text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 text-center">
                                    <div className="hero-content">
                                        <h3>Organic Food</h3>
                                        <h2>Looking for <br />the fresh Organic Food</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="focus-area pd-tb-120">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3">
                            <article className="card card-body single-focus">
                                <figure className="text-center">
                                    <span className="icon-md mb-2"><img src="img/focus/f-car.png" alt /></span>
                                    <figcaption className="pt-4">
                                        <h5 className="title mb-3">Free Shipping</h5>
                                        <p>Free shipping for all US order</p>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                        <div className="col-md-3">
                            <article className="card card-body single-focus">
                                <figure className="text-center">
                                    <span className="icon-md mb-2"><img src="img/focus/f-headphone.png" alt /></span>
                                    <figcaption className="pt-4">
                                        <h5 className="title mb-3">Support 24/7</h5>
                                        <p>We support 24h a day</p>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                        <div className="col-md-3">
                            <article className="card card-body single-focus">
                                <figure className="text-center">
                                    <span className="icon-md mb-2"><img src="img/focus/f-money.png" alt /></span>
                                    <figcaption className="pt-4">
                                        <h5 className="title mb-3">100% Money Back</h5>
                                        <p>You have 30 days to return</p>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                        <div className="col-md-3">
                            <article className="card card-body single-focus">
                                <figure className="text-center">
                                    <span className="icon-md mb-2"><img src="img/focus/f-security.png" alt /></span>
                                    <figcaption className="pt-4">
                                        <h5 className="title mb-3">Payment Secure</h5>
                                        <p>We ensure secure payment</p>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section className="top-categories-area pd-tb-100 bg-soft-green">
                <div className="container">
                    <header className="section-heading text-center">
                        <h3 className="section-title">Top Categories</h3>
                    </header>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-categories-carousel owl-carousel">
                                <a href className="single-top-category text-center">
                                    <span className="top-category-image mb-2">
                                        <img src="img/category/cat-fruits.png" alt />
                                    </span>
                                    <span className="top-category-name">Fruits</span>
                                </a>
                                <a href className="single-top-category text-center">
                                    <span className="top-category-image mb-2">
                                        <img src="img/category/cat-cakes.png" alt />
                                    </span>
                                    <span className="top-category-name">Cakes</span>
                                </a>
                                <a href className="single-top-category text-center">
                                    <span className="top-category-image mb-2">
                                        <img src="img/category/cat-drinks.png" alt />
                                    </span>
                                    <span className="top-category-name">Drinks</span>
                                </a>
                                <a href className="single-top-category text-center">
                                    <span className="top-category-image mb-2">
                                        <img src="img/category/cat-eggs.png" alt />
                                    </span>
                                    <span className="top-category-name">Eggs</span>
                                </a>
                                <a href className="single-top-category text-center">
                                    <span className="top-category-image mb-2">
                                        <img src="img/category/cat-meats.png" alt />
                                    </span>
                                    <span className="top-category-name">Meats</span>
                                </a>
                                <a href className="single-top-category text-center">
                                    <span className="top-category-image mb-2">
                                        <img src="img/category/cat-vegetables.png" alt />
                                    </span>
                                    <span className="top-category-name">Vegetables</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="offers-area pd-t-150">
                <div className="container">
                    <div className="row offers-area-full-wrap align-items-center">
                        <div className="col-lg-10">
                            <div className="offers-carousel-wrap">
                                <div className="offers-carousel">
                                    <div className="single-offer">
                                        <div className="single-food offer-item">
                                            <figure className="card card-product-grid">
                                                <div className="row align-items-center">
                                                    <div className="col-md-4">
                                                        <div className="img-wrap">
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
                                                    </div>
                                                    <div className="col-md-8">
                                                        <figcaption className="info-wrap">
                                                            <a href="#" className="title mb-3">Lemon</a>
                                                            <div className="price-wrap mt-2">
                                                                <span className="price">$25.00</span>
                                                                <del className="price-old">$28.55</del>
                                                            </div>
                                                            <div className="progress-wrap mb-4">
                                                                <div className="mt-3 mb-2">
                                                                    <span>Available: 237</span>
                                                                    <span className="float-right">Already Sold: 23</span>
                                                                </div>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ "width": "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </div>
                                                            <div className="clockdiv">
                                                                <div data-countdown="2021/03/01">
                                                                    <span className="cdown day">133 <p>Days</p></span>
                                                                    <span className="cdown hour">6 <p>Hours</p></span>
                                                                    <span className="cdown minutes">48 <p>Mins</p></span>
                                                                    <span className="cdown second">30 <p>Sec</p></span>
                                                                </div>
                                                            </div>
                                                        </figcaption>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="offers-carousel-thumbnail d-none d-lg-block d-xl-block ">
                                <div className="single-offer-thumbnail">
                                    <div className="img-wrap">
                                        <img src="img/trendy-foods/tf-1.png" />
                                    </div>
                                </div>
                                <div className="single-offer-thumbnail">
                                    <div className="img-wrap">
                                        <img src="img/trendy-foods/tf-2.png" />
                                    </div>
                                </div>
                                <div className="single-offer-thumbnail">
                                    <div className="img-wrap">
                                        <img src="img/trendy-foods/tf-3.png" />
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


            <Blogs></Blogs>
        </>
    );
}

export default Home;