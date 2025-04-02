import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router';
import { addProducts } from '../features/Addtocart/addproductslice';
import { singleproduct } from '../Api/api';
import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

export default function SingleProduct() {
    const [singleproduct, setSingleProduct] = useState([]);
    const [product, setProduct] = useState([]);
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate()

    let pro = product.splice(3);

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((response) => {
            return response.json();
        }).then((data) => {
            setProduct(data["products"]);
            console.log(data);
        })
    }, [])

    let { id } = useParams();

    // const { data: singleproduct, isLoading, error } = useQuery({
    //     queryKey: ["product", id], // Dynamic query key
    //     queryFn: singleproduct(id),
    // })

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then((response) => {
            return response.json();
        }).then((data) => {
            setSingleProduct(data);
            console.log(data);
        })
    }, [])

    // console.log(singleproduct.images);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'You need to log in first.',
                confirmButtonText: 'Login',
                allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        } else {
            dispatch(addProducts({
                id: singleproduct.id,
                title: singleproduct.title,
                price: singleproduct.price,
                thumbnail: singleproduct.thumbnail,
            }));

            Swal.fire({
                icon: 'success',
                title: 'Product added to cart!',
                showConfirmButton: false,
                timer: 2000,
            });
        }
    };
    // if(isLoading)  return <span>Loading...</span>

    return (
        <div>


            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>See more Details</p>
                                <h1>Single Product</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}

            {/* <!-- single product --> */}
            <div className="single-product mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="single-product-img">
                                <img src={singleproduct.thumbnail} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="single-product-content">
                                <h3>{singleproduct.title}</h3>
                                <p className="single-product-pricing"><span>Price</span> ${singleproduct.price}</p>
                                <p>{singleproduct.description}</p>
                                <div className="single-product-form">
                                    <form action="https://themewagon.github.io/fruitkha/index.html">
                                        <input type="number" placeholder="1" min="1" />
                                    </form>
                                    <Link
                                        onClick={(e) => handleClick(e)}
                                        className="cart-btn"
                                    >
                                        <i className="fas fa-shopping-cart"></i> Add to Cart
                                    </Link>
                                    <p><strong>Categories: </strong>{singleproduct.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end single product --> */}

            {/* <!-- more products --> */}
            <div className="more-products mb-150">
                <div className="container">
                    <h3><span className="orange-text">Related</span> Products</h3>
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
            {/* <!-- end more products --> */}

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
