import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center bg-blue-200 p-6">
        <h2 className="text-2xl font-semibold mb-4">Meeting Room</h2>
        <p className="text-lg mb-6">Book your meeting rooms easily!</p>
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-green-900 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
              Register
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
