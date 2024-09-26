import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    dispatch(logout());
  }

  return (
    <nav className="bg-transparent">
      {/* bg-gradient-to-r from-black via-red-900 to-black shadow-lg */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4 ">
          <div className="flex items-center">
            <a href="/" className="flex items-center py-4 px-2 text-4xl font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">NexFilm</span>
            </a>
          </div>
          
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-8">


            <a href="/" className="text-gray-300 py-4 px-2 hover:text-white transition duration-300">
              Home
            </a>
            <a href="/ratemovie" className="text-gray-300 py-4 px-2 hover:text-white transition duration-300">
              Rate for Movie
            </a>
            <a href="/about" className="text-gray-300 py-4 px-2 hover:text-white transition duration-300">
              About
            </a>
            <a href="/contact" className="text-gray-300 py-4 px-2 hover:text-white transition duration-300">
              Contact
            </a>
          </div>
  
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3">
            {!user && (
              <div>
                <a href="/login" className="text-white text-lg hover:text-red-500 transition duration-300">
                  Log In
                </a>
                <a href="/signup" className="text-white text-lg px-4 py-2 rounded hover:bg-red-500 transition duration-300">
                  Sign Up
                </a>
              </div>
            )}
            {user && (
              <button onClick={handleClick} className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-transparent rounded group py-1.5 px-2.5">
              <span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white">Log Out</span>
            </button>
            
            )}
          </div>
  
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={handleMenuToggle}>
              <svg className="w-6 h-6 text-white hover:text-red-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      {/* Mobile menu */}
      <div className={`mobile-menu transition-max-height duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-60' : 'max-h-0'}`}>
        <ul>
          <li><a href="/" className="block text-sm px-2 py-4 text-white bg-red-600 font-semibold">Home</a></li>
          <li><a href="/services" className="block text-sm px-2 py-4 hover:bg-red-600 transition duration-300">Services</a></li>
          <li><a href="/about" className="block text-sm px-2 py-4 hover:bg-red-600 transition duration-300">About</a></li>
          <li><a href="/contact" className="block text-sm px-2 py-4 hover:bg-red-600 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
  
  
}

export default Navbar;
