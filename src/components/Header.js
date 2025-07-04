import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const logoUrl = "/logo192.png";

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("auth") === "true";
  const { t, i18n } = useTranslation();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link to="/notes" className="navbar-brand d-flex align-items-center">
        <img
          src={logoUrl}
          alt="Kafein Not Logo"
          width="40"
          height="40"
          className="me-2"
          style={{ cursor: "pointer" }}
        />
        <span>Kafein Not</span>
      </Link>
      <div className="ms-auto d-flex align-items-center gap-3">
        <select
          className="form-select form-select-sm"
          onChange={changeLanguage}
          defaultValue={i18n.language}
          style={{ width: "100px" }}
        >
          <option value="tr">Türkçe</option>
          <option value="en">English</option>
        </select>
        <Link className="btn btn-outline-light" to="/add-note">
          {t("Add Note")}
        </Link>
        {isAuthenticated && (
          <button className="btn btn-danger" onClick={logout}>
            {t("Logout")}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;