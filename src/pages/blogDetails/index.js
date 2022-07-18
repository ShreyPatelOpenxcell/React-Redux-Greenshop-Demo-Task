import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedBlog, removeSelectedBlog } from "src/redux/reducers/blogs/actions";
import { useParams } from "react-router-dom";

const Blogs = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const blog = useSelector(state => state.blog.selectedBlog);

    useEffect(() => {

        if (params?.id) {
            dispatch(selectedBlog(params.id));
        }
        // on Component UnMount event we will remove the Selected Blog Data from Store
        return () => {
            dispatch(removeSelectedBlog());
        };

    }, []);

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
                    <div className="row">
                        <div className="col-lg-12">
                            <article className="single-blog featured-blog">
                                <figure>
                                    <div className="blog-thumb mb-4">
                                        <img src={blog.image?.url} alt="BlogImage" />
                                    </div>
                                    <figcaption className="blog-content">
                                        <h4 className="post-title mb-4"><a href="blog-details.html">{blog.title}</a></h4>
                                        <p className="post-text">
                                            {blog.description}
                                        </p>
                                    </figcaption>
                                </figure>
                            </article>
                            <br></br>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blogs;