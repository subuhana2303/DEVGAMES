import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/user/leaderboard')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Leaderboard</h2>
      <table className="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="text-left px-6 py-3">Rank</th>
            <th className="text-left px-6 py-3">Username</th>
            <th className="text-left px-6 py-3">Rating</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id} className="border-t">
              <td className="px-6 py-4">{i + 1}</td>
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">{user.score || 1200}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
