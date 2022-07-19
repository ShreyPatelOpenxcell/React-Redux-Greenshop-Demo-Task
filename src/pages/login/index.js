import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="hero-area breadcumb-area">
                <div className="hero-carousel">
                    <div className="single-hero d-flex align-items-center text-center breadcumb-blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 text-center">
                                    <div className="hero-content">
                                        <h2>Login</h2>
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
                                    <div className="col-lg-6 form-group">
                                        <label htmlFor="yourName">Your Name</label>
                                        <input type="text" id="yourName" placeholder="Your Name" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label htmlFor="yourEmail" >Your Email</label>
                                        <input type="text" id="yourEmail" placeholder="Your Email" />
                                    </div>
                                    <div className="col-lg-12 text-center form-group">
                                        <button type="button" className="boxed-btn">Login</button>
                                    </div>
                                    <div className="col-lg-12 text-center form-group">
                                        <p style={{ color: '#6ab13b', fontSize: '18px', fontWeight: 'bold' }}>
                                            <Link to="/forgotPassword">Forgot Password?</Link></p>
                                    </div>
                                    <div className="col-lg-12 text-center form-group">
                                        <p style={{ color: '#6ab13b', fontSize: '18px', fontWeight: 'bold' }}>
                                            <Link to="/register">Create an account</Link></p>
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

export default Login;