import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { setCategories } from "src/redux/reducers/categories/actions";
import { setProducts, filterProduct, resetFilterProducts } from "src/redux/reducers/products/actions";

const Products = () => {
    const [searchValue, setSearchValue] = useState('');
    const [categoryName, setcategoryName] = useState('');
    const [isSearchValueError, setSearchValueErrorFlag] = useState(false);
    const productList = useSelector(state => state.product.filterList);
    const categoryList = useSelector(state => state.category.categories);
    const errorMessage = useSelector(state => state.product.errorMessage);
    const ErrorMessage = lazy(() => import("src/components/errorMessage"));
    const dispatch = useDispatch();
    const params = useLocation().search;
    const categoryNameFromSearchParam = new URLSearchParams(params).get('category');

    useEffect(() => {

        if (categoryNameFromSearchParam) {
            setcategoryName(categoryNameFromSearchParam);
            dispatch(filterProduct('ByCategory', categoryNameFromSearchParam, productList));
        }
        else {
            if (!categoryList.length) {
                dispatch(setCategories());
            }
            if (!productList.length) {
                dispatch(setProducts());
            }
            else{
                dispatch(resetFilterProducts());
            }
        }
    }, [])

    const setType = (vType, vValue) => {
        switch (vType) {
            case 'SearchValue':
                if (vValue) {
                    const pattern = new RegExp(/^[a-zA-Z ]*$/);
                    if (pattern.test(vValue)) {
                        dispatch(filterProduct('BySearchValue', vValue, productList));
                        setSearchValue(vValue);
                        setSearchValueErrorFlag(false);
                    }
                    else {
                        setSearchValue(vValue);
                        setSearchValueErrorFlag(true);
                    }
                }
                else {
                    setSearchValue(vValue);
                    setSearchValueErrorFlag(true);
                }
                break;
            case 'Category':
                if (vValue) {
                    setcategoryName(vValue);
                    dispatch(filterProduct('ByCategory', vValue, productList));
                }
                else {
                    setcategoryName('');
                    toast.error("Please select Valid Category");
                }
                break;
            default:
                break;
        }
    }

    const filterDataBySearchValue = () => {
        if (isSearchValueError) {
            toast.error("Please enter valid string");
            return;
        }
        else {
            dispatch(filterProduct('BySearchValue', searchValue, productList));
        }
    }

    return (
        <>
            {errorMessage ? <>
                <Suspense fallback="...Loading">
                    <ErrorMessage errorMessage={errorMessage}></ErrorMessage>
                </Suspense>
            </> : <>
                <section className="hero-area breadcumb-area">
                    <div className="hero-carousel">
                        <div className="single-hero d-flex align-items-center text-center breadcumb-blog">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-center">
                                        <div className="hero-content">
                                            <h2>Products</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="trendy-foods-area pd-tb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="col-lg-4 col-md-4 col-8 text-center">
                                    <div className="search-box">
                                        <input type="text" onChange={(e) => setType('SearchValue', e.target.value)} placeholder="Search for product" />
                                        <button type="submit" onClick={() => filterDataBySearchValue()}><i className="fa fa-search" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="col-lg-4 col-md-4 col-8 text-center">
                                    <select className="form-control" value={categoryName} onChange={(e) => setType('Category', e.target.value)} style={{ width: '150px' }}>
                                        <option value="All">All</option>
                                        {
                                            categoryList.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.slug}>{item.name}</option>
                                                );
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        {productList.length > 0 ?
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="trendy-foods-filtering">
                                        <div className="row grid">
                                            {
                                                productList.map((item, index) => {
                                                    return (
                                                        <div className="col-md-3 col-sm-6 featured grid-item">
                                                            <div className="single-food">
                                                                <figure key={index} className="card card-product-grid">
                                                                    <div className="img-wrap mb-3">
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
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                </section>
            </>
            }
        </>
    );
}

export default Products;