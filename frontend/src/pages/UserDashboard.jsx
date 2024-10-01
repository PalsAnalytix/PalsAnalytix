import React from 'react';
import UserDetails from '../components/UserDetails';
import UserStats from '../components/UserStats';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid lg:grid-cols-2 gap-4">
        {/* User Details */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <UserDetails />
        </div>

        {/* User Stats */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <UserStats />
        </div>
      </div>

      {/* Available Questions/Tests */}
    </div>
  );
};

export default UserDashboard;
