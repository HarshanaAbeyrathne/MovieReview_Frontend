import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

import {useDispatch, useSelector} from 'react-redux';
import { login } from '../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

//react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const user  = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    // const {loading, hasErrors} = useSelector(state => state.auth);
    const navigate  = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({email, password}))
            .unwrap()
            .then((user) => {
                // console.log(user);
                if(user){
                    alert('Login successful!');
                    navigate('/');
                }
            })
            .catch((err) => {
                setError(err.message || err);
            });
    }

    // useEffect(() => {
    //     if(user){
    //         alert('Login successful!');
    //         navigate('/');
    //     }
    // }, [user, navigate]);

  return (
    <div>
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
            <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                required
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input 
                type="password" 
                id="password" 
                name="password" 
                required 
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <button 
                type="submit" 
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                Login
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            </form>
            <p className="mt-4 text-center">don't have an account?    <a href="/signup" className="text-blue-500 hover:underline">Register</a></p>
            <p className="mt-4 text-center">Admin?    <a href="/adminLogin" className="text-blue-500 hover:underline">Admin Login</a></p>
        </div>
    </div>
    </div>
  )
}

export default Login