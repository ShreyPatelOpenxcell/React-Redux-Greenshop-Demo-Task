import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <section className="hero-area breadcumb-area">
                <div className="hero-carousel">
                    <div className="single-hero d-flex align-items-center text-center breadcumb-blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 text-center">
                                    <div className="hero-content">
                                        <h2>Register</h2>
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
                                        <label htmlFor="yourName" >User Name</label>
                                        <input type="text" id="yourName" placeholder="User Name" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label htmlFor="yourEmail" >Email</label>
                                        <input type="text" placeholder="Email" id="yourEmail" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label htmlFor="yourName" >Password</label>
                                        <input type="text" placeholder="Password" id="yourName" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <label htmlFor="yourEmail" >Confirm Password</label>
                                        <input type="text" id="yourEmail" placeholder="Confirm Password" />
                                    </div>
                                    <div className="col-lg-12 text-center form-group">
                                        <button type="button" className="boxed-btn">Sign up</button>
                                    </div>
                                    <div className="col-lg-12 text-center form-group">
                                        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Already have an account? <span style={{ color: '#6ab13b', fontSize: '18px', fontWeight: 'bold' }}>
                                            <Link to="/login">Log in</Link></span></p>
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

export default Register;