import React from "react";

const Footer = () => {
    return (
        <footer class="section-footer">
        <section class="footer-top padding-y bg-soft-green">
            <div class="container">
                <div class="row">
                    <aside class="col-lg-4 col-md-12 mb-md-5 mb-sm-3 pl-md-5 pr-md-5">
                        <article class="footer-widget mr-3">
                            <img src="img/logo/logo.png" alt="" class="footer-logo mb-3"></img>
                            <p class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm</p>
                            <div class="footer-social">
                                <h4 class="mb-3 mt-4">Follow Us</h4>
                                <a title="Facebook" target="_blank" href="#"><i class="fab fa-facebook-f"></i></a>
                                <a title="Instagram" target="_blank" href="#"><i class="fab fa-twitter"></i></a>
                                <a title="Youtube" target="_blank" href="#"><i class="fab fa-youtube"></i></a>
                            </div>
                        </article>
                    </aside>
                    <div class="col-lg-8 col-md-12 pt-md-3 pt-sm-3">
                        <div class="row">
                            <aside class="col-lg-4 col-md-4 pl-lg-5 pl-xl-5 footer-widget">
                                <h6 class="title mb-5">Information</h6>
                                <ul class="list-unstyled">
                                    <li> <a href="#">Home</a></li>
                                    <li> <a href="#">Product</a></li>
                                    <li> <a href="#">Contact</a></li>
                                    <li> <a href="#">Blogs</a></li>
                                    <li> <a href="#">Login</a></li>
                                </ul>
                            </aside>
                            <aside class="col-lg-3 col-md-3 footer-widget">
                                <h6 class="title mb-5">Extras</h6>
                                <ul class="list-unstyled"> 
                                    <li> <a href="#">Help Center</a></li>
                                    <li> <a href="#">Delivery Info</a></li>
                                    <li> <a href="#">Privacy Policy</a></li>
                                    <li> <a href="#">Terms &amp; Condition</a></li>
                                    <li> <a href="#">Order &amp; Return</a></li>
                                </ul>
                            </aside>
                            <aside class="col-lg-5 col-md-5 footer-widget">
                                <h6 class="title mb-5">Newsletter</h6>
                                <form class="form-inline mb-3">
                                    <input type="text" placeholder="Your Email" class="form-control" name=""></input>
                                    <button class="btn mt-3 mb-4 btn-warning">Send</button>
                                </form>
                                <div class="payment-method">
                                    <a href="#" class="mr-4"><img src="img/payment/paypal.png" alt=""></img></a>
                                    <a href="#" class="mr-4"><img src="img/payment/mastercard.png" alt=""></img></a>
                                    <a href="#" class=""><img src="img/payment/visa.png" alt=""></img></a>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div> 
            </div>
        </section>	
        
        <section class="footer-copyright bg-green">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <p>Made with <span><i class="fa fa-heart"></i></span> love by <a target="_blank" href="https://themespell.com/">Themespell</a></p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 text-right">
                        <p>&copy; All right reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    ); 
}

export default Footer;