import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router'
import { logout } from '../features/Addtocart/user_login/login';
import { useQuery } from '@tanstack/react-query';
import { searchproductdata } from '../Api/api';

export default function Header() {
    const user = useSelector((state) => state.user.user);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
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
                                        {/* <li><Link to="/userdetails">User</Link></li> */}

                                        <li>
                                            <div className="header-icons">
                                                <a className="mobile-hide search-bar-icon" to="#"><i className="fas fa-search" onClick={() => setIsSearchOpen(true)}></i></a>
                                                {/* <input type='search' className="mobile-hide search-bar-icon search-icon me-3" placeholder='search' onChange={(e) => { handleInput(e) }} /> */}
                                                {user ? <Link className="shopping-cart" to="/cart"><i className="fas fa-shopping-cart"></i></Link> : null}
                                                {user ? <Link to="/userdetails" ><i className="fa fa-user-circle text-center"></i></Link> : null}

                                                {user ? (
                                                    <Link className='log-btn me-2' onClick={() => dispatch(logout())}>Logout</Link>
                                                ) : (
                                                    <Link className='log-btn me-2' to='/login'>Login</Link>
                                                )}
                                            </div>
                                            <div className=''>
                                                {/* <ul style={{}}>
                                                    {
                                                        filter.map((value) => {
                                                            return (
                                                                <li><Link to={`/productCategory/${value.name}`}>{value.name}</Link></li>
                                                            )
                                                        })
                                                    }
                                                </ul> */}
                                            </div>

                                        </li>
                                    </ul>
                                </nav>
                                <Link className="mobile-show search-bar-icon" to="#"><i className="fas fa-search"></i></Link>
                                <div className="mobile-menu"></div>
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
                                    <input type="text" placeholder="Search" onChange={(e) => { handleInput(e) }}/>
                                    <button type="submit">Search <i className="fas fa-search" /></button>
                                    {/* Display search results */}
                                    <ul>
                                        {
                                            filter.map((value) => {
                                                return (
                                                    <li><Link to={`/productCategory/${value.name}`}>{value.name}</Link></li>
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
