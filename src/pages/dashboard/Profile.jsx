import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Profile Overview</h1>

      <div className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
        <div className="w-24 h-24 bg-blue-600 text-white text-3xl font-bold flex items-center justify-center rounded-full">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">{user?.name}</h2>
          <p className="text-gray-600">{user?.email}</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded shadow p-5">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Account Info</h3>
          <ul className="space-y-2 text-gray-600">
            <li><strong>Name:</strong> {user?.name}</li>
            <li><strong>Email:</strong> {user?.email}</li>
            <li><strong>Role:</strong> Basic User</li>
            <li><strong>Status:</strong> Active</li>
          </ul>
        </div>

        <div className="bg-white rounded shadow p-5">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Security</h3>
          <ul className="space-y-2 text-gray-600">
            <li><strong>Password:</strong> ********</li>
            <li><strong>2FA:</strong> Not Enabled</li>
            <li><strong>Last Login:</strong> Just now</li>
          </ul>
          <button className="mt-4 text-blue-600 hover:underline">
            Change Password
          </button>
        </div>

        <div className="bg-white rounded shadow p-5 md:col-span-2">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Logged in from Chrome (India)</li>
            <li>Signed up 2 days ago</li>
            <li>No suspicious activity detected</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
