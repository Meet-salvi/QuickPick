import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router';
import { categorydata, productdata } from '../Api/api';

export default function Shop() {

    // category data
    const { isLoading: loading, data: category, error: suberror } = useQuery({
        queryKey: ['category'],
        queryFn: categorydata,
        refetchInterval: 5000,
    })
    console.log(category);

    // product data
    const { isPending, data, error } = useQuery({
        queryKey: ['productdata'],
        queryFn: productdata,
        enabled: !!category,
    });

    console.log(data);


    if (error) {
        <h1>error occured</h1>
    }


    if (suberror) {
        <h1>Categories not found</h1>
    }

    return (
        <div>

            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
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
                                <a class="btn btn-light dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {
                                        loading ? <h1>Loading...</h1> : category.map((value) => {
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
                            isPending ? <h1>Loading...</h1> : data.map((value) => {
                                return (
                                    <div className="col-lg-4 col-md-6 text-center strawberry">
                                        <div className="single-product-item">
                                            <div className="product-image">
                                                <Link to={`/singleproduct/${value.id}`}><img src={value.thumbnail} alt="" /></Link>
                                            </div>
                                            <h3>{value.title}</h3>
                                            <p className="product-price"><span>Price</span> {value.price} $</p>
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
                                    <li><a href="#">Prev</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a className="active" href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">Next</a></li>
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
