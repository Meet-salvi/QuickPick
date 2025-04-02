import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../features/Addtocart/user_login/login';

export default function UserDetails() {
    const userdata = useSelector(state => state.user);
    console.log(userdata);
    const dispatch = useDispatch();

    return (
        <div>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h1>Hello ! {userdata.user.username}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}
            <div>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='user-details-wrap'>
                                <div className='user-img'>
                                    <img src={userdata.user.image} alt='user' />
                                </div>
                                <div className='user-details'>
                                    <h6>Name : {userdata.user.username}</h6>
                                    <h6>Email : {userdata.user.email}</h6>
                                    <h6>Phone : {userdata.user.phone}</h6>
                                    <h6>age : {userdata.user.age}</h6>
                                    <h6>Gender : {userdata.user.gender}</h6>
                                    <h6>Dob : {userdata.user.birthDate}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='user-details-wrap'>
                                <h4>Address</h4>
                                <h6>City : {userdata.user.address.city}</h6>
                                <h6>State : {userdata.user.address.state}</h6>
                                <h6>Country : {userdata.user.address.country}</h6>
                            </div>
                            <div className='user-details-wrap mt-4'>
                                <h4>company</h4>
                                <h6>Name : {userdata.user.company.name}</h6>
                                <h6>catchPhrase : {userdata.user.company.department}</h6>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
