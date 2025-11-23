import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const showBackButton = location.pathname !== '/';

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <button
                onClick={() => navigate(-1)}
                className="text-white hover:text-blue-200 transition-colors"
                aria-label="Go back"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            <h1 className="text-xl font-bold">AI Medical Vending</h1>
          </div>
          {location.pathname !== '/' && (
            <button
              onClick={() => navigate('/')}
              className="text-white hover:text-blue-200 transition-colors text-sm"
            >
              Home
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

