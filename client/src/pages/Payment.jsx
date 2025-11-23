import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = ({ diagnosisData }) => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Redirect if no diagnosis data
  React.useEffect(() => {
    if (!diagnosisData) {
      navigate('/diagnose');
    }
  }, [diagnosisData, navigate]);

  const handlePaymentMethod = (method) => {
    setSelectedMethod(method);
    // Simulate payment success after selection
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 500);
  };

  const handleDispense = () => {
    navigate('/dispense');
  };

  if (!diagnosisData) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Select Payment Method
          </h2>

          {!paymentSuccess ? (
            <div className="space-y-4">
              <button
                onClick={() => handlePaymentMethod('UPI')}
                className={`w-full p-4 border-2 rounded-lg transition-all ${
                  selectedMethod === 'UPI'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">UPI</span>
                  <span className="text-2xl">📱</span>
                </div>
              </button>

              <button
                onClick={() => handlePaymentMethod('Card')}
                className={`w-full p-4 border-2 rounded-lg transition-all ${
                  selectedMethod === 'Card'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Card</span>
                  <span className="text-2xl">💳</span>
                </div>
              </button>

              <button
                onClick={() => handlePaymentMethod('Cash')}
                className={`w-full p-4 border-2 rounded-lg transition-all ${
                  selectedMethod === 'Cash'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Cash</span>
                  <span className="text-2xl">💵</span>
                </div>
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                <p className="text-lg font-semibold">Payment Successful (Demo)</p>
                <p className="text-sm mt-1">Method: {selectedMethod}</p>
              </div>

              <button
                onClick={handleDispense}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
              >
                Dispense
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;

