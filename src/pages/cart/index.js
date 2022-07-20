import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { QtyArray } from "src/utils/commonConfig";
import classes from 'src/pages/cart/cart.module.css';
import { addCartItem, removeCartItem } from "src/redux/reducers/cart/actions";

const Cart = () => {
    const cartList = useSelector(state => state.cart.cartList);
    const dispatch = useDispatch();

    const setType = (vType, vValue, e) => {
        switch (vType) {
            case 'Qty':
                if (vValue) {
                    dispatch(addCartItem(vValue,cartList.filter(item => item.id === e.target.id)[0]));
                    toast.info("Quantity Updated Successfully");
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
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartList.length > 0 ?
                                                cartList.map((item, index) => {
                                                    return (
                                                        <tr key={index} className="align-items-center" >
                                                            <td>
                                                                <figure className="itemside align-items-center">
                                                                    <div className="aside"><img src={item.image?.url} alt="productImage" className="img-sm" /></div>
                                                                    <figcaption className="info">
                                                                        <Link to={'/productDetails/' + item.id} className="title text-dark">{item.title}</Link>
                                                                        <p className="text-muted small">Total Quantity : {parseInt(item.Qty)}</p>
                                                                    </figcaption>
                                                                </figure>
                                                            </td>
                                                            <td>
                                                                <select className={classes.qtyDropDown} id={item.id} value={item.Qty} onChange={(e) => setType('Qty', e.target.value, e)}>
                                                                    {
                                                                        QtyArray.map((x, i) => {
                                                                            return (
                                                                                <option key={i} value={x.value}>{x.label}</option>
                                                                            );
                                                                        })
                                                                    }
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <span style={{ color: '#57a722' }}><b> ₹ {parseInt(item.Qty) * item.SalePrice}</b></span>
                                                            </td>
                                                            <td className="text-right">
                                                                <button className="btn btn-danger btn-remove" onClick={() => {
                                                                    dispatch(removeCartItem(item.id))
                                                                }}> Remove</button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                                :
                                                <span style={{ fontSize: '24px' }}>No Records Found</span>
                                        }
                                    </tbody>
                                </table>
                            </div> {/* card.// */}
                        </main> {/* col.// */}
                        <aside className="col-lg-3">

                            <div className="card payment-card">
                                <div className="card-body">
                                    <dl className="dlist-align">
                                        <dt>Total price :</dt>
                                        <dd className="text-right text-success"><b>₹ {cartList.reduce((prev, curr) => prev + parseInt(curr.Qty) * curr.SalePrice,0) }</b></dd>
                                    </dl>
                                </div> {/* card-body.// */}
                            </div> {/* card .// */}
                        </aside> {/* col.// */}
                    </div>
                </div> {/* container .//  */}
            </section >

        </>
    );
}

export default Cart;