import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const { user, token } = useSelector(state => state.auth);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-3xl font-bold">Movie Review Page</h1>
      </header>

      <main className="p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the Movie Review Page</h2>
          <p className="mb-2"><strong>User:</strong> {user}</p>
          <p><strong>Token:</strong> {token}</p>
        </div>
      </main>

      <footer className="bg-blue-600 p-4 text-white mt-4">
        <p>&copy; 2024 Movie Review Page. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
