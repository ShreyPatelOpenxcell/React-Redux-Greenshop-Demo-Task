import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <>
            <section className="hero-area breadcumb-area">
                <div className="hero-carousel">
                    <div className="single-hero d-flex align-items-center text-center breadcumb-category">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 text-center">
                                    <div className="hero-content">
                                        <h3>Organic Food</h3>
                                        <h2>Blog</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-area pd-t-150">
                <div className="container">
                    <header className="section-heading text-center">
                        <h3 className="section-title">Latest Blogs</h3>
                    </header>
                    <div className="row">
                        <div className="col-lg-3">
                        </div>
                        <div className="col-lg-6">
                            <article className="single-blog featured-blog">
                                <figure>
                                    <div className="blog-thumb mb-4">
                                        <img src="img/blog/featured-blog-1.png" />
                                    </div>
                                    <figcaption className="blog-content">
                                        <h4 className="post-title mb-4">Lorem Ipsum is simply dummy text?</h4>
                                        <p className="post-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, hic doloribus deserunt magni cumque consectetur nihil magnam eveniet quo, provident quisquam, eius blanditiis labore ullam et tenetur maxime ea illo quia veniam. Magni laudantium, facilis?</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus perferendis ex corrupti, rem quibusdam ipsa, iste odio repellat consectetur deserunt sit cumque dolores quisquam magni, et. Sint expedita, aliquid mollitia quisquam vero explicabo beatae, nemo ipsa atque facere quis dolore placeat, debitis eligendi fugit eius.</p>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                        <div className="col-lg-3">
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs;