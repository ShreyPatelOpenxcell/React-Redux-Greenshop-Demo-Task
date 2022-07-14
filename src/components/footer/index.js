import React from "react";

const Footer = () => {
    return (
        <footer className="section-footer">
            <section className="footer-top padding-y bg-soft-green">
                <div className="container">
                    <div className="row">
                        <aside className="col-lg-4 col-md-12 mb-md-5 mb-sm-3 pl-md-5 pr-md-5">
                            <article className="footer-widget mr-3">
                                <img src="img/logo/logo.png" alt className="footer-logo mb-3" />
                                <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm</p>
                                <div className="footer-social">
                                    <h4 className="mb-3 mt-4">Follow Us</h4>
                                    <a title="Facebook" target="_blank" href="#"><i className="fab fa-facebook-f" /></a>
                                    <a title="Instagram" target="_blank" href="#"><i className="fab fa-twitter" /></a>
                                    <a title="Youtube" target="_blank" href="#"><i className="fab fa-youtube" /></a>
                                </div>
                            </article>
                        </aside>
                        <div className="col-lg-8 col-md-12 pt-md-3 pt-sm-3">
                            <div className="row">
                                <aside className="col-lg-4 col-md-4 pl-lg-5 pl-xl-5 footer-widget">
                                    <h6 className="title mb-5">Information</h6>
                                    <ul className="list-unstyled">
                                        <li> <a href="#">Home</a></li>
                                        <li> <a href="#">Product</a></li>
                                        <li> <a href="#">Contact</a></li>
                                        <li> <a href="#">Blogs</a></li>
                                        <li> <a href="#">Login</a></li>
                                    </ul>
                                </aside>
                                <aside className="col-lg-3 col-md-3 footer-widget">
                                    <h6 className="title mb-5">Extras</h6>
                                    <ul className="list-unstyled">
                                        <li> <a href="#">Help Center</a></li>
                                        <li> <a href="#">Delivery Info</a></li>
                                        <li> <a href="#">Privacy Policy</a></li>
                                        <li> <a href="#">Terms &amp; Condition</a></li>
                                        <li> <a href="#">Order &amp; Return</a></li>
                                    </ul>
                                </aside>
                                <aside className="col-lg-5 col-md-5 footer-widget">
                                    <h6 className="title mb-5">Newsletter</h6>
                                    <form className="form-inline mb-3">
                                        <input type="text" placeholder="Your Email" className="form-control" name />
                                        <button className="btn mt-3 mb-4 btn-warning">Send</button>
                                    </form>
                                    <div className="payment-method">
                                        <a href="#" className="mr-4"><img src="img/payment/paypal.png" alt /></a>
                                        <a href="#" className="mr-4"><img src="img/payment/mastercard.png" alt /></a>
                                        <a href="#" className><img src="img/payment/visa.png" alt /></a>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-copyright bg-green">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <p>Made with <span><i className="fa fa-heart" /></span> love by <a target="_blank" href="https://themespell.com/">Themespell</a></p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 text-right">
                            <p>© All right reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>

    );
}

export default Footer;