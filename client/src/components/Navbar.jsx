import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold">DevGames</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/matchmaking" className="hover:text-yellow-300">Matchmaking</Link>
        <Link to="/leaderboard" className="hover:text-yellow-300">Leaderboard</Link>
        <Link to="/profile" className="hover:text-yellow-300">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
