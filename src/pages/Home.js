import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

export default function Home() {
    const [product, setProduct] = useState([]);
    const [gorceri, setGroceri] = useState([]);
    let pro = product.splice(3);
    let gro = gorceri.splice(3);

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((response) => {
            return response.json();
        }).then((data) => {
            setProduct(data["products"]);
            // console.log(data);
        })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/Groceries').then((response) => {
            return response.json();
        }).then((data) => {
            setGroceri(data['products']);
        })
    }, [])

    return (
        <>
            {/* <!-- search area --> */}
            <div className="search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="close-btn"><i className="fas fa-window-close"></i></span>
                            <div className="search-bar">
                                <div className="search-bar-tablecell">
                                    <h3>Search For:</h3>
                                    <input type="text" placeholder="Keywords" />
                                    <button type="submit">Search <i className="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end search area --> */}


            {/* <!-- hero area --> */}
            <div className="hero-area hero-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-2 text-center">
                            <div className="hero-text">
                                <div className="hero-text-tablecell">
                                    <p className="subtitle">Fashion & Beauty</p>

                                    <div className="hero-btns">
                                        <Link to="/shop" className="boxed-btn">Fashion Collection</Link>
                                        <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end hero area --> */}

            {/* <!-- features list section --> */}
            <div className="list-section pt-80 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-shipping-fast"></i>
                                </div>
                                <div className="content">
                                    <h3>Free Shipping</h3>
                                    <p>When order over $75</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-phone-volume"></i>
                                </div>
                                <div className="content">
                                    <h3>24/7 Support</h3>
                                    <p>Get support all day</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="list-box d-flex justify-content-start align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-sync"></i>
                                </div>
                                <div className="content">
                                    <h3>Refund</h3>
                                    <p>Get refund within 3 days!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- end features list section --> */}

            {/* <!-- product section --> */}
            <div className="product-section mt-100 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Our</span> Products</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row product-lists">
                        {
                            product.map((value) => {
                                return (
                                    <div className="col-lg-4 col-md-6 text-center strawberry">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <Link to={`/singleproduct/${value.id}`}><img src={value.images} alt="" /></Link>
                                            </div>
                                            <h3>{value.title}</h3>
                                            <p className="product-price"><span>Price</span> {value.price} $</p>
                                            {/* <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link> */}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            {/* <!-- end product section --> */}

            {/* <!-- cart banner section --> */}
            <section className="cart-banner">
                <div className="container">
                    <div className="row clearfix">
                        {/* <!--Image Column--> */}
                        <div className="image-column col-lg-12">
                            <div className="image">
                                <img src="https://i.pinimg.com/originals/75/1d/2b/751d2b30f041d6a7ec336dbdef797311.jpg" alt="" />
                            </div>
                        </div>
                        {/* <!--Content Column--> */}

                    </div>
                </div>
            </section>
            {/* <!-- end cart banner section --> */}

            {/* <!-- advertisement section --> */}
            <div className="abt-section mb-150 mt-5 mb-3">
                <div className="container">
                    <div className="row product-lists">
                        <h3><span className="orange-text mb-5">Our</span> Gorceris</h3>

                        {
                            gorceri.map((value) => {
                                return (
                                    <div className="col-lg-4 col-md-6 text-center strawberry">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <Link to={`/singleproduct/${value.id}`}><img src={value.images} alt="" /></Link>
                                            </div>
                                            <h3>{value.title}</h3>
                                            <p className="product-price"><span>Price</span> {value.price} $</p>
                                            {/* <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link> */}
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            {/* <!-- end advertisement section --> */}

            {/* <!-- shop banner --> */}
            <section className="shop-banner">
                <div className="container">

                </div>
            </section>
            {/* <!-- end shop banner --> */}

            {/* <!-- latest news --> */}
            <div className="latest-news pt-150 pb-150">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Our</span> News</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-news">
                                <a href="single-news.html"><div className="latest-news-bg news-bg-1"></div></a>
                                <div className="news-text-box">
                                    <h3><a href="single-news.html">You will vainly look for fruit on it in autumn.</a></h3>
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user"></i> Admin</span>
                                        <span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
                                    </p>
                                    <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                    <a href="single-news.html" className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-news">
                                <a href="single-news.html"><div className="latest-news-bg news-bg-2"></div></a>
                                <div className="news-text-box">
                                    <h3><a href="single-news.html">A man's worth has its season, like tomato.</a></h3>
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user"></i> Admin</span>
                                        <span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
                                    </p>
                                    <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                    <a href="single-news.html" className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-latest-news">
                                <a href="single-news.html"><div className="latest-news-bg news-bg-3"></div></a>
                                <div className="news-text-box">
                                    <h3><a href="single-news.html">Good thoughts bear good fresh juicy fruit.</a></h3>
                                    <p className="blog-meta">
                                        <span className="author"><i className="fas fa-user"></i> Admin</span>
                                        <span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
                                    </p>
                                    <p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
                                    <a href="single-news.html" className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <a href="news.html" className="boxed-btn">More News</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end latest news --> */}

            {/* <!-- logo carousel --> */}
            <div className="logo-carousel-section">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-2">
                            <div className="logo-carousel-inner">
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="logo-carousel-inner">
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/2.png" alt="" />
                                </div>
                            </div>
                        </div><div className="col-lg-2">
                            <div className="logo-carousel-inner">
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/3.png" alt="" />
                                </div>
                            </div>
                        </div><div className="col-lg-2">
                            <div className="logo-carousel-inner">
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/4.png" alt="" />
                                </div>
                            </div>
                        </div><div className="col-lg-2">
                            <div className="logo-carousel-inner">
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/5.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- end logo carousel --> */}

        </>
    )
}
