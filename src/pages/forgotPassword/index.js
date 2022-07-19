import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <>
            <section className="hero-area breadcumb-area">
                <div className="hero-carousel">
                    <div className="single-hero d-flex align-items-center text-center breadcumb-blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 text-center">
                                    <div className="hero-content">
                                        <h2>Forgot Password</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-form-area pd-t-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <form action className="contact-form">
                                <div className="row">
                                    <div className="col-lg-3 form-group">
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label htmlFor="yourEmail">Enter your email address</label>
                                        <input type="text" placeholder="Enter your email address" id="yourEmail" />
                                        <button type="button" className="boxed-btn">Send Request</button>
                                    </div>
                                    <div className="col-lg-3 form-group">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >

        </>
    );
}

export default ForgotPassword;