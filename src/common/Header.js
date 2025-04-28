import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router'
import { logout } from '../features/Addtocart/user_login/login';
import { useQuery } from '@tanstack/react-query';
import { searchproductdata } from '../Api/api';


export default function Header() {
    const user = useSelector((state) => state.user.user);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [Open, setOpen] = useState(false);
    const [search, setSearch] = useState([]);
    const [filter, setFilter] = useState([]);
    const dispatch = useDispatch();

    // search data
    const { isPending, data, error } = useQuery({
        queryKey: ['searchproductdata'],
        queryFn: searchproductdata,
    })

    if (error) {
        <h1>Data not Fetch</h1>
    }

    function handleInput(e) {
        const search = e.target.value;
        setSearch(search);
        const filtercategory = data.filter((value) => {
            return value.name.toLowerCase().includes(search.toLowerCase());
        })
        setFilter(filtercategory);
    }


    return (
        <div>
            {/* <!-- header --> */}
            <div className="top-header-area" id="sticker">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="main-menu-wrap">
                                {/* <!-- logo --> */}
                                <div className="site-logo">
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        {/* <img src="assets/img/logo.png" alt="" /> */}
                                        <h3 style={{ color: '#f28123' }}>QuickPick</h3>
                                    </Link>
                                </div>
                                {/* <!-- logo --> */}

                                {/* <!-- menu start --> */}
                                <nav className="main-menu">
                                    <ul>
                                        <li className="current-list-item"><Link to="/">Home</Link></li>
                                        {/* <li><Link to="/about">About</Link></li> */}
                                        <li><Link to="/singlenews">News</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/shop">Shop</Link></li>

                                        <li>
                                            <div className="header-icons d-flex align-items-center gap-3">
                                                {/* Search icon */}
                                                <Link className="mobile-show search-bar-icon search-product" to="#" onClick={() => setIsSearchOpen(true)}><i className="fas fa-search"></i></Link>

                                                {/* Conditionally rendered icons for authenticated users */}
                                                {user && (
                                                    <>
                                                        <Link className="shopping-cart d-block" to="/cart">
                                                            <i className="fas fa-shopping-cart"></i>
                                                        </Link>
                                                        <Link to="/userdetails">
                                                            <i className="fa fa-user-circle text-center"></i>
                                                        </Link>
                                                    </>
                                                )}

                                                {/* Auth buttons */}
                                                <div className='d-lg-block d-md-none d-sm-none' onClick={() => setOpen(!Open)}>
                                                    {user ? (
                                                        <Link className='log-btn me-2' onClick={() => dispatch(logout())}>Logout</Link>
                                                    ) : (
                                                        <Link className='log-btn me-2' to='/login'>Login</Link>
                                                    )}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>

                                <Link className="mobile-show search-bar-icon search-product" to="#" onClick={() => setIsSearchOpen(true)}><i className="fas fa-search"></i></Link>
                                <div className="header-toggle">
                                    <button
                                        className="header-btn mobile-menu-toggle d-xl-none d-lg-none"
                                        onClick={() => setOpen(!Open)}
                                    >
                                        <span />
                                        <span />
                                        <span />
                                    </button>
                                </div>
                                {/* <div className='d-lg-none d-md-none d-sm-block'>
                                    {user ? (
                                        <Link className='log-btn me-2' onClick={() => dispatch(logout())}>Logout</Link>
                                    ) : (
                                        <Link className='log-btn me-2' to='/login'>Login</Link>
                                    )}
                                </div> */}
                                {/*mobile menu start*/}
                                <div className={`mobile-menu ${Open ? "active" : ""} d-lg-none d-md-none d-sm-block`}>
                                    <div className="close" onClick={() => setOpen(!Open)}>
                                        <span style={{ color: 'white' }}>X</span>
                                    </div>
                                    <ul className="mobile-nav-menu">
                                        <li onClick={() => setOpen(!Open)} className="current-list-item"><Link to="/">Home</Link></li>
                                        <li onClick={() => setOpen(!Open)}><Link to="/singlenews">News</Link></li>
                                        <li onClick={() => setOpen(!Open)}><Link to="/contact">Contact</Link></li>
                                        <li onClick={() => setOpen(!Open)}><Link to="/shop">Shop</Link></li>
                                        <div className='d-lg-none d-md-none d-sm-block' onClick={() => setOpen(!Open)}>
                                            {user ? (
                                                <Link className='log-btn me-2' onClick={() => dispatch(logout())}>Logout</Link>
                                            ) : (
                                                <Link className='log-btn me-2' to='/login'>Login</Link>
                                            )}
                                        </div>
                                        {user ? <Link className="shopping-cart d-block" to="/cart"><i className="fas fa-shopping-cart mt-4" onClick={() => setOpen(!Open)}></i></Link> : null}
                                        {user ? <Link to="/userdetails" ><i className="fa fa-user-circle text-center mt-3" onClick={() => setOpen(!Open)}></i></Link> : null}
                                    </ul>
                                </div>
                                {/*mobile menu end*/}
                                {/* <!-- menu end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end header --> */}

            {/* search area */}
            <div className={`search-area ${isSearchOpen ? 'search-active' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="close-btn"><i className="fas fa-window-close" onClick={() => setIsSearchOpen(false)} /></span>
                            <div className="search-bar">
                                <div className="search-bar-tablecell">
                                    <h3>Search For:</h3>
                                    <input type="text" placeholder="Search" onChange={(e) => { handleInput(e) }} />
                                    <button type="submit">Search <i className="fas fa-search" /></button>
                                    {/* Display search results */}
                                    <ul>
                                        {
                                            filter.map((value) => {
                                                return (
                                                    <li onClick={() => setIsSearchOpen(false)}><Link to={`/productCategory/${value.name}`}>{value.name}</Link></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end search area */}


        </div>
    )
}
