import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to AI Medical Vending
          </h1>
          <p className="text-gray-600 mb-8">
            Get instant medical recommendations based on your symptoms. 
            Our AI-powered system analyzes your condition and dispenses 
            the appropriate medication quickly and safely.
          </p>
          <button
            onClick={() => navigate('/diagnose')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md"
          >
            Start Diagnosis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

