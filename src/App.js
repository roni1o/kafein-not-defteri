import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<div>Login Page (To be implemented)</div>} />
      </Routes>
    </Router>
  );
}

export default App;