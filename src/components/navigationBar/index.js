import React from "react";

const NavBar = () => {
    return (
        <nav class="navbar navbar-main navbar-expand-lg navbar-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link cat" data-toggle="dropdown" href="#" aria-expanded="false"><strong>&nbsp; Shop By Category</strong></a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Foods and Drink</a>
                            <a class="dropdown-item" href="#">Fresh Meat</a>
                            <a class="dropdown-item" href="#">Sea Fishes</a>
                            <a class="dropdown-item" href="#">Butter &amp; Eggs</a>
                            <a class="dropdown-item" href="#">Fruits</a>
                            <a class="dropdown-item" href="#">Frozen Foods</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">Products<i class="fa fa-angle-down"></i></a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="category.html">Category</a>
                            <a class="dropdown-item" href="cart.html">Cart</a>
                            <a class="dropdown-item" href="checkout.html">Checkout</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div> 
        </div> 
    </nav>

    );
}

export default NavBar;