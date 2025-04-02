import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const [product, setProduct] = useState([]);
    const [gorceri, setGroceri] = useState([]);
    let pro = product.splice(3);
    let gro = gorceri.splice(5);

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((response) => {
            return response.json();
        }).then((data) => {
            setProduct(data["products"]);
            // console.log(data);
        })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/laptops').then((response) => {
            return response.json();
        }).then((data) => {
            setGroceri(data['products']);
        })
    }, [])

    return (
        <>

            {/* <!-- hero area --> */}
            <div className="hero-area hero-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 offset-lg-2 text-center">
                            <div className="hero-text">
                                <div className="hero-text-tablecell">
                                    <p className="subtitle">Fashion & Beauty</p>

                                    <div className="hero-btns">
                                        <Link to="/shop" className="boxed-btn">Shop</Link>
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
                                <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/43fd4ce7-0b96-4846-94cb-9bcce96d532b.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="" />
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
                        <h3><span className="orange-text mb-5">Latest</span>Product</h3>

                        {
                            gorceri.map((value) => {
                                return (
                                    <div className="col-lg-4 col-md-6 text-center strawberry">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <Link to={`/singleproduct/${value.id}`}><img src={value.thumbnail} alt="" /></Link>
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

        </>
    )
}
