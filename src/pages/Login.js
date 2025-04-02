import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { userlogin } from '../Api/api';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { loginsuccess } from '../features/Addtocart/user_login/login';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errormsg, setErrormsg] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { ispending, error, data: users } = useQuery({
        queryKey: ['userlogin'],
        queryFn: userlogin,
    });

    // console.log(users);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!users) return;

        const founduser = users.find((user) => user.username === username && user.password === password);

        if (founduser) {
            setErrormsg('');
            toast.success('Login Successful:', founduser);
            dispatch(loginsuccess(founduser));
            navigate('/');
        } else {
            toast.error('Invalid email or password');
        }
    };


    return (
        <div>
         
            {/* <!-- breadcrumb-section --> */}
            <div class="breadcrumb-section breadcrumb-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <div class="breadcrumb-text">
                                <h1>Login form</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}

            {/* <!-- contact form --> */}
            <div class="contact-from-section mt-80 mb-80">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 mb-5 mb-lg-0">
                            <div id="form_status"></div>
                            <div className='login-icon'>
                                <span className='fa fa-user-circle text-center'></span>
                            </div>
                            <div className='container login-form'>
                                <p className='text-danger text-center'>{errormsg}</p>
                                <form onSubmit={handleSubmit}>
                                    <p>
                                        <input type="text" name="name" id="name" placeholder="Your Name" onChange={(e) => setUsername(e.target.value)} value={username} />
                                    </p>
                                    <p>
                                        <input type="password" name="password" id="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                                    </p>
                                    <input type="submit" value="Login" />
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- end contact form --> */}


        </div>
    )
}
