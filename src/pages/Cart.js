import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { qtytotal, removePro } from '../features/Addtocart/addproductslice';

export default function Cart() {
    const cartProduct = useSelector(state => state.addToCart);
    // console.log(cartProduct);
    const dispatch = useDispatch();

    return (
        <div>

            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
                                <h1>Cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}

            {/* <!-- cart --> */}
            <div className="cart-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="cart-table-wrap">
                                <table className="cart-table">
                                    <thead className="cart-table-head">
                                        <tr className="table-head-row">
                                            <th className="product-remove"></th>
                                            <th className="product-image">Product Image</th>
                                            <th className="product-name">Name</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartProduct.map((value) => {
                                                return (
                                                    <tr className="table-body-row">
                                                        <td className="product-remove"><a href="#"><i className="fas fa-times"
                                                            onClick={() => dispatch(removePro({ id: value.id }))}
                                                        >
                                                        </i></a></td>
                                                        <td className="product-image"><img src={value.thumbnail} alt="" /></td>
                                                        <td className="product-name">{value.title}</td>
                                                        <td className="product-price">${value.price}</td>
                                                        <td className="product-quantity">
                                                            <div className="quantity">
                                                                <input type="number" value={value.qty}
                                                                    min={1}
                                                                    onChange={(e) => dispatch(qtytotal({ id: value.id, qty: e.target.value }))}
                                                                />

                                                            </div>
                                                        </td>
                                                        <td className="product-total">${value.total.toFixed(2)}</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="total-section">
                                <table className="total-table">
                                    <thead className="total-table-head">
                                        <tr className="table-total-row">
                                            <th>Total</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartProduct.map((value) => {
                                                return (
                                                    <tr className="total-data">
                                                        <td><strong>Subtotal: </strong></td>
                                                        <td>${value.total.toFixed(2)}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        {/* <tr className="total-data">
                                            <td><strong>Shipping: </strong></td>
                                            <td>$45</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Total: </strong></td>
                                            <td>$545</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                                <div className="cart-buttons">
                                    <a href="cart.html" className="boxed-btn">Update Cart</a>
                                    <a href="checkout.html" className="boxed-btn black">Check Out</a>
                                </div>
                            </div>

                            <div className="coupon-section">
                                <h3>Apply Coupon</h3>
                                <div className="coupon-form-wrap">
                                    <form action="https://themewagon.github.io/fruitkha/index.html">
                                        <p><input type="text" placeholder="Coupon" /></p>
                                        <p><input type="submit" value="Apply" /></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end cart --> */}

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
        </div>
    )
}
