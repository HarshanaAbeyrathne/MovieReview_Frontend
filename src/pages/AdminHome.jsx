import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaFilm } from "react-icons/fa";


function AdminHome() {
  const navigate = useNavigate();

  // const handleClick = async () => {
  //   navigate('/adminUsers');
  // };

  return (
    <div className=" bg-gray-100 flex flex-col p-2">
      <h1 className="text-3xl font-bold mb-8">Admin Home</h1>
      
      <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
        <FaUser className="text-4xl text-blue-500" />
        <button 
           onClick={() => navigate('/adminUsers')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          User Control
        </button>
      </div>

      <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
        <FaFilm className="text-4xl text-blue-500" />
        <button 
          onClick={() => navigate('/addMovie')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Add Movie
        </button>
      </div>
    </div>
  );
}

export default AdminHome;
