import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AdminDashboard from "./AdminDashboard";
import FraudDetection from "./FraudDetection";  // Adjust the path based on your project structure
import Login from "./Login";
import CreditCardDetection from "./CreditCardDetection"; // Adjust the path based on your project structure
import Userdetails from "./Userdetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/transaction" element={<FraudDetection />} />
        <Route path="/credit" element={<CreditCardDetection />} />
        <Route path="/userdetails" element={<Userdetails />} />
        <Route path="/admin/*" element={<AdminDashboard />}>
          <Route index element={<h2>Welcome to Admin Dashboard</h2>} />
          <Route path="fraud-detection" element={<FraudDetection />} />
          <Route path="credit-card-detection" element={<CreditCardDetection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;