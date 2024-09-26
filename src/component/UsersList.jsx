import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const UsersDetails = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user/allUser');
                const data = await response.json();

                if (data.users && Array.isArray(data.users)) {
                    setUsers(data.users);
                } else {
                    throw new Error('Unexpected response format');
                }
            } catch (error) {
                setError(error.message);
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/user/${userId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setUsers(users.filter(user => user._id !== userId));
                if (selectedUser && selectedUser._id === userId) {
                    setSelectedUser(null);
                }
            } else {
                throw new Error('Failed to delete user');
            }
        } catch (error) {
            setError(error.message);
            console.error('Error deleting user:', error);
        }
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const confirmDelete = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            handleDelete(userId);
        }
    };
    return (
        <div className="p-6 bg-gray-50 flex flex-col md:flex-row">
        {error ? (
          <p className="text-red-500 text-center">Error: {error}</p>
        ) : (
          <div className="w-full md:w-1/2 bg-white rounded shadow-lg p-6 mr-4">
            <ul className="space-y-4 h-64 overflow-y-auto">
              {users.map((user) => (
                <li 
                  key={user._id} 
                  className="flex items-center justify-between p-4 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer transition"
                  onClick={() => handleUserClick(user)}
                >
                  <div>
                    <p className="text-lg font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); confirmDelete(user._id); }} 
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedUser && (
          <div className="w-full md:w-1/2 mt-6 md:mt-0 p-6 bg-white rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">User Details</h2>
            <p className="mb-2"><strong>Name:</strong> {selectedUser.name}</p>
            <p className="mb-2"><strong>Email:</strong> {selectedUser.email}</p>
            <p className="mb-2"><strong>Mobile Number:</strong> {selectedUser.mobile}</p>
          </div>
        )}
      </div>
    );
};


export default UsersDetails;
