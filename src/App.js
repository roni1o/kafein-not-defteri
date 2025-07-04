import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/notes" />} />
        <Route path="/login" element={<Login />} />
        {isAuthenticated ? (
          <>
            <Route path="/notes" element={<Notes />} />
            <Route path="/add-note" element={<AddNote />} />
            <Route path="/edit-note/:id" element={<EditNote />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;