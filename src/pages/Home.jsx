import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../component/Navbar';

function Home() {
  const { user, token } = useSelector(state => state.auth);

  return (
    <div className="min-h-screen bg-cover bg-center" 
    style={{ backgroundImage: `url('/src/assets/images/wallpaper1.jpg')` }}>

    <Navbar />

    




    <form class="max-w-md mx-auto ">
      <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input type="search" id="default-search" 
          class="block w-full p-4 pl-10 text-sm text-white border border-gray-300 rounded-lg bg-transparent placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 
          hover:border-white-00 hover:shadow-lg hover:shadow-blue-100 transition-all ease-in-out duration-500" placeholder="Search Movie name, title.." required />
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition-all">Search</button>
      </div>
    </form>




      <footer className="p-4 text-white mt-4">
        <p>&copy; 2024 Movie Review Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
