import React from 'react'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <div>
            {/* <!-- footer --> */}
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box about-widget">
                                <h2 className="widget-title">About us</h2>
                                <p style={{textAlign:'justify'}}>Welcome to QuickPick, your one-stop shop for high-quality products at unbeatable prices! We are committed to providing exceptional customer service, fast shipping, and a seamless shopping experience. Our mission is to bring you the best deals on top-rated products. Shop with confidence today!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box get-in-touch">
                                <h2 className="widget-title">Get in Touch</h2>
                                <ul>
                                    <li>salvimeet65@gmail.com</li>
                                    <li>+91 7043743687</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box pages">
                                <h2 className="widget-title">Pages</h2>
                                <ul>
                                    <li className="current-list-item"><Link to="/">Home</Link></li>
                                    {/* <li><Link to="/about">About</Link></li> */}
                                    <li><Link to="/singlenews">News</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box subscribe">
                                <h2 className="widget-title">Subscribe</h2>
                                <p>Subscribe to our mailing list to get the latest updates.</p>
                                <form action="https://themewagon.github.io/fruitkha/index.html">
                                    <input type="email" placeholder="Email" />
                                    <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end footer --> */}

        </div>
    )
}
