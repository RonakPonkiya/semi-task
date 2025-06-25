import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/dashboard" className="font-bold text-lg">
            MyApp
          </Link>
          <nav className="space-x-4">
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default UserLayout;
