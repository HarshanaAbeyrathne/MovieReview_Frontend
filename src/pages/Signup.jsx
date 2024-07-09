import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/features/auth/authSlice';

const Signup = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');

    ///
    const dispatch = useDispatch();
    const { loading, satateError } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // const user = { name, email, password, mobile };
    // console.log(user);
    

    // axios.post('http://localhost:5000/api/user/signup', user)
    //     .then(res => {
    //         console.log(res.data);
    //         alert('User registered successfully!');
    //     })
    //     .catch(err => {
    //       // console.log(err);
    //       if (err.response && err.response.data && err.response.data.message) {
    //           setError(err.response.data.message);
    //       } else {
    //           setError('An error occurred!');
    //       }
    //   });
    dispatch(signup({ name, email, password, mobile }));
    }

  
  
    return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
        <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              onChange={(e) => setName(e.target.value)}
              value={name} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
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
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                required 
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input 
              type="tel" 
              id="mobile" 
              name="mobile" 
              required 
              onChange={(e) => setMobile(e.target.value)}
              value={mobile} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </form>
        <p className="mt-4 text-center">do you have alrady an account?    <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
      </div>
    </div>
  );
}

export default Signup;
