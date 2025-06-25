import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Welcome, <span className="text-blue-600">{user?.name}</span> 👋
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow rounded p-5">
            <h2 className="text-xl font-semibold text-gray-700">Total Projects</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">5</p>
          </div>

          <div className="bg-white shadow rounded p-5">
            <h2 className="text-xl font-semibold text-gray-700">Tasks Completed</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">27</p>
          </div>
    
          <div className="bg-white shadow rounded p-5">
            <h2 className="text-xl font-semibold text-gray-700">Pending Reviews</h2>
            <p className="text-3xl font-bold text-red-500 mt-2">3</p>
          </div>
        </div>

        <div className="mt-10 bg-white shadow rounded p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Create Project
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              View Tasks
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
              Profile Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
