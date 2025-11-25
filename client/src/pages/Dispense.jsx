import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dispense = ({ diagnosisData }) => {
  const navigate = useNavigate();
  const [dispensing, setDispensing] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Redirect if no diagnosis data
  useEffect(() => {
    if (!diagnosisData) {
      navigate('/diagnose');
      return;
    }

    // Auto-dispense on mount
    handleDispense();
  }, []);

  const handleDispense = async () => {
    if (!diagnosisData) return;

    setDispensing(true);
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post('https://medvend-serve.onrender.com/api/dispense', {
        compartment: diagnosisData.compartment
      });

      if (response.data.success) {
        setSuccess(true);
        setDispensing(false);
      } else {
        setError(response.data.message || 'Dispensing failed');
        setDispensing(false);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to connect to server');
      setDispensing(false);
    }
  };

  if (!diagnosisData) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Dispensing Medicine
          </h2>

          {dispensing && !success && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-lg text-gray-700">Dispensing...</p>
              <p className="text-sm text-gray-500 mt-2">
                Compartment: {diagnosisData.compartment}
              </p>
            </div>
          )}

          {success && (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✅</div>
              <p className="text-2xl font-bold text-green-600 mb-2">
                Tablet Dispensed
              </p>
              <p className="text-gray-600 mb-6">
                Your medicine has been dispensed from {diagnosisData.compartment}
              </p>
              <button
                onClick={() => navigate('/')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md"
              >
                Return to Home
              </button>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
              <button
                onClick={handleDispense}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
              >
                Retry Dispense
              </button>
            </div>
          )}

          {!dispensing && !success && !error && (
            <div className="text-center py-8">
              <button
                onClick={handleDispense}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
              >
                Dispense Tablet
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dispense;

