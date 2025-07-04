import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("auth") === "true";

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/notes">
        Kafein Not
      </Link>
      <div className="ms-auto d-flex gap-2">
        <Link className="btn btn-outline-light" to="/add-note">Not Ekle</Link>
        {isAuthenticated && (
          <button className="btn btn-danger" onClick={logout}>
            Çıkış Yap
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
