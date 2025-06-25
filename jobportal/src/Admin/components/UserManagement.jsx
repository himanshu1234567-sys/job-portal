import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 lg:px-50  md:px-10 py-6">
      {/* Back and Heading */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center text-sm text-gray-600 hover:text-black"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </button>
        <h2 className="text-xl font-bold text-gray-900">User Management</h2>
      </div>

      {/* Placeholder Content */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200 text-center text-gray-500">
        No user data yet.
      </div>
    </div>
  );
};

export default UserManagement;
