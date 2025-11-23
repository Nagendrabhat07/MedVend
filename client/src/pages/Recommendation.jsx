import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recommendation = ({ diagnosisData }) => {
  const navigate = useNavigate();

  // Redirect to diagnose if no data
  React.useEffect(() => {
    if (!diagnosisData) {
      navigate('/diagnose');
    }
  }, [diagnosisData, navigate]);

  if (!diagnosisData) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Diagnosis Summary
          </h2>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Recommended Tablet</p>
              <p className="text-lg font-semibold text-gray-800">
                {diagnosisData.tablet}
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Dosage</p>
              <p className="text-lg font-semibold text-gray-800">
                {diagnosisData.dosage}
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Compartment</p>
              <p className="text-lg font-semibold text-gray-800">
                {diagnosisData.compartment}
              </p>
            </div>

            {diagnosisData.message && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  {diagnosisData.message}
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate('/payment')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;

