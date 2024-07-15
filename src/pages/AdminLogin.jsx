import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

//react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  // const {loading, hasErrors} = useSelector(state => state.auth);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(adminLogin({ email, password }))
      .unwrap()
      .then((user) => {
        // console.log(user);
        if (user) {
          alert("Admin Login successful!");
          navigate('/adminMain');
        }
      })
      .catch((err) => {
        setError(err.message || err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AdminLogin;
