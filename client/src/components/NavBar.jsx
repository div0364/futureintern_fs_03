import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="text-lg font-bold text-white">StaffSync</div>
        <div className="flex items-center space-x-4">
          <Link
            to="/dashboard"
            className="px-4 py-2 text-gray-900 bg-white rounded-lg hover:bg-gray-200"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
