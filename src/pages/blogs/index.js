import React, { Suspense, useEffect, lazy } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "src/redux/reducers/blogs/actions";
import LinesEllipsis from "react-lines-ellipsis";

const Blogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blogReducer.blogs);
    const errorMessage = useSelector(state => state.blogReducer.errorMessage);
    const ErrorMessage = lazy(() => import("src/components/errorMessage"));

    useEffect(() => {
        debugger
        if (!blogs.length) {
            //we will check blogs are avilable or not
            dispatch(setBlogs());
        }

    }, []);

    return (
        <>
            {errorMessage ? <>
                <Suspense fallback="...Loading">
                    <ErrorMessage errorMessage={errorMessage}></ErrorMessage>
                </Suspense>
            </> : <>
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
                {
                    blogs.length > 0 &&
                    <>
                        <section className="blog-area pd-t-150">
                            <div className="container">
                                <header className="section-heading text-center">
                                    <h3 className="section-title">Latest Blogs</h3>
                                </header>
                                <div className="row">
                                    {
                                        blogs.map((blog) => {
                                            return (
                                                <>
                                                    <div className="col-lg-4">
                                                        <article className="single-blog featured-blog">
                                                            <figure>
                                                                <div className="blog-thumb mb-4">
                                                                    <Link to={"/blogDetails/" + blog.id}><img src={blog.image?.url} alt="BlogImage" /></Link>
                                                                </div>
                                                                <figcaption className="blog-content">
                                                                    <h4 className="post-title mb-4"><a href="blog-details.html">{blog.title}</a></h4>
                                                                    <LinesEllipsis
                                                                        text={blog.description}
                                                                        maxLine='3'
                                                                        ellipsis='...'
                                                                        trimRight
                                                                        basedOn='letters'
                                                                        className="post-text"
                                                                    />
                                                                </figcaption>
                                                            </figure>
                                                        </article>
                                                        <br></br>
                                                    </div>
                                                </>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                    </>
                }
            </>
            }
        </>
    );
}

export default Blogs;