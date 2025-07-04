import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      localStorage.setItem("auth", "true");
      navigate("/notes"); // --> Burada notlar sayfasına yönlendir
    } else {
      alert("Geçersiz kullanıcı adı veya şifre.");
    }
  };

  return (
    <form className="container mt-5" onSubmit={handleLogin}>
      <h2 className="mb-4">Giriş Yap</h2>
      <div className="mb-3">
        <input
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Kullanıcı Adı"
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Şifre"
          required
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Giriş
      </button>
    </form>
  );
};

export default Login;
