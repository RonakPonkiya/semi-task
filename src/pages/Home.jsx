import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">Welcome to Our App</h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
