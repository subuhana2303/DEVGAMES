import React from 'react';
import { useNavigate } from 'react-router-dom';

const Matchmaking = () => {
  const navigate = useNavigate();

  const handleStart = async () => {
    // Replace with real API call
    const mockMatchId = '123456';
    navigate(`/duel/${mockMatchId}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6">Matchmaking</h2>
      <button
        onClick={handleStart}
        className="bg-indigo-600 text-white px-8 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
      >
        Find Opponent & Start
      </button>
    </div>
  );
};

export default Matchmaking;
