import React from "react";

const Category = () => {
    return (
        <>
            <div>
                <section className="hero-area breadcumb-area">
                    <div className="hero-carousel">
                        <div className="single-hero d-flex align-items-center text-center breadcumb-contact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-center">
                                        <div className="hero-content">
                                            <h3>Organic Food</h3>
                                            <h2>Contact</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-address-area pd-t-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="single-contact-info">
                                            <h4>Address</h4>
                                            <p>6th Forrest Ray, <br />Manhattan NYC 10001, USA</p>
                                        </div>
                                        <div className="single-contact-info">
                                            <h4>Address</h4>
                                            <p>6th Forrest Ray, <br />Manhattan NYC 10001, USA</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-contact-info">
                                            <h4>Address</h4>
                                            <p>6th Forrest Ray, <br />Manhattan NYC 10001, USA</p>
                                        </div>
                                        <div className="single-contact-info">
                                            <h4>Address</h4>
                                            <p>6th Forrest Ray, <br />Manhattan NYC 10001, USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="map-wrap">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987584510595!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1606298363793!5m2!1sen!2sbd" style={{ "border": "0" }} allowFullScreen aria-hidden="false" tabIndex={0} width={600} height={450} frameBorder={0} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-form-area pd-t-150">
                    <div className="container">
                        <header className="section-heading text-center">
                            <h3 className="section-title">Drop us a line</h3>
                        </header>
                        <div className="row">
                            <div className="col-lg-12">
                                <form action className="contact-form">
                                    <div className="row">
                                        <div className="col-lg-6 form-group">
                                            <label htmlFor="yourName">Your Name</label>
                                            <input type="text" id="yourName" />
                                        </div>
                                        <div className="col-lg-6 form-group">
                                            <label htmlFor="yourEmail">Your Email</label>
                                            <input type="text" id="yourEmail" />
                                        </div>
                                        <div className="col-lg-12 form-group">
                                            <label htmlFor="yourMessage">Your Message</label>
                                            <textarea name id="yourMessage" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-12 text-center form-group">
                                            <button type="submit" className="boxed-btn">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Category;