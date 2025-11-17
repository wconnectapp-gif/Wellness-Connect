import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80dvh] bg-gray-50 dark:bg-background-dark px-6 text-center">
      <FaExclamationTriangle className="text-primary text-4xl mb-6" />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
        404
      </h1>

      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-300 to-blue-300 hover:from-green-400 hover:to-blue-400 text-sm font-bold text-gray-900 shadow-sm transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
