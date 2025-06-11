import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4">
      <h1 className="text-5xl font-bold mb-4">Welcome to DevGames</h1>
      <p className="text-lg mb-6">Compete. Code. Conquer.</p>
      <div className="flex space-x-4">
        <Link to="/matchmaking" className="bg-white text-indigo-600 px-6 py-2 rounded-xl font-semibold shadow hover:bg-gray-200">
          Start Match
        </Link>
        <Link to="/leaderboard" className="bg-white text-purple-600 px-6 py-2 rounded-xl font-semibold shadow hover:bg-gray-200">
          View Leaderboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
