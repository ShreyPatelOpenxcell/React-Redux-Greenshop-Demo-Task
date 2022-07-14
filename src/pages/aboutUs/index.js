import React from "react";

const AboutUs = () => {
    return (
        <>
            <section className="hero-area breadcumb-area">
                <div className="hero-carousel">
                    <div className="single-hero d-flex align-items-center text-center breadcumb-about">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 text-center">
                                    <div className="hero-content">
                                        <h3>Organic Food</h3>
                                        <h2>About Us</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-us-area pd-t-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 text-center">
                            <div className="about-us-content">
                                <h2>Hello! We are Organic</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                <span className="social about mt-4">
                                    <a href><i className="fab fa-facebook-f" /></a>
                                    <a href><i className="fab fa-twitter" /></a>
                                    <a href><i className="fab fa-youtube" /></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-area pd-t-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="team-member">
                                <div className="member-photo mb-4">
                                    <img src="img/team/member-1.jpg" alt />
                                </div>
                                <div className="member-info text-center">
                                    <h4>Lisa Maria</h4>
                                    <p>CEO</p>
                                    <span className="member-social">
                                        <a href><i className="fab fa-facebook-f" /></a>
                                        <a href><i className="fab fa-twitter" /></a>
                                        <a href><i className="fab fa-youtube" /></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="team-member">
                                <div className="member-photo mb-4">
                                    <img src="img/team/member-2.jpg" alt />
                                </div>
                                <div className="member-info text-center">
                                    <h4>Lisa Maria</h4>
                                    <p>CEO</p>
                                    <span className="member-social">
                                        <a href><i className="fab fa-facebook-f" /></a>
                                        <a href><i className="fab fa-twitter" /></a>
                                        <a href><i className="fab fa-youtube" /></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="team-member">
                                <div className="member-photo mb-4">
                                    <img src="img/team/member-3.jpg" alt />
                                </div>
                                <div className="member-info text-center">
                                    <h4>Lisa Maria</h4>
                                    <p>CEO</p>
                                    <span className="member-social">
                                        <a href><i className="fab fa-facebook-f" /></a>
                                        <a href><i className="fab fa-twitter" /></a>
                                        <a href><i className="fab fa-youtube" /></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="team-member">
                                <div className="member-photo mb-4">
                                    <img src="img/team/member-4.jpg" alt />
                                </div>
                                <div className="member-info text-center">
                                    <h4>Lisa Maria</h4>
                                    <p>CEO</p>
                                    <span className="member-social">
                                        <a href><i className="fab fa-facebook-f" /></a>
                                        <a href><i className="fab fa-twitter" /></a>
                                        <a href><i className="fab fa-youtube" /></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;