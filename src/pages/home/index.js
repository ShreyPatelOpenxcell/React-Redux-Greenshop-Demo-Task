import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Blogs from "src/pages/blogs";
import { setCategories } from "src/redux/reducers/categories/actions";
import { filterProduct, resetFilterProducts, setProducts } from "src/redux/reducers/products/actions";
import classes from 'src/pages/home/home.module.css'

const Home = () => {
    const productList = useSelector(state => state.product.filterList);
    const actualProductList = useSelector(state => state.product.products);
    const categoryList = useSelector(state => state.category.categories);
    const [selectedFilter, setSelectedFilter] = useState('All');
    const dispatch = useDispatch();

    useEffect(() => {
        if (!categoryList.length) {
            dispatch(setCategories());
        }

        if (!productList.length) {
            dispatch(setProducts());
        }
        else {
            dispatch(resetFilterProducts());
        }

    }, [])

    const filterData = (vLabel) => {
        setSelectedFilter(vLabel);
        dispatch(filterProduct('ByHomePage', vLabel, actualProductList));
    }

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
                                    <span className="icon-md mb-2"><img src="img/focus/f-car.png" alt="" /></span>
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
                                    <span className="icon-md mb-2"><img src="img/focus/f-headphone.png" alt="" /></span>
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
                                    <span className="icon-md mb-2"><img src="img/focus/f-money.png" alt="" /></span>
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
                                    <span className="icon-md mb-2"><img src="img/focus/f-security.png" alt="" /></span>
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
                        {
                            categoryList.slice(0, 4).map((item, index) => {
                                return (
                                    <div className="col-lg-3">
                                        <Link to={'/products?category=' + item.slug} className="single-top-category text-center">
                                            <span className="top-category-image mb-2">
                                                <img src={item.image?.url} alt="categoryImage" />
                                            </span>
                                            <p className={classes.categoryListing}>{item.name}</p>
                                        </Link>
                                    </div>
                                )
                            })
                        }
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
                                    <button onClick={() => filterData('All')}>All</button>
                                    <button onClick={() => filterData('Featured')}>Featured</button>
                                    <button onClick={() => filterData('New')}>New</button>
                                    <button onClick={() => filterData('Onsell')}>Onsell</button>
                                </div>
                                <div className="row grid">
                                    {productList.length > 0 ?
                                        productList.slice(0,8).map((item, index) => {
                                            return (
                                                <div className="col-md-3 col-sm-6 grid-item">
                                                    <div className="single-food">
                                                        <figure key={index} className="card card-product-grid">
                                                            <div className="img-wrap mb-3">
                                                                <span className="topbar">
                                                                    {selectedFilter !== 'All' && <span className="badge badge-success"> {selectedFilter} </span>}
                                                                </span>
                                                                <img src={item.image?.url} alt="productImage" />
                                                                <span className="stc-hover">
                                                                    <Link to={'/productDetails/' + item.id}><i className="fa fa-shopping-cart" /></Link>
                                                                </span>
                                                            </div>
                                                            <figcaption className="info-wrap">
                                                                <Link to={'/productDetails/' + item.id} className="title mb-3">{item.title}</Link>
                                                                <div className="price-wrap mt-2">
                                                                    <span className="price">₹ {item.SalePrice}</span>
                                                                    <del className="price-old">₹ {item.MRP}</del>
                                                                </div>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            );
                                        })
                                        :
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="trendy-foods-filtering">
                                                    <div className="row grid">
                                                        <span style={{ fontSize: '20px' }}>No Products Found</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
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