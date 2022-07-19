import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { removeSelectedProduct, selectedProduct } from "src/redux/reducers/products/actions";
import { addCartItem } from "src/redux/reducers/cart/actions";
import classes from 'src/pages/productDetails/productDetails.module.css'
import { QtyArray } from "src/utils/commonConfig";

const ProductDetails = () => {
    const product = useSelector(state => state.product.selectedProduct);
    const dispatch = useDispatch();
    const params = useParams();
    const [productQty, setProductQty] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        if (params?.id) {
            dispatch(selectedProduct(params.id));
        }
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [])

    const addItem = () => {
        if(product.AvailableQuantity <= 0)
        {
            toast.error("Product is not Available");
            return;
        }
        dispatch(addCartItem(productQty, product));
        toast.success("Product Added successfully");
        navigate('/products');
    }

    const setType = (vType, vValue) => {
        switch (vType) {
            case 'Qty':
                if (vValue) {
                    setProductQty(vValue);
                }
                else {
                    toast.error("Please select Valid Quantity");
                }
                break;
            default:
                break;
        }
    }

    return (
        <>
            <section className="hero-area breadcumb-area">
                <div className="hero-carousel">
                    <div className="single-hero d-flex align-items-center text-center breadcumb-blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 text-center">
                                    <div className="hero-content">
                                        <h2>Product Details</h2>
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
                            <div className="trendy-foods-filtering">
                                <div className="row grid">
                                    <div className="col-md-4 col-sm-6 featured grid-item">
                                        <div className="single-food">
                                            <figure className="card card-product-grid">
                                                <div className="img-wrap mb-3">
                                                    <img src={product.image?.url} alt="productImage" />
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-sm-6 featured grid-item">
                                        <div className="single-food">
                                            <figure className="card card-product-grid">
                                                <figcaption className="info-wrap">
                                                    <h2>{product.title}</h2>
                                                    <h4>Vendor : <span style={{ color: '#49a010' }}>{product.vendor}</span></h4>
                                                    <h4>Availibility : <span style={{ color: '#49a010' }}>{product.AvailableQuantity}</span></h4>
                                                    {/* <h4>Category : <span style={{ color: '#49a010' }}>{product?.categories[0]?.name}</span></h4> */}
                                                    <h4>MRP : ₹ <span style={{ color: '#49a010' }}>{product.MRP}</span></h4>
                                                    <h4>Sales Price : ₹ <span style={{ color: '#49a010' }}>{product.SalePrice}</span></h4>
                                                    <h4>Qty :   <select onChange={(e) => setType('Qty', e.target.value)} className={classes.qtyDropDown}>
                                                        {
                                                            QtyArray.map((item, index) => {
                                                                return (
                                                                    <option key={index} value={item.slug}>{item.label}</option>
                                                                );
                                                            })
                                                        }
                                                    </select></h4>
                                                    <button type="button" onClick={() => addItem()} className="boxed-btn">Add to Cart</button>
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
        </>
    );
}

export default ProductDetails;