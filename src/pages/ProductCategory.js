import React, { useEffect, useState } from 'react'
import { Link, useLocation , useParams } from 'react-router';

export default function ProductCategory() {
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);

    let {name} = useParams();    

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${name}`).then((response) => {
            return response.json();
        }).then((data) => {
            setProduct(data["products"]);
            // console.log(data);
        })
    }, [name])

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories').then((response) => {
            return response.json();
        }).then((data) => {
            setCategory(data);
        })
    }, [])

    return (
        <div>

            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p></p>
                                <h1>Shop</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}

            {/* <!-- products --> */}
            <div className="product-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="dropdown mb-3">
                                <Link class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {
                                        category.map((value) => {
                                            return (
                                                <li><Link class="dropdown-item" to={`/productCategory/${value.name}`}>{value.name}</Link></li>
                                            )
                                        })
                                    }

                                </ul>
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

                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="pagination-wrap">
                                <ul>
                                    <li><Link to="#">Prev</Link></li>
                                    <li><Link href="#">1</Link></li>
                                    <li><Link className="active" href="#">2</Link></li>
                                    <li><Link href="#">3</Link></li>
                                    <li><Link href="#">Next</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end products --> */}

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
