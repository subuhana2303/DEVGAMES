import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    fetch(`/api/user/profile/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(console.error);
  }, []);

  if (!user) return <div className="p-6">Loading profile...</div>;

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Rating:</strong> {user.score || 1200}</p>
    </div>
  );
};

export default Profile;
