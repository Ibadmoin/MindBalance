import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="text-blue-400 hover:underline border border-blue-400 px-4 py-2 rounded"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
