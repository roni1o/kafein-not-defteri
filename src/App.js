import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import Header from "./components/Header";

const App = () => {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/notes" /> : <Navigate to="/login" />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/notes"
          element={isAuthenticated ? <Notes /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-note"
          element={isAuthenticated ? <AddNote /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-note/:id"
          element={isAuthenticated ? <EditNote /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
