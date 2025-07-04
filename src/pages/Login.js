import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      localStorage.setItem("auth", "true");
      navigate("/notes");
    } else {
      alert(t("Invalid username or password"));
    }
  };

  return (
    <form className="container mt-5" onSubmit={handleLogin}>
      <h2 className="mb-4">{t("Login")}</h2>
      <div className="mb-3">
        <input
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={t("Login")}
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder={t("Login")}
          required
        />
      </div>
      <button className="btn btn-primary" type="submit">
        {t("Login")}
      </button>
    </form>
  );
};

export default Login;
