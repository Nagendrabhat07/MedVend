import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Diagnose from './pages/Diagnose';
import Recommendation from './pages/Recommendation';
import Payment from './pages/Payment';
import Dispense from './pages/Dispense';

function App() {
  // Global state to pass diagnosis data between pages
  const [diagnosisData, setDiagnosisData] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/diagnose" 
            element={<Diagnose setDiagnosisData={setDiagnosisData} />} 
          />
          <Route 
            path="/recommendation" 
            element={<Recommendation diagnosisData={diagnosisData} />} 
          />
          <Route 
            path="/payment" 
            element={<Payment diagnosisData={diagnosisData} />} 
          />
          <Route 
            path="/dispense" 
            element={<Dispense diagnosisData={diagnosisData} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

