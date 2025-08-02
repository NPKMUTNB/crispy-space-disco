import React, { useState } from 'react';
import './App.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
      return;
    }
    setError('');
    if (onLogin) {
      onLogin({ username, password });
    }
  };

  return (
    <div className="login-container-responsive">
      <form className="login-form-responsive" onSubmit={handleSubmit}>
        <h2 className="login-title">เข้าสู่ระบบ</h2>
        {error && <div className="login-error">{error}</div>}
        <div className="login-field">
          <label htmlFor="username">ชื่อผู้ใช้</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            placeholder="Username"
          />
        </div>
        <div className="login-field">
          <label htmlFor="password">รหัสผ่าน</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Password"
          />
        </div>
        <button className="login-btn" type="submit">เข้าสู่ระบบ</button>
      </form>
      <style>{`
        .login-container-responsive {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 40vh;
        }
        .login-form-responsive {
          background: #fff;
          padding: 2rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          width: 100%;
          max-width: 350px;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .login-title {
          text-align: center;
          margin-bottom: 0.5rem;
          color: #222;
        }
        .login-field {
          display: flex;
          flex-direction: column;
        }
        .login-field label {
          margin-bottom: 0.3rem;
          font-size: 1rem;
          color: #444;
        }
        .login-field input {
          padding: 0.6rem 0.8rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
          transition: border 0.2s;
        }
        .login-field input:focus {
          border-color: #007bff;
          outline: none;
        }
        .login-btn {
          background: linear-gradient(90deg,#007bff,#00c6ff);
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 0.7rem;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .login-btn:hover {
          background: linear-gradient(90deg,#0056b3,#007bff);
        }
        .login-error {
          color: #d32f2f;
          background: #ffeaea;
          padding: 0.5rem;
          border-radius: 6px;
          text-align: center;
          font-size: 0.95rem;
        }
        @media (max-width: 500px) {
          .login-form-responsive {
            padding: 1rem 0.5rem;
            max-width: 95vw;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;
